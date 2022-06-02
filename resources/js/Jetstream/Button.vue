<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 bg-cool-grey-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cool-grey-700 active:bg-cool-grey-900 focus:outline-none focus:border-cool-grey-900 focus:ring focus:ring-cool-grey-300 disabled:opacity-25 transition"
    >
        <slot />
    </button>
</template>
