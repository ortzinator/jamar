<template>
    <button
        :type="type"
        class="
            inline-flex
            items-center
            px-4
            py-2
            bg-cool-grey-800
            border border-transparent
            rounded-md
            font-semibold
            text-xs text-white
            uppercase
            tracking-widest
            hover:bg-cool-grey-700
            active:bg-cool-grey-900
            focus:outline-none
            focus:border-cool-grey-900
            focus:shadow-outline-gray
            transition
            ease-in-out
            duration-150
        "
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
