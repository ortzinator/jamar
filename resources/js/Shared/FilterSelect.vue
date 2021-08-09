<template>
    <Listbox v-model="value">
        <ListboxButton
            class="
                border-0 border-gray-200 border-r
                px-5
                rounded-l
                text-gray-500
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
                class="hover:bg-wild-blue-yonder-600 hover:text-white px-4 py-2"
            >
                None
            </ListboxOption>
            <ListboxOption
                value="with"
                class="hover:bg-wild-blue-yonder-600 hover:text-white px-4 py-2"
            >
                With Trashed
            </ListboxOption>
            <ListboxOption
                value="only"
                class="hover:bg-wild-blue-yonder-600 hover:text-white px-4 py-2"
            >
                Only Trashed
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>

<script>
import { computed } from "vue";
import { SelectorIcon } from "@heroicons/vue/outline";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";

export default {
    props: { modelValue: String },
    emits: ["update:modelValue"],
    components: {
        SelectorIcon,
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    },
    setup(props, { emit }) {
        const value = computed({
            get: () => props.modelValue,
            set: (val) => {
                emit("update:modelValue", val);
            },
        });

        return { value };
    },
};
</script>
