<template>
    <app-layout>
        <template #header>
            <h1>Contacts</h1>
        </template>

        <div>
            <div class="flex mb-4 justify-between">
                <div class="flex mr-4">
                    <div class="flex shadow rounded bg-white cursor-default">
                        <filter-select v-model="searchForm.trashed" />
                        <input
                            type="text"
                            v-model="searchForm.search"
                            placeholder="Search..."
                            class="border-0 rounded-r w-full"
                        />
                    </div>
                    <button
                        class="
                            ml-3
                            text-sm text-gray-500
                            hover:text-gray-700
                            focus:text-light-blue-vivid-500
                        "
                        type="button"
                        @click="reset"
                    >
                        Reset
                    </button>
                </div>
                <inertia-link
                    class="btn btn-primary"
                    :href="route('contacts.create')"
                >
                    <span>Create</span>
                    <span class="hidden md:inline"> Contact</span>
                </inertia-link>
            </div>
            <div class="">
                <div class="shadow rounded bg-white overflow-x-auto">
                    <DataTable
                        :dataSource="contacts.data"
                        :columns="columns"
                        routeName="contacts.edit"
                    />
                </div>
                <pagination :links="contacts.links"></pagination>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { watch, computed, ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';

import AppLayout from '@/Layouts/NewLayout';
import Pagination from '@/Shared/Pagination';
import FilterSelect from '@/Shared/FilterSelect';
import JetCheckbox from '@/Jetstream/Checkbox';
import { ChevronRightIcon } from '@heroicons/vue/outline';
import DataTable from '@/Shared/DataTable';

export default {
    props: { sessions: Object, contacts: Object, filters: Object },

    components: {
        AppLayout,
        Pagination,
        JetCheckbox,
        ChevronRightIcon,
        DataTable,
        FilterSelect
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed
        });

        const columns = ref([
            { text: 'Name', value: 'name' },
            { text: 'Address', value: 'address' },
            { text: 'Policies', value: 'policies_count' }
        ]);

        const refreshSearch = _.debounce(function () {
            searchForm
                .transform((data) => _.pickBy(data))
                .get('/contacts', {
                    only: ['contacts'],
                    preserveState: true,
                    preserveScroll: true
                });
        }, 400);

        const formVals = computed(() => {
            return {
                search: searchForm.search,
                trashed: searchForm.trashed
            };
        });

        function formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString(undefined, options);
        }

        function reset() {
            searchForm.search = '';
            searchForm.trashed = null;
        }

        function contactLink(id) {
            return route('contacts.edit', id);
        }

        watch(formVals, () => refreshSearch());

        return {
            searchForm,
            refreshSearch,
            reset,
            formatDate,
            contactLink,
            columns
        };
    }
};
</script>
