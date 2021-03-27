<template>
    <form @submit.prevent>
        <div class="mb-5">
            <date-picker
                v-model="value"
                mode="date"
                :masks="masks"
                is-range
                is-required
                :min-date="new Date()"
            >
                <template v-slot="{ inputValue, inputEvents, isDragging }">
                    <div
                        class="flex flex-col sm:flex-row justify-start items-center"
                    >
                        <div class="relative flex-grow">
                            <svg
                                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>
                            <input
                                class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                                :class="
                                    isDragging
                                        ? 'text-gray-600'
                                        : 'text-gray-900'
                                "
                                :value="inputValue.start"
                                v-on="inputEvents.start"
                            />
                        </div>
                        <span class="flex-shrink-0 m-2">
                            <svg
                                class="w-4 h-4 stroke-current text-gray-600"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                        <div class="relative flex-grow">
                            <svg
                                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>
                            <input
                                class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                                :class="
                                    isDragging
                                        ? 'text-gray-600'
                                        : 'text-gray-900'
                                "
                                :value="inputValue.end"
                                v-on="inputEvents.end"
                            />
                        </div>
                    </div>
                </template>
            </date-picker>
        </div>
    </form>
</template>
<script>
import { Calendar, DatePicker } from "v-calendar";

export default {
    props: { modelValue: Object },
    emits: ["update:modelValue"],
    components: {
        Calendar,
        DatePicker,
    },
    data() {
        return {
            masks: {
                input: "MM-DD-YYYY",
            },
        };
    },
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:modelValue", value);
            },
        },
    },
};
</script>
