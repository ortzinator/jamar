<template>
    <Listbox v-model="value">
        <ListboxButton
            class="border-cool-grey-200 text-cool-grey-500 rounded-l border-0 border-r px-5"
        >
            <div class="inline-flex items-center">
                <span class="hidden md:inline"> Filter </span>
                <SelectorIcon class="h-4 w-4 md:ml-2" />
            </div>
        </ListboxButton>
        <ListboxOptions
            class="absolute z-50 mt-11 cursor-default space-y-2 rounded border bg-white py-1 shadow-lg"
        >
            <ListboxOption
                :value="null"
                class="hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400 px-4 py-2"
            >
                None
            </ListboxOption>
            <ListboxOption
                value="with"
                class="hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400 px-4 py-2"
            >
                With Trashed
            </ListboxOption>
            <ListboxOption
                value="only"
                class="hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400 px-4 py-2"
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

const props = defineProps({ modelValue: { type: String, default: '' } });
const emit = defineEmits(['update:modelValue']);
const value = computed({
    get: () => props.modelValue,
    set: (val) => {
        emit('update:modelValue', val);
    },
});
</script>
