<template>
    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md bg-cool-grey-800 hover:bg-cool-grey-700 active:bg-cool-grey-900 focus:outline-none focus:border-cool-grey-900 focus:shadow-outline-gray"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'submit',
        },
    },
};
</script>
