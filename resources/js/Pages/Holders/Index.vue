<template>
    <div>
        <app-layout>
            <template #header>
                <h2>Holders</h2>
            </template>

            <div>
                <div class="flex mb-4 justify-between">
                    <div class="flex">
                        <div class="flex shadow rounded">
                            <select
                                v-model="searchForm.trashed"
                                class="
                                    border-0 border-gray-200 border-r
                                    rounded-l
                                    text-gray-500
                                "
                            >
                                <option :value="null">Filter...</option>
                                <option value="with">With Trashed</option>
                                <option value="only">Only Trashed</option>
                            </select>
                            <input
                                type="text"
                                v-model="searchForm.search"
                                placeholder="Search..."
                                class="border-0 rounded-r"
                            />
                        </div>
                        <button
                            class="
                                ml-3
                                text-sm text-gray-500
                                hover:text-gray-700
                                focus:text-indigo-500
                            "
                            type="button"
                            @click="reset"
                        >
                            Reset
                        </button>
                    </div>
                    <inertia-link
                        class="btn btn-primary"
                        :href="route('holders.create')"
                    >
                        New Policyholder
                    </inertia-link>
                </div>
                <div class="">
                    <div class="shadow rounded bg-white overflow-x-auto">
                        <DataTable
                            :dataSource="holders.data"
                            :columns="columns"
                            routeName="holders.edit"
                        />
                    </div>
                    <pagination :links="holders.links"></pagination>
                </div>
            </div>
        </app-layout>
    </div>
</template>

<script>
import { watch, computed, ref } from "vue";
import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import { useForm } from "@inertiajs/inertia-vue3";

import AppLayout from "@/Layouts/NewLayout";
import Pagination from "@/Shared/Pagination";
import JetCheckbox from "@/Jetstream/Checkbox";
import { ChevronRightIcon } from "@heroicons/vue/outline";
import DataTable from "@/Shared/DataTable";

export default {
    props: { sessions: Object, holders: Object, filters: Object },

    components: {
        AppLayout,
        Pagination,
        JetCheckbox,
        ChevronRightIcon,
        DataTable,
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed,
        });

        const columns = ref([
            { text: "Name", value: "name" },
            { text: "Address", value: "address" },
            { text: "Policies", value: "policies_count" },
        ]);

        const refreshSearch = throttle(function () {
            searchForm
                .transform((data) => pickBy(data))
                .get("/holders", {
                    only: ["holders"],
                    preserveState: true,
                    preserveScroll: true,
                });
        }, 200);

        const formVals = computed(() => {
            return {
                search: searchForm.search,
                trashed: searchForm.trashed,
            };
        });

        function formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString(undefined, options);
        }

        function reset() {
            searchForm.search = "";
            searchForm.trashed = null;
        }

        function holderLink(id) {
            return route("holders.edit", id);
        }

        watch(formVals, () => refreshSearch());

        return {
            searchForm,
            refreshSearch,
            reset,
            formatDate,
            holderLink,
            columns,
        };
    },
};
</script>
