<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Contacts" />
        <h1>Contacts</h1>
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
            <InertiaLink class="btn btn-primary" :href="route('contacts.create')">
                <span>Create</span>
                <span class="hidden md:inline"> Contact</span>
            </InertiaLink>
        </div>
        <div class="">
            <div class="overflow-x-auto bg-white rounded shadow">
                <DataTable
                    route-name="contacts.edit"
                    :columns="columns"
                    :data-source="contacts.data"
                >
                    <template #[`column.name`]="{ value }">
                        <Highlighter :text="value" :term="searchForm.search" />
                    </template>
                    <template #[`column.address`]="{ value }">
                        <Highlighter :text="value" :term="searchForm.search" />
                    </template>
                </DataTable>
            </div>
            <Pagination :links="contacts.links"></Pagination>
        </div>
    </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';

import AppLayout from '@/Layouts/NewLayout';
import Pagination from '@/Shared/Pagination';
import FilterSelect from '@/Shared/FilterSelect';
import DataTable from '@/Shared/DataTable';
import Highlighter from '@/Shared/Highlighter.vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps({
    contacts: { type: Object, required: true },
    filters: { type: Object, required: true },
});

const searchForm = useForm({
    search: props.filters.search ?? '',
    trashed: props.filters.trashed ?? '',
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

watch(formVals, () => refreshSearch());
</script>
