<template>
    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase transition duration-150 ease-in-out bg-white border rounded-md shadow-sm border-cool-grey-300 text-cool-grey-700 hover:text-cool-grey-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-cool-grey-800 active:bg-cool-grey-50"
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
