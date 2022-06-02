<template>
    <div v-bind="$attrs">
        <div class="flex items-center">
            <input
                v-model="searchTerm"
                type="text"
                placeholder="Search contacts..."
                class="w-full rounded border-cool-grey-200"
            />
            <Icon
                v-if="loading"
                name="spinner"
                class="w-6 h-6 -ml-8 fill-current animate-spin text-cool-grey-400"
            />
        </div>
        <div class="pr-1 mt-2 overflow-auto h-52">
            <ul v-if="results.length > 0" class="mt-2 space-y-2">
                <li
                    v-for="contact in results"
                    :key="contact.id"
                    class="hover:bg-light-blue-vivid-50 odd:bg-cool-grey-50"
                >
                    <a class="block p-2 cursor-pointer" @click="$emit('selected', contact)">
                        <div v-text="contact.name"></div>
                        <div v-text="contact.address"></div>
                    </a>
                </li>
            </ul>
            <ul v-else-if="searchTerm" class="italic text-cool-grey-400">
                <li>None found</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

import Icon from '@/Shared/Icon';

defineEmits(['selected']);

const searchTerm = ref('');
const results = ref([]);
const loading = ref(false);

let cancelSource = null;
const search = _.debounce(() => {
    if (cancelSource) {
        cancelSource.cancel();
    }
    cancelSource = axios.CancelToken.source();

    if (searchTerm.value === '') {
        results.value = [];
        return;
    }

    axios
        .get(route('contacts'), {
            params: { search: searchTerm.value },
            cancelToken: cancelSource.token,
        })
        .then((response) => {
            loading.value = false;
            if (response) {
                results.value = response.data;
                cancelSource = null;
            }
        });
}, 400);

function refreshSearch() {
    loading.value = true;
    search();
}

watch(searchTerm, () => refreshSearch());
</script>
