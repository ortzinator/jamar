<template>
    <input
        ref="input"
        class="rounded-md shadow-sm border-cool-grey-300 focus:border-light-blue-vivid-300 focus:ring focus:ring-light-blue-vivid-200 focus:ring-opacity-50"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    props: ['modelValue'],

    emits: ['update:modelValue'],

    methods: {
        focus() {
            this.$refs.input.focus();
        },
    },
};
</script>
