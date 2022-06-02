<script setup>
defineProps({
    value: { type: String, required: true },
});
</script>

<template>
    <label class="block text-sm font-medium text-cool-grey-700">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
