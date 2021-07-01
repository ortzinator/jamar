<template>
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
                <inertia-link
                    class="btn btn-primary"
                    :href="route('policies.create')"
                >
                    New Policy
                </inertia-link>
            </div>
            <div class="">
                <div class="shadow rounded bg-white">
                    <table class="w-full table-fixed">
                        <tr class="text-left">
                            <th class="px-6 pt-6 pb-4 w-2/12">Number</th>
                            <th class="px-6 pt-6 pb-4 w-2/12">Date Issued</th>
                            <th class="px-6 pt-6 pb-4 w-7/12">Holders</th>
                            <th class="w-1/12"></th>
                        </tr>
                        <tr v-for="policy in policies.data" :key="policy.id">
                            <td class="border-t">
                                <inertia-link
                                    :href="route('policies.edit', policy.id)"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ policy.number }}</inertia-link
                                >
                            </td>
                            <td class="border-t">
                                <inertia-link
                                    :href="route('policies.edit', policy.id)"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    :title="
                                        new Date(
                                            policy.created_at
                                        ).toLocaleString()
                                    "
                                    >{{
                                        formatDate(policy.created_at)
                                    }}</inertia-link
                                >
                            </td>
                            <td class="border-t">
                                <inertia-link
                                    :href="route('policies.edit', policy.id)"
                                    class="px-6 py-4 flex focus:text-indigo-500"
                                >
                                    <div
                                        v-if="policy.holders.length === 0"
                                        class="flex text-red-600 items-center"
                                    >
                                        <exclamation-icon
                                            class="h-5 mr-2 w-5"
                                        />
                                        No policyholders found
                                    </div>
                                    <div
                                        v-else
                                        v-text="policy.holderNamesPreview"
                                        class="overflow-ellipsis overflow-hidden whitespace-nowrap"
                                    ></div>
                                </inertia-link>
                            </td>
                            <td class="border-t w-px">
                                <inertia-link
                                    class="px-4 flex items-center"
                                    :href="route('policies.edit', policy.id)"
                                    tabindex="-1"
                                >
                                    <chevron-right-icon
                                        class="block h-5 text-gray-400 w-5"
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
import JetCheckbox from "@/Jetstream/Checkbox";
import { ExclamationIcon } from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/outline";

import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: { sessions: Object, policies: Object, filters: Object },

    components: {
        AppLayout,
        Pagination,
        JetCheckbox,
        ExclamationIcon,
        ChevronRightIcon,
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
            this.searchForm.search = "";
            this.searchForm.trashed = null;
        },
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString(undefined, options);
        },
    },
};
</script>
