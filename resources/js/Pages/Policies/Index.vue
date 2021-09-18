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
                :href="route('policies.create')"
            >
                <span>Create</span>
                <span class="hidden md:inline"> Policy</span>
            </inertia-link>
        </div>
        <div class="shadow rounded bg-white overflow-x-auto">
            <DataTable
                :columns="columns"
                :dataSource="policies.data"
                routeName="policies.edit"
            >
                <template v-slot:[`column.period_end`]="{ value }">
                    <span :class="{ 'text-red-vivid-500': pastDate(value) }">{{
                        formatDate(value)
                    }}</span>
                </template>
                <template v-slot:[`column.created_at`]="{ value }">
                    {{ formatDate(value) }}
                </template>
                <template v-slot:[`column.premium`]="{ value }">
                    <div
                        class="text-right w-full"
                        v-text="value.formatted"
                    ></div>
                </template>
                <template
                    v-slot:[`column.contactNamesPreview`]="{ value, row }"
                >
                    <div
                        v-if="row.contacts.length === 0"
                        class="flex text-red-vivid-600 items-center"
                    >
                        <exclamation-icon class="h-5 mr-2 w-5" />
                        No contacts found
                    </div>
                    <div
                        v-else
                        v-text="value"
                        class="
                            overflow-ellipsis overflow-hidden
                            whitespace-nowrap
                        "
                    />
                </template>
            </DataTable>
        </div>
        <pagination :links="policies.links" />
    </div>
</template>

<script>
import { watch, computed, ref } from 'vue';

import AppLayout from '@/Layouts/NewLayout';
import Pagination from '@/Shared/Pagination';
import DataTable from '@/Shared/DataTable';
import FilterSelect from '@/Shared/FilterSelect';
import JetCheckbox from '@/Jetstream/Checkbox';
import {
    ExclamationIcon,
    ChevronRightIcon,
    SelectorIcon
} from '@heroicons/vue/outline';

import { useForm, Link } from '@inertiajs/inertia-vue3';
import dayjs from 'dayjs';

import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
} from '@headlessui/vue';

export default {
    props: { sessions: Object, policies: Object, filters: Object },
    layout: AppLayout,

    components: {
        AppLayout,
        Pagination,
        JetCheckbox,
        ExclamationIcon,
        ChevronRightIcon,
        SelectorIcon,
        DataTable,
        Link,
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
        FilterSelect
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed
        });

        const refreshSearch = _.debounce(function () {
            searchForm
                .transform((data) => _.pickBy(data))
                .get('/policies', {
                    only: ['policies'],
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
            return dayjs(date).format('MMM DD, YYYY');
        }

        function reset() {
            searchForm.search = '';
            searchForm.trashed = null;
        }

        watch(formVals, () => refreshSearch());

        const columns = ref([
            { text: 'Number', value: 'number' },
            { text: 'Contacts', value: 'contactNamesPreview' },
            { text: 'Premium', value: 'premium' },
            { text: 'Date Issued', value: 'created_at' },
            { text: 'Ending', value: 'period_end' }
        ]);

        function pastDate(date) {
            return dayjs(date).isBefore(dayjs());
        }

        return {
            searchForm,
            refreshSearch,
            reset,
            formatDate,
            columns,
            pastDate
        };
    }
};
</script>
