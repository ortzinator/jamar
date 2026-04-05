<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Employees" />
        <h1>Employees</h1>
    </div>

    <div>
        <div class="mb-4 flex justify-between">
            <div class="mr-4 flex">
                <div class="flex cursor-default rounded bg-white shadow">
                    <FilterSelect
                        v-if="$attrs.permissions.includes('update users')"
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
            <InertiaLink
                v-if="$attrs.permissions.includes('create users')"
                class="btn btn-primary"
                :href="route('users.create')"
            >
                <span>Create</span>
                <span class="hidden md:inline"> New User</span>
            </InertiaLink>
        </div>
        <div class="overflow-x-auto rounded bg-white shadow">
            <DataTable :columns="columns" :data-source="users.data" route-name="users.show">
            </DataTable>
        </div>
        <Pagination :links="users.meta.links" />
    </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';

import { useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Pagination from '@/Shared/Pagination.vue';
import DataTable from '@/Shared/DataTable.vue';
import FilterSelect from '@/Shared/FilterSelect.vue';

defineOptions({
    layout: AppLayout,
});
const props = defineProps({
    users: { type: Object, required: true },
    filters: { type: Object, required: true },
});
const searchForm = useForm({
    search: props.filters.search ?? '',
    trashed: props.filters.trashed ?? '',
});

const refreshSearch = _.debounce(() => {
    searchForm
        .transform((data) => _.pickBy(data))
        .get('/users', {
            only: ['users'],
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
    { text: 'Name', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Role', value: 'role' },
]);
</script>
