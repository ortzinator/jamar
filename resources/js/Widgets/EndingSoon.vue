<template>
    <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-if="loading"
            class="
                flex
                items-center
                justify-center
                absolute
                inset-0
                transition-all
                transform-gpu
            "
            key="loading"
        >
            Loading...
        </div>
        <div
            v-else
            class="absolute inset-0 p-2 transition-all transform-gpu"
            key="widget"
        >
            <h3 class="font-bold leading-7 text-xl">Policies ending soon</h3>
            <table class="w-full mb-2">
                <thead>
                    <th>#</th>
                    <th>Date Ending</th>
                </thead>
                <tbody>
                    <tr v-for="policy in results.slice(0, 5)" :key="policy.id">
                        <td class="border-t">{{ policy.number }}</td>
                        <td
                            class="border-t"
                            :class="{
                                'text-red-400': isInPast(policy.period_end),
                            }"
                        >
                            {{ formatDate(policy.period_end) }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="results.length > 5" class="text-gray-400 text-sm">
                Plus {{ results.length - 5 }} more
            </div>
        </div>
    </transition>
</template>

<script>
import { onMounted, computed, ref } from "vue";
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
                .get(route("policies"), {
                    params: {
                        orderBy: "period_end",
                        start: start.value,
                        end: end.value,
                    },
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
