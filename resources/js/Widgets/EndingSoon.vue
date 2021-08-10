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
                    class="border-t border-gray-100 animate-pulse"
                >
                    <td v-for="index in 2" :key="index" class="py-2 px-4">
                        <span>
                            <div
                                class="bg-gray-200 rounded-lg"
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
                    class="border-t border-gray-100"
                >
                    <td class="py-2 px-4">
                        <inertia-link :href="route('policies.edit', policy.id)">
                            {{ policy.number }}
                        </inertia-link>
                    </td>
                    <td
                        class="py-2"
                        :class="{
                            'text-red-vivid-500': isInPast(policy.period_end),
                        }"
                    >
                        {{ formatDate(policy.period_end) }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div
            v-if="!loading && results.length > 5"
            class="text-gray-400 text-sm mb-2"
        >
            <inertia-link :href="route('policies.ending')">
                Plus {{ results.length - 5 }} more
            </inertia-link>
        </div>
        <div class="flex items-center">
            <span
                class="w-3 h-3 border-2 border-gray-800 bg-red-vivid-500 mr-2"
            ></span>
            = Overdue
        </div>
    </div>
</template>

<script>
import { onMounted, computed, ref, reactive } from "vue";
import dayjs from "dayjs";

export default {
    setup() {
        var loading = ref(true);
        var cancelSource = ref(null);
        var results = ref([]);

        const start = computed(() => {
            return dayjs.unix(1).format("YYYY-MM-DD"); //The beginning of (UNIX) time
        });

        const end = computed(() => {
            return dayjs().add(1, "week").format("YYYY-MM-DD"); //A week from now
        });

        function formatDate(date) {
            return dayjs(date).format("MM-DD-YYYY");
        }

        function isInPast(date) {
            return dayjs(date).isBefore(dayjs());
        }

        onMounted(() => {
            if (cancelSource.value) {
                cancelSource.value.cancel();
            }
            cancelSource.value = axios.CancelToken.source();

            loading.value = true;

            axios
                .get(route("policies.ending"), {
                    cancelToken: cancelSource.value.token,
                })
                .then((response) => {
                    if (response) {
                        results.value = response.data;
                        loading.value = false;
                        cancelSource.value = null;
                    }
                });
        });
        return {
            loading,
            cancelSource,
            results,
            formatDate,
            isInPast,
        };
    },
};
</script>
