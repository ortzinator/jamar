<template>
    <div class="font-bold py-5">
        <inertia-head title="Contacts" />
        <h1>Contacts</h1>
    </div>

    <div>
        <div class="flex mb-4 justify-between">
            <div class="flex mr-4">
                <div class="flex shadow rounded bg-white cursor-default">
                    <filter-select v-model="searchForm.trashed" />
                    <input
                        v-model="searchForm.search"
                        type="text"
                        placeholder="Search..."
                        class="border-0 rounded-r w-full"
                    />
                </div>
                <button
                    class="
                        ml-3
                        text-sm text-cool-grey-500
                        hover:text-cool-grey-700
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
                    route-name="contacts.edit"
                    :columns="columns"
                    :data-source="contacts.data"
                >
                    <template #[`column.name`]="{ value }">
                        <span v-html="highlight(value, searchForm.search)" />
                    </template>
                    <template #[`column.address`]="{ value }">
                        <span v-html="highlight(value, searchForm.search)" />
                    </template>
                </DataTable>
            </div>
            <pagination :links="contacts.links"></pagination>
        </div>
    </div>
</template>

<script>
import { watch, computed, ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { highlight } from '@/util.js';

import AppLayout from '@/Layouts/NewLayout';
import Pagination from '@/Shared/Pagination';
import FilterSelect from '@/Shared/FilterSelect';
import DataTable from '@/Shared/DataTable';

export default {
    components: {
        Pagination,
        DataTable,
        FilterSelect,
    },
    layout: AppLayout,
    props: {
        contacts: { type: Object, required: true },
        filters: { type: Object, required: true },
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed,
        });

        const columns = ref([
            { text: 'Name', value: 'name' },
            { text: 'Address', value: 'address' },
            { text: 'Policies', value: 'policies_count' },
        ]);

        const refreshSearch = _.debounce(() => {
            searchForm
                .transform((data) => _.pickBy(data))
                .get('/contacts', {
                    only: ['contacts'],
                    preserveState: true,
                    preserveScroll: true,
                });
        }, 400);

        const formVals = computed(() => ({
            search: searchForm.search,
            trashed: searchForm.trashed,
        }));

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
            contactLink,
            columns,
            highlight,
        };
    },
};
</script>
