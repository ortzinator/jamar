<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Holders
            </h2>
        </template>

        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <div class="mb-4">
                <input
                    type="text"
                    v-model="searchTerm"
                    placeholder="Search..."
                    class="border-0 shadow rounded"
                />
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
                        </tr>
                        <tr v-for="holder in holders.data" :key="holder.id">
                            <td class="border-t">
                                <inertia-link
                                    :href="route('holders.edit', holder.id)"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ holder.name }}</inertia-link
                                >
                            </td>
                            <td class="border-t">
                                <inertia-link
                                    :href="route('holders.edit', holder.id)"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ holder.address }}</inertia-link
                                >
                            </td>
                            <td class="border-t w-px">
                                <inertia-link
                                    class="px-4 flex items-center"
                                    :href="route('holders.edit', holder.id)"
                                    tabindex="-1"
                                >
                                    <icon
                                        name="cheveron-right"
                                        class="block w-6 h-6 fill-gray-400"
                                    />
                                </inertia-link>
                            </td>
                        </tr>
                        <tr v-if="holders.data.length === 0">
                            <td class="border-t px-6 py-4" colspan="4">
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
import Icon from "@/Shared/Icon";
import throttle from "lodash/throttle";

export default {
    props: { sessions: Object, holders: Object, filters: Object },

    components: {
        AppLayout,
        Pagination,
        Icon,
    },

    data() {
        return {
            searchTerm: this.filters.search,
        };
    },

    watch: {
        searchTerm: {
            handler: throttle(function (value) {
                let options = {
                    data: { search: value },
                    only: ["holders"],
                };
                this.$inertia.reload(options);
            }, 200),
        },
    },
    methods: {
        reset() {
            this.searchTerm = "";
        },
    },
};
</script>
