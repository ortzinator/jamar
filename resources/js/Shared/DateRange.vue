<template>
    <date-picker
        v-model="value"
        mode="date"
        :masks="masks"
        is-range
        is-required
        :min-date="minDate"
    >
        <template #default="{ inputValue, inputEvents, isDragging }">
            <div class="flex flex-col sm:flex-row justify-start items-center">
                <div class="relative flex-grow">
                    <CalendarIcon
                        class="
                            text-cool-grey-600
                            w-4
                            h-full
                            mx-2
                            absolute
                            pointer-events-none
                        "
                    />
                    <input
                        type="text"
                        class="
                            flex-grow
                            pl-8
                            pr-2
                            py-1
                            border border-cool-grey-300
                            focus:border-light-blue-vivid-300
                            focus:ring
                            focus:ring-light-blue-vivid-200
                            focus:ring-opacity-50
                            rounded-md
                            shadow-sm
                            block
                            w-full
                            mt-1
                        "
                        :class="
                            isDragging
                                ? 'text-cool-grey-600'
                                : 'text-cool-grey-900'
                        "
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                    />
                </div>
                <span class="flex-shrink-0 m-2">
                    <ArrowRightIcon
                        class="w-4 h-4 stroke-current text-cool-grey-600"
                    />
                </span>
                <div class="relative flex-grow">
                    <CalendarIcon
                        class="
                            text-cool-grey-600
                            w-4
                            h-full
                            mx-2
                            absolute
                            pointer-events-none
                        "
                    />
                    <input
                        type="text"
                        class="
                            flex-grow
                            pl-8
                            pr-2
                            py-1
                            border border-cool-grey-300
                            focus:border-light-blue-vivid-300
                            focus:ring
                            focus:ring-light-blue-vivid-200
                            focus:ring-opacity-50
                            rounded-md
                            shadow-sm
                            block
                            w-full
                            mt-1
                        "
                        :class="
                            isDragging
                                ? 'text-cool-grey-600'
                                : 'text-cool-grey-900'
                        "
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                    />
                </div>
            </div>
        </template>
    </date-picker>
</template>
<script>
import { DatePicker } from 'v-calendar';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/vue/outline';

export default {
    components: {
        DatePicker,
        CalendarIcon,
        ArrowRightIcon
    },
    props: { modelValue: { type: Object, required: true } },
    emits: ['update:modelValue'],
    data() {
        return {
            masks: {
                input: 'MM-DD-YYYY'
            }
        };
    },
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },
        minDate() {
            var now = new Date();
            if (new Date(this.modelValue.start) < now) {
                return this.modelValue.start;
            }
            return now;
        }
    }
};
</script>
