<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Policies" />
        <h1>Policies</h1>
    </div>

    <div>
        <div class="flex justify-between mb-4">
            <div class="flex mr-4">
                <div class="flex bg-white rounded shadow cursor-default">
                    <FilterSelect v-model="searchForm.trashed" />
                    <input
                        v-model="searchForm.search"
                        type="text"
                        placeholder="Search..."
                        class="w-full border-0 rounded-r"
                    />
                </div>
                <button
                    class="ml-3 text-sm text-cool-grey-500 hover:text-cool-grey-700 focus:text-light-blue-vivid-500"
                    type="button"
                    @click="reset"
                >
                    Reset
                </button>
            </div>
            <InertiaLink class="btn btn-primary" :href="route('policies.create')">
                <span>Create</span>
                <span class="hidden md:inline"> Policy</span>
            </InertiaLink>
        </div>
        <div class="overflow-x-auto bg-white rounded shadow">
            <DataTable :columns="columns" :data-source="policies.data" route-name="policies.edit">
                <template #[`column.number`]="{ value }">
                    <span v-html="highlight(value, searchForm.search)" />
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
                    <div class="w-full text-right" v-text="value.formatted" />
                </template>
                <template #[`column.contactNamesPreview`]="{ value, row }">
                    <div
                        v-if="row.contacts.length === 0"
                        class="flex items-center text-red-vivid-600"
                    >
                        <ExclamationIcon class="w-5 h-5 mr-2" />
                        No policyholders found
                    </div>
                    <div
                        v-else
                        class="overflow-hidden text-ellipsis whitespace-nowrap"
                        v-html="highlight(value, searchForm.search)"
                    />
                </template>
            </DataTable>
        </div>
        <Pagination :links="policies.links" />
    </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';

import { ExclamationIcon } from '@heroicons/vue/outline';
import { useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/NewLayout';
import Pagination from '@/Shared/Pagination';
import DataTable from '@/Shared/DataTable';
import FilterSelect from '@/Shared/FilterSelect';

import { formatDate, isInPast, highlight } from '@/util.js';

defineOptions({
    layout: AppLayout,
});
const props = defineProps({
    policies: { type: Object, required: true },
    filters: { type: Object, required: true },
});
const searchForm = useForm({
    search: props.filters.search ?? '',
    trashed: props.filters.trashed ?? '',
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

watch(formVals, () => refreshSearch());

const columns = ref([
    { text: 'Number', value: 'number' },
    { text: 'Policyholders', value: 'contactNamesPreview' },
    { text: 'Premium', value: 'premium' },
    { text: 'Date Issued', value: 'created_at' },
    { text: 'Ending', value: 'period_end' },
]);
</script>
