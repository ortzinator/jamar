<template>
    <button
        :type="type"
        class="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md bg-red-vivid-600 hover:bg-red-vivid-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-vivid-600"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button',
        },
    },
};
</script>
