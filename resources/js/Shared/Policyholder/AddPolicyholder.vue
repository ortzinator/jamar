<template>
    <div
        class="flex mb-5 p-5 rounded space-x-4 bg-blue-100 border border-blue-200 shadow-lg"
    >
        <div class="flex shadow rounded">
            <select
                v-model="searchForm.trashed"
                class="border-0 border-gray-200 border-r rounded-l text-gray-500"
            >
                <option :value="null">Filter...</option>
                <option value="with">With Trashed</option>
                <option value="only">Only Trashed</option>
            </select>
            <input
                type="text"
                v-model="searchForm.search"
                placeholder="Search..."
                class="border-0 rounded-r"
            />
        </div>
    </div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";

import LoadingButton from "@/Shared/LoadingButton";

export default {
    props: ["policy"],
    components: {
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        LoadingButton,
    },
    setup() {
        const searchForm = useForm({
            search: "",
            trashed: "",
        });

        return { searchForm };
    },
    computed: {
        searchVals() {
            return {
                search: this.searchForm.search,
                trashed: this.searchForm.trashed,
            };
        },
    },
    watch: {
        searchVals() {
            this.refreshSearch();
        },
    },
    methods: {
        refreshSearch: throttle(function () {
            this.searchForm
                .transform((data) => pickBy(data))
                .get("/holders", {
                    only: ["holders"],
                    preserveState: true,
                    preserveScroll: true,
                });
        }, 200),
    },
};
</script>
