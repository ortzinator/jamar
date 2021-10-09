<template>
    <div class="bg-white p-2 rounded shadow">
        <div class="flex items-center">
            <input
                v-model="searchTerm"
                type="text"
                placeholder="Search contacts..."
                class="border-cool-grey-200 rounded w-full"
            />
            <icon
                v-if="loading"
                name="spinner"
                class="
                    -ml-8
                    animate-spin
                    fill-current
                    h-6
                    text-cool-grey-400
                    w-6
                "
            />
        </div>
        <div class="overflow-auto h-52 mt-2 pr-1">
            <ul v-if="results.length > 0" class="space-y-2 mt-2">
                <li
                    v-for="contact in results"
                    :key="contact.id"
                    class="hover:bg-light-blue-vivid-50 odd:bg-cool-grey-50"
                >
                    <a
                        class="cursor-pointer p-2 block"
                        @click="$emit('selected', contact)"
                    >
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
<script>
import { ref, watch } from 'vue';

import Icon from '@/Shared/Icon';

export default {
    components: {
        Icon,
    },
    emits: ['selected'],
    setup() {
        const isOpen = ref(false);
        const searchTerm = ref('');
        const results = ref([]);
        const loading = ref(false);
        const selectedContact = ref(null);

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

        return {
            isOpen,
            searchTerm,
            results,
            loading,
            refreshSearch,
            selectedContact,
        };
    },
};
</script>
