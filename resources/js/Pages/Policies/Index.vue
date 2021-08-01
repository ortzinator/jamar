<template>
    <div>
        <app-layout>
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Policies
                </h2>
            </template>

            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
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
                        :href="route('policies.create')"
                    >
                        New Policy
                    </inertia-link>
                </div>
                <div class="shadow rounded bg-white">
                    <DataTable
                        :columns="columns"
                        :dataSource="policies.data"
                        routeName="policies.edit"
                    >
                        <template v-slot:[`column.period_end`]="{ value }">
                            <span
                                :class="{ 'text-red-500': pastDate(value) }"
                                >{{ formatDate(value) }}</span
                            >
                        </template>
                        <template v-slot:[`column.created_at`]="{ value }">
                            {{ formatDate(value) }}
                        </template>
                        <template
                            v-slot:[`column.holderNamesPreview`]="{
                                value,
                                row,
                            }"
                        >
                            <div
                                v-if="row.holders.length === 0"
                                class="flex text-red-600 items-center"
                            >
                                <exclamation-icon class="h-5 mr-2 w-5" />
                                No policyholders found
                            </div>
                            <div
                                v-else
                                v-text="value"
                                class="
                                    overflow-ellipsis overflow-hidden
                                    whitespace-nowrap
                                "
                            />
                        </template>
                    </DataTable>
                </div>
                <pagination :links="policies.links" />
            </div>
        </app-layout>
    </div>
</template>

<script>
import { watch, computed, ref } from "vue";

import AppLayout from "@/Layouts/AppLayout";
import Pagination from "@/Shared/Pagination";
import DataTable from "@/Shared/DataTable";
import JetCheckbox from "@/Jetstream/Checkbox";
import { ExclamationIcon } from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/outline";

import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import dayjs from "dayjs";

export default {
    props: { sessions: Object, policies: Object, filters: Object },

    components: {
        AppLayout,
        Pagination,
        JetCheckbox,
        ExclamationIcon,
        ChevronRightIcon,
        DataTable,
        Link,
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed,
        });

        const refreshSearch = throttle(function () {
            searchForm
                .transform((data) => pickBy(data))
                .get("/policies", {
                    only: ["policies"],
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
            return dayjs(date).format("MMM DD, YYYY");
        }

        function reset() {
            searchForm.search = "";
            searchForm.trashed = null;
        }

        watch(formVals, () => refreshSearch());

        const columns = ref([
            { text: "Number", value: "number" },
            { text: "Date Issued", value: "created_at" },
            { text: "Ending", value: "period_end" },
            { text: "Holders", value: "holderNamesPreview" },
        ]);

        function pastDate(date) {
            return dayjs(date).isBefore(dayjs());
        }

        return {
            searchForm,
            refreshSearch,
            reset,
            formatDate,
            columns,
            pastDate,
        };
    },
};
</script>
