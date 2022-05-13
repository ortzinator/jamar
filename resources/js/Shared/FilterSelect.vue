<template>
    <Listbox v-model="value">
        <ListboxButton
            class="
                border-0 border-cool-grey-200 border-r
                px-5
                rounded-l
                text-cool-grey-500
            "
        >
            <div class="inline-flex items-center">
                <span class="hidden md:inline"> Filter </span>
                <SelectorIcon class="h-4 w-4 md:ml-2" />
            </div>
        </ListboxButton>
        <ListboxOptions
            class="
                absolute
                bg-white
                mt-11
                py-1
                shadow-lg
                space-y-2
                z-50
                rounded
                border
                cursor-default
            "
        >
            <ListboxOption
                :value="null"
                class="
                    hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400
                    px-4
                    py-2
                "
            >
                None
            </ListboxOption>
            <ListboxOption
                value="with"
                class="
                    hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400
                    px-4
                    py-2
                "
            >
                With Trashed
            </ListboxOption>
            <ListboxOption
                value="only"
                class="
                    hover:bg-wild-blue-yonder-600 hover:text-cool-grey-400
                    px-4
                    py-2
                "
            >
                Only Trashed
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>

<script setup>
import { computed } from 'vue';
import { SelectorIcon } from '@heroicons/vue/outline';
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue';

const props = defineProps({ modelValue: { type: String, required: true } });
const emit = defineEmits(['update:modelValue']);
const value = computed({
    get: () => props.modelValue,
    set: (val) => {
        emit('update:modelValue', val);
    },
});
</script>
