<template>
    <div
        class="grid grid-cols-9 gap-5 mb-5"
        @mouseenter="fieldHover = true"
        @mouseleave="fieldHover = false"
    >
        <div class="px-4 py-2 rounded col-span-4" v-text="field.name"></div>
        <JetInput
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
import JetInput from '@/Jetstream/Input';

defineProps({
    field: { type: Object, required: true },
});
const fieldHover = ref(false);

</script>
