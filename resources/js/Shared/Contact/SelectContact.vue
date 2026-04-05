<template>
    <div v-bind="$attrs">
        <div class="flex items-center">
            <input
                v-model="searchTerm"
                type="text"
                placeholder="Search contacts..."
                class="border-cool-grey-200 w-full rounded"
            />
            <Icon
                v-if="loading"
                name="spinner"
                class="text-cool-grey-400 -ml-8 h-6 w-6 animate-spin fill-current"
            />
        </div>
        <div class="mt-2 h-52 overflow-auto bg-white px-2">
            <ul v-if="results.length > 0" class="mt-2 space-y-2">
                <li
                    v-for="contact in results"
                    :key="contact.id"
                    class="hover:bg-light-blue-vivid-50 odd:bg-cool-grey-50"
                >
                    <a class="block cursor-pointer p-2" @click="$emit('selected', contact)">
                        <div v-text="contact.name"></div>
                        <div v-text="contact.address"></div>
                    </a>
                </li>
            </ul>
            <ul v-else-if="searchTerm" class="text-cool-grey-400 italic">
                <li>None found</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

import Icon from '@/Shared/Icon.vue';

defineEmits(['selected']);

const searchTerm = ref('');
const results = ref([]);
const loading = ref(false);

let abortController = null;
const search = _.debounce(() => {
    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();

    if (searchTerm.value === '') {
        results.value = [];
        return;
    }

    axios
        .get(route('contacts.index'), {
            params: { search: searchTerm.value },
            signal: abortController.signal,
        })
        .then((response) => {
            loading.value = false;
            if (response) {
                results.value = response.data;
                abortController = null;
            }
        });
}, 400);

function refreshSearch() {
    loading.value = true;
    search();
}

watch(searchTerm, () => refreshSearch());
</script>
