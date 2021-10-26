<template>
    <div class="font-bold py-5">
        <inertia-head title="Policies" />
        <h1>Policies</h1>
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
                :href="route('policies.create')"
            >
                <span>Create</span>
                <span class="hidden md:inline"> Policy</span>
            </inertia-link>
        </div>
        <div class="shadow rounded bg-white overflow-x-auto">
            <DataTable
                :columns="columns"
                :data-source="policies.data"
                route-name="policies.edit"
            >
                <template #[`column.number`]="{ value }">
                    <span v-html="highlight(value)" />
                </template>
                <template #[`column.period_end`]="{ value }">
                    <span :class="{ 'text-red-vivid-500': isInPast(value) }">
                        {{ formatDate(value) }}
                    </span>
                </template>
                <template #[`column.created_at`]="{ value }">
                    {{ formatDate(value) }}
                </template>
                <template #[`column.premium`]="{ value }">
                    <div class="text-right w-full" v-text="value.formatted" />
                </template>
                <template #[`column.contactNamesPreview`]="{ value, row }">
                    <div
                        v-if="row.contacts.length === 0"
                        class="flex text-red-vivid-600 items-center"
                    >
                        <exclamation-icon class="h-5 mr-2 w-5" />
                        No policyholders found
                    </div>
                    <div
                        v-else
                        class="
                            overflow-ellipsis overflow-hidden
                            whitespace-nowrap
                        "
                        v-html="highlight(value)"
                    />
                </template>
            </DataTable>
        </div>
        <pagination :links="policies.links" />
    </div>
</template>

<script>
import { watch, computed, ref } from 'vue';

import { ExclamationIcon } from '@heroicons/vue/outline';
import { useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/NewLayout';
import Pagination from '@/Shared/Pagination';
import DataTable from '@/Shared/DataTable';
import FilterSelect from '@/Shared/FilterSelect';

import { formatDate, isInPast } from '@/util.js';

export default {
    components: {
        Pagination,
        ExclamationIcon,
        DataTable,
        FilterSelect,
    },
    layout: AppLayout,
    props: {
        policies: { type: Object, required: true },
        filters: { type: Object, required: true },
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed,
        });

        const refreshSearch = _.debounce(() => {
            searchForm
                .transform((data) => _.pickBy(data))
                .get('/policies', {
                    only: ['policies'],
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

        function highlight(text) {
            if (!searchForm.search) {
                return text;
            }

            const escaped = new RegExp(
                searchForm.search.replace(/[.*?^${}()[\]]/g, '\\$&'),
                'i',
            );

            return text.replace(
                escaped,
                '<mark class="bg-light-blue-vivid-600 text-white">$&</mark>',
            );
        }

        watch(formVals, () => refreshSearch());

        const columns = ref([
            { text: 'Number', value: 'number' },
            { text: 'Policyholders', value: 'contactNamesPreview' },
            { text: 'Premium', value: 'premium' },
            { text: 'Date Issued', value: 'created_at' },
            { text: 'Ending', value: 'period_end' },
        ]);

        return {
            searchForm,
            refreshSearch,
            reset,
            formatDate,
            isInPast,
            columns,
            highlight,
        };
    },
};
</script>
