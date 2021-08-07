<template>
    <app-layout>
        <template #header>
            <h2>Policies</h2>
        </template>

        <div>
            <div class="flex mb-4 justify-between">
                <div class="flex">
                    <div class="shadow rounded bg-white">
                        <Listbox v-model="searchForm.trashed">
                            <ListboxButton
                                class="
                                    border-0 border-gray-200 border-r
                                    px-5
                                    rounded-l
                                    text-gray-500
                                "
                            >
                                <div class="inline-flex items-center">
                                    <span class="hidden md:inline">
                                        Filter
                                    </span>
                                    <SelectorIcon class="h-4 w-4 md:ml-2" />
                                </div>
                            </ListboxButton>
                            <ListboxOptions
                                class="absolute bg-white shadow-2xl z-50"
                            >
                                <ListboxOption value="with">
                                    With Trashed
                                </ListboxOption>
                                <ListboxOption value="only">
                                    Only Trashed
                                </ListboxOption>
                            </ListboxOptions>
                        </Listbox>
                        <input
                            type="text"
                            v-model="searchForm.search"
                            placeholder="Search..."
                            class="border-0 rounded-r"
                        />
                    </div>
                    <button
                        class="
                            ml-3
                            text-sm text-gray-500
                            hover:text-gray-700
                            focus:text-indigo-500
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
                        <span :class="{ 'text-red-500': pastDate(value) }">{{
                            formatDate(value)
                        }}</span>
                    </template>
                    <template v-slot:[`column.created_at`]="{ value }">
                        {{ formatDate(value) }}
                    </template>
                    <template
                        v-slot:[`column.holderNamesPreview`]="{ value, row }"
                    >
                        <div
                            v-if="row.holders.length === 0"
                            class="flex text-red-600 items-center"
                        >
                            <exclamation-icon class="h-5 mr-2 w-5" />
                            No policyholders found
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
    </app-layout>
</template>

<script>
import { watch, computed, ref } from "vue";

import AppLayout from "@/Layouts/NewLayout";
import Pagination from "@/Shared/Pagination";
import DataTable from "@/Shared/DataTable";
import JetCheckbox from "@/Jetstream/Checkbox";
import {
    ExclamationIcon,
    ChevronRightIcon,
    SelectorIcon,
} from "@heroicons/vue/outline";

import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import dayjs from "dayjs";

import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";

export default {
    props: { sessions: Object, policies: Object, filters: Object },

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
    },
    setup(props) {
        const searchForm = useForm({
            search: props.filters.search,
            trashed: props.filters.trashed,
        });

        const refreshSearch = throttle(function () {
            searchForm
                .transform((data) => pickBy(data))
                .get("/policies", {
                    only: ["policies"],
                    preserveState: true,
                    preserveScroll: true,
                });
        }, 200);

        const formVals = computed(() => {
            return {
                search: searchForm.search,
                trashed: searchForm.trashed,
            };
        });

        function formatDate(date) {
            return dayjs(date).format("MMM DD, YYYY");
        }

        function reset() {
            searchForm.search = "";
            searchForm.trashed = null;
        }

        watch(formVals, () => refreshSearch());

        const columns = ref([
            { text: "Number", value: "number" },
            { text: "Date Issued", value: "created_at" },
            { text: "Ending", value: "period_end" },
            { text: "Holders", value: "holderNamesPreview" },
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
            pastDate,
        };
    },
};
</script>
