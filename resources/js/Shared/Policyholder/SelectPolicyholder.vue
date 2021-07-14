<template>
    <div
        class="
            mb-5
            p-5
            rounded
            space-x-4
            bg-blue-100
            border border-blue-200
            shadow-lg
            space-y-5
        "
    >
        <input
            type="text"
            v-model="searchTerm"
            placeholder="Search policyholders..."
            class="border-0 rounded-r shadow w-full"
        />
        <div v-if="loading">
            <icon
                name="spinner"
                class="animate-spin fill-current h-5 mr-2 text-gray-400 w-5"
            />
        </div>
        <div v-else-if="this.results.length > 0">
            <ul>
                <li v-for="holder in this.results" :key="holder.id" class="p-1">
                    <button
                        type="button"
                        v-text="holder.name"
                        @click="$emit('selected', holder)"
                    ></button>
                </li>
            </ul>
        </div>
        <div v-else-if="this.searchTerm" class="italic text-gray-400">
            None found
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
import Icon from "@/Shared/Icon";

import LoadingButton from "@/Shared/LoadingButton";

export default {
    emits: ["selected"],
    components: {
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        LoadingButton,
        Icon,
    },
    data() {
        return {
            searchTerm: "",
            results: [],
            loading: false,
            cancelSource: null,
        };
    },
    watch: {
        searchTerm() {
            this.refreshSearch();
        },
    },
    methods: {
        refreshSearch: throttle(function () {
            if (this.cancelSource) {
                this.cancelSource.cancel();
            }
            this.cancelSource = axios.CancelToken.source();

            if (this.searchTerm === "") {
                this.results = [];
                return;
            }

            this.loading = true;
            axios
                .get(route("holders"), {
                    params: { search: this.searchTerm },
                    cancelToken: this.cancelSource.token,
                })
                .then((response) => {
                    if (response) {
                        this.results = response.data;
                        this.loading = false;
                        this.cancelSource = null;
                    }
                });
        }, 200),
    },
};
</script>
