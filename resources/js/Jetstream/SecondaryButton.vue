<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 bg-white border border-cool-grey-300 rounded-md font-semibold text-xs text-cool-grey-700 uppercase tracking-widest shadow-sm hover:text-cool-grey-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-cool-grey-800 active:bg-cool-grey-50 disabled:opacity-25 transition"
    >
        <slot />
    </button>
</template>
