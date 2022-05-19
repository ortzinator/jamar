<template>
    <DatePicker v-model="value" mode="date" :masks="masks" is-range is-required :min-date="minDate">
        <template #default="{ inputValue, inputEvents, isDragging }">
            <div class="flex flex-col items-center justify-start sm:flex-row">
                <div class="relative w-full grow">
                    <CalendarIcon
                        class="absolute w-4 h-full mx-2 pointer-events-none text-cool-grey-600"
                    />
                    <input
                        type="text"
                        class="block w-full py-1 pl-8 pr-2 mt-1 border rounded-md shadow-sm grow border-cool-grey-300 focus:border-light-blue-vivid-300 focus:ring focus:ring-light-blue-vivid-200 focus:ring-opacity-50"
                        :class="isDragging ? 'text-cool-grey-600' : 'text-cool-grey-900'"
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                    />
                </div>
                <span class="m-2 shrink-0">
                    <ArrowRightIcon class="w-4 h-4 stroke-current text-cool-grey-600" />
                </span>
                <div class="relative w-full grow">
                    <CalendarIcon
                        class="absolute w-4 h-full mx-2 pointer-events-none text-cool-grey-600"
                    />
                    <input
                        type="text"
                        class="block w-full py-1 pl-8 pr-2 mt-1 border rounded-md shadow-sm grow border-cool-grey-300 focus:border-light-blue-vivid-300 focus:ring focus:ring-light-blue-vivid-200 focus:ring-opacity-50"
                        :class="isDragging ? 'text-cool-grey-600' : 'text-cool-grey-900'"
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                    />
                </div>
            </div>
        </template>
    </DatePicker>
</template>
<script setup>
import { computed, reactive } from 'vue';
import { DatePicker } from 'v-calendar';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/vue/outline';

const props = defineProps({ modelValue: { type: Object, required: true } });
const emit = defineEmits(['update:modelValue']);
const masks = reactive({
    input: 'MM-DD-YYYY',
});
const value = computed({
    get: () => props.modelValue,
    set: (val) => {
        emit('update:modelValue', val);
    },
});
const minDate = computed({
    get() {
        const now = new Date();
        if (new Date(props.modelValue.start) < now) {
            return props.modelValue.start;
        }
        return now;
    },
});
</script>
