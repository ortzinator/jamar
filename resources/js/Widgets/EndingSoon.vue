<template>
    <div class="">
        <h3 class="mb-4 font-bold">Policies ending soon</h3>
        <table class="w-full mb-2 text-sm table-show">
            <thead class="sr-only">
                <th class="py-2">Number</th>
                <th class="py-2">Date Ending</th>
            </thead>
            <tbody v-if="loading">
                <tr
                    v-for="index in 5"
                    :key="index"
                    class="border-t border-cool-grey-100 animate-pulse"
                >
                    <td v-for="windex in 2" :key="windex" class="px-4 py-2">
                        <span>
                            <div
                                class="rounded-lg bg-cool-grey-200"
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
                    class="border-t border-cool-grey-100"
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
        <div v-if="!loading && results.length > 5" class="mb-2 text-sm text-cool-grey-400">
            <InertiaLink :href="route('policies.ending')">
                Plus {{ results.length - 5 }} more
            </InertiaLink>
        </div>
        <div class="flex items-center">
            <span class="w-3 h-3 mr-2 border-2 border-cool-grey-800 bg-red-vivid-500"></span>
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

        let cancelSource = null;
        onMounted(() => {
            if (cancelSource) {
                cancelSource.cancel();
            }
            cancelSource = axios.CancelToken.source();

            loading.value = true;

            axios
                .get(route('policies.ending'), {
                    cancelToken: cancelSource.token,
                })
                .then((response) => {
                    if (response) {
                        results.value = response.data;
                        loading.value = false;
                        cancelSource = null;
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
