<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Holders
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <input
                    type="text"
                    v-model="searchTerm"
                    placeholder="Search..."
                />
            </div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div class="shadow rounded bg-white">
                    <table class="w-full">
                        <tr>
                            <th class="px-6 pt-6 pb-4">Name</th>
                            <th class="px-6 pt-6 pb-4">Address</th>
                        </tr>
                        <tr v-for="holder in holders.data" :key="holder.id">
                            <td class="border-t">
                                <inertia-link
                                    href="#"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ holder.name }}</inertia-link
                                >
                            </td>
                            <td class="border-t">
                                <inertia-link
                                    href="#"
                                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                                    >{{ holder.address }}</inertia-link
                                >
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import throttle from "lodash/throttle";

export default {
    props: { sessions: Object, holders: Object, filters: Object },

    components: {
        AppLayout,
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
};
</script>
