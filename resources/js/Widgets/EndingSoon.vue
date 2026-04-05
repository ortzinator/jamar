<template>
    <div class="">
        <h3 class="mb-4 font-bold">Policies ending soon</h3>
        <table class="table-show mb-2 w-full text-sm">
            <thead class="sr-only">
                <th class="py-2">Number</th>
                <th class="py-2">Date Ending</th>
            </thead>
            <tbody v-if="loading">
                <tr
                    v-for="index in 5"
                    :key="index"
                    class="border-cool-grey-100 animate-pulse border-t"
                >
                    <td v-for="windex in 2" :key="windex" class="px-4 py-2">
                        <span>
                            <div
                                class="bg-cool-grey-200 rounded-lg"
                                :style="`width: ${Math.floor(Math.random() * 51) + 50}%;`"
                            >
                                &nbsp;
                            </div>
                        </span>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr
                    v-for="policy in results.slice(0, 5)"
                    :key="policy.id"
                    class="border-cool-grey-100 border-t"
                >
                    <td class="px-4 py-2">
                        <InertiaLink :href="route('policies.edit', policy.id)">
                            {{ policy.number }}
                        </InertiaLink>
                    </td>
                    <td
                        class="py-2"
                        :class="{
                            'text-red-vivid-500': isInPast(policy.period_end),
                        }"
                    >
                        <span :title="formatDate(policy.period_end, 'YYYY-MM-DD HH:mm:ss Z[Z]')">
                            {{ formatDate(policy.period_end) }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="!loading && results.length > 5" class="text-cool-grey-400 mb-2 text-sm">
            <InertiaLink :href="route('policies.ending')">
                Plus {{ results.length - 5 }} more
            </InertiaLink>
        </div>
        <div class="flex items-center">
            <span class="border-cool-grey-800 bg-red-vivid-500 mr-2 h-3 w-3 border-2"></span>
            = Overdue
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { formatDate, isInPast } from '@/util.js';

export default {
    setup() {
        const loading = ref(true);
        const results = ref([]);

        let abortController = null;
        onMounted(() => {
            if (abortController) {
                abortController.abort();
            }
            abortController = new AbortController();

            loading.value = true;

            axios
                .get(route('policies.ending'), {
                    signal: abortController.signal,
                })
                .then((response) => {
                    if (response) {
                        results.value = response.data;
                        loading.value = false;
                        abortController = null;
                    }
                });
        });
        return {
            loading,
            results,
            formatDate,
            isInPast,
        };
    },
};
</script>
