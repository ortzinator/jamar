<template>
    <div class="">
        <h3 class="font-bold mb-4">Policies ending soon</h3>
        <table class="w-full mb-2 table-show text-sm">
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
                    <td v-for="windex in 2" :key="windex" class="py-2 px-4">
                        <span>
                            <div
                                class="bg-cool-grey-200 rounded-lg"
                                :style="`width: ${
                                    Math.floor(Math.random() * 51) + 50
                                }%;`"
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
                    <td class="py-2 px-4">
                        <inertia-link :href="route('policies.edit', policy.id)">
                            {{ policy.number }}
                        </inertia-link>
                    </td>
                    <td
                        class="py-2"
                        :class="{
                            'text-red-vivid-500': isInPast(policy.period_end)
                        }"
                    >
                        <span
                            :title="
                                formatDate(
                                    policy.period_end,
                                    'YYYY-MM-DD HH:mm:ss Z[Z]'
                                )
                            "
                        >
                            {{ formatDate(policy.period_end) }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div
            v-if="!loading && results.length > 5"
            class="text-cool-grey-400 text-sm mb-2"
        >
            <inertia-link :href="route('policies.ending')">
                Plus {{ results.length - 5 }} more
            </inertia-link>
        </div>
        <div class="flex items-center">
            <span
                class="
                    w-3
                    h-3
                    border-2 border-cool-grey-800
                    bg-red-vivid-500
                    mr-2
                "
            ></span>
            = Overdue
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { formatDate, isInPast } from '@/dates.js';

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
