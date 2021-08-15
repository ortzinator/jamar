<template>
    <div class="bg-white p-2 rounded shadow">
        <div class="flex items-center">
            <input
                type="text"
                v-model="searchTerm"
                placeholder="Search policyholders..."
                class="border-cool-grey-200 rounded w-full"
            />
            <icon
                v-if="loading"
                name="spinner"
                class="-ml-8 animate-spin fill-current h-6 text-gray-400 w-6"
            />
        </div>
        <div class="overflow-auto h-52 mt-2 pr-1">
            <ul v-if="results.length > 0" class="space-y-2 mt-2">
                <li
                    v-for="holder in results"
                    :key="holder.id"
                    class="hover:bg-light-blue-vivid-50 odd:bg-cool-grey-50"
                >
                    <a
                        @click="$emit('selected', holder)"
                        class="cursor-pointer p-2 block"
                    >
                        <div v-text="holder.name"></div>
                        <div v-text="holder.address"></div>
                    </a>
                </li>
            </ul>
            <ul v-else-if="searchTerm" class="italic text-gray-400">
                <li>None found</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { ref, watch } from "vue";
import Popper from "vue3-popper";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";

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
        Popper,
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    },
    setup() {
        var isOpen = ref(false);
        var searchTerm = ref("");
        var results = ref([]);
        var loading = ref(false);
        var cancelSource = ref(null);
        var selectedHolder = ref(null);

        function refreshSearch() {
            loading.value = true;
            search();
        }

        var search = _.debounce(function () {
            if (cancelSource.value) {
                cancelSource.value.cancel();
            }
            cancelSource.value = axios.CancelToken.source();

            if (searchTerm.value === "") {
                results.value = [];
                return;
            }

            axios
                .get(route("holders"), {
                    params: { search: searchTerm.value },
                    cancelToken: cancelSource.value.token,
                })
                .then((response) => {
                    loading.value = false;
                    if (response) {
                        results.value = response.data;
                        cancelSource.value = null;
                    }
                });
        }, 400);

        watch(searchTerm, () => refreshSearch());

        return {
            isOpen,
            searchTerm,
            results,
            loading,
            cancelSource,
            refreshSearch,
            selectedHolder,
        };
    },
};
</script>
