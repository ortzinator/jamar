<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Contacts" />
        <h1>Contacts</h1>
    </div>

    <div>
        <div class="mb-4 flex justify-between">
            <div class="mr-4 flex">
                <div class="flex cursor-default rounded bg-white shadow">
                    <FilterSelect
                        v-if="$attrs.permissions.includes('update contacts')"
                        v-model="searchForm.trashed"
                    />
                    <input
                        v-model="searchForm.search"
                        type="text"
                        placeholder="Search..."
                        class="w-full rounded-r border-0"
                    />
                </div>
                <button
                    class="text-cool-grey-500 hover:text-cool-grey-700 focus:text-light-blue-vivid-500 ml-3 text-sm"
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
            <div class="overflow-x-auto rounded bg-white shadow">
                <DataTable
                    route-name="contacts.show"
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
            <Pagination :links="contacts.meta.links"></Pagination>
        </div>
    </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

import AppLayout from '@/Layouts/AppLayout.vue';
import Pagination from '@/Shared/Pagination.vue';
import FilterSelect from '@/Shared/FilterSelect.vue';
import DataTable from '@/Shared/DataTable.vue';
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
