<template>
    <div
        class="grid grid-cols-9 gap-5 mb-5"
        @mouseenter="fieldHover = true"
        @mouseleave="fieldHover = false"
    >
        <div class="col-span-4 px-4 py-2 rounded" v-text="field.name"></div>
        <TextInput
            :id="'input-' + field.name"
            :value="field.value"
            type="text"
            class="col-span-4 font-mono"
        />
        <slot name="delButton"></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    field: { type: Object, required: true },
});
const fieldHover = ref(false);
</script>
