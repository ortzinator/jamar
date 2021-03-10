<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Policies
            </h2>
        </template>

        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <div class="flex mb-4">
                <div class="flex shadow rounded">
                    <select
                        v-model="searchForm.trashed"
                        class="border-0 border-gray-200 border-r rounded-l text-gray-500"
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
                    class="ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500"
                    type="button"
                    @click="reset"
                >
                    Reset
                </button>
            </div>
            <div class="">
                <div class="shadow rounded bg-white">
                    <table class="w-full">
                        <tr class="text-left">
                            <th class="px-6 pt-6 pb-4">Number</th>
                            <th></th>
                        </tr>
                        <tr v-for="policy in policies.data" :key="policy.id">
                            <td class="border-t">
                                <inertia-link
                                    :href="route('policies.edit', policy.id)"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ policy.number }}</inertia-link
                                >
                            </td>
                            <td class="border-t w-px">
                                <inertia-link
                                    class="px-4 flex items-center"
                                    :href="route('policies.edit', policy.id)"
                                    tabindex="-1"
                                >
                                    <icon
                                        name="cheveron-right"
                                        class="block fill-current h-6 text-gray-400 w-6"
                                    />
                                </inertia-link>
                            </td>
                        </tr>
                        <tr v-if="policies.data.length === 0">
                            <td class="border-t px-6 py-4" colspan="4">
                                No policies found.
                            </td>
                        </tr>
                    </table>
                </div>
                <pagination :links="policies.links"></pagination>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Pagination from "@/Shared/Pagination";
import Icon from "@/Shared/Icon";
import JetCheckbox from "@/Jetstream/Checkbox";

import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: { sessions: Object, policies: Object, filters: Object },

    components: {
        AppLayout,
        Pagination,
        Icon,
        JetCheckbox,
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed,
        });

        return { searchForm };
    },
    computed: {
        formVals() {
            return {
                search: this.searchForm.search,
                trashed: this.searchForm.trashed,
            };
        },
    },
    watch: {
        formVals() {
            this.refreshSearch();
        },
    },
    methods: {
        refreshSearch: throttle(function () {
            this.searchForm
                .transform((data) => pickBy(data))
                .get("/policies", {
                    only: ["policies"],
                    preserveState: true,
                    preserveScroll: true,
                });
        }, 200),
        reset() {
            this.searchForm.reset();
        },
    },
};
</script>
