<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Holders
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
                            <th class="px-6 pt-6 pb-4">Name</th>
                            <th class="px-6 pt-6 pb-4">Address</th>
                            <th class="px-6 pt-6 pb-4">Policies</th>
                            <th></th>
                        </tr>
                        <tr v-for="holder in holders.data" :key="holder.id">
                            <td class="border-t">
                                <inertia-link
                                    :href="holder.link"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ holder.name }}</inertia-link
                                >
                            </td>
                            <td class="border-t">
                                <inertia-link
                                    :href="holderLink(holder.id)"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ holder.address }}</inertia-link
                                >
                            </td>
                            <td class="border-t">
                                <inertia-link
                                    :href="holderLink(holder.id)"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                >
                                    <span
                                        v-if="holder.policies.length > 0"
                                        v-text="holder.policies.length"
                                    ></span
                                ></inertia-link>
                            </td>
                            <td class="border-t w-px">
                                <inertia-link
                                    class="px-4 flex items-center"
                                    :href="holderLink(holder.id)"
                                    tabindex="-1"
                                >
                                    <chevron-right-icon
                                        class="block h-5 text-gray-400 w-5"
                                    />
                                </inertia-link>
                            </td>
                        </tr>
                        <tr v-if="holders.data.length === 0">
                            <td
                                class="border-t px-6 py-4 text-gray-400"
                                colspan="4"
                            >
                                No policyholders found.
                            </td>
                        </tr>
                    </table>
                </div>
                <pagination :links="holders.links"></pagination>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Pagination from "@/Shared/Pagination";
import JetCheckbox from "@/Jetstream/Checkbox";
import { ChevronRightIcon } from "@heroicons/vue/outline";

import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: { sessions: Object, holders: Object, filters: Object },

    components: {
        AppLayout,
        Pagination,
        JetCheckbox,
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
                .get("/holders", {
                    only: ["holders"],
                    preserveState: true,
                    preserveScroll: true,
                });
        }, 200),
        reset() {
            this.searchForm.search = "";
            this.searchForm.trashed = null;
        },
        holderLink(id) {
            return route("holders.edit", id);
        },
    },
};
</script>
