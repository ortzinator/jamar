<template>
    <Listbox v-model="value">
        <ListboxButton
            class="px-5 border-0 border-r rounded-l border-cool-grey-200 text-cool-grey-500"
        >
            <div class="inline-flex items-center">
                <span class="hidden md:inline"> Filter </span>
                <SelectorIcon class="w-4 h-4 md:ml-2" />
            </div>
        </ListboxButton>
        <ListboxOptions
            class="absolute z-50 py-1 space-y-2 bg-white border rounded shadow-lg cursor-default mt-11"
        >
            <ListboxOption
                :value="null"
                class="px-4 py-2 hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400"
            >
                None
            </ListboxOption>
            <ListboxOption
                value="with"
                class="px-4 py-2 hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400"
            >
                With Trashed
            </ListboxOption>
            <ListboxOption
                value="only"
                class="px-4 py-2 hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400"
            >
                Only Trashed
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>

<script setup>
import { computed } from 'vue';
import { SelectorIcon } from '@heroicons/vue/outline';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';

const props = defineProps({ modelValue: { type: String, required: true } });
const emit = defineEmits(['update:modelValue']);
const value = computed({
    get: () => props.modelValue,
    set: (val) => {
        emit('update:modelValue', val);
    },
});
</script>
