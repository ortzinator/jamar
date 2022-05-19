<template>
    <input
        v-model="proxyChecked"
        type="checkbox"
        :value="value"
        class="rounded shadow-sm border-cool-grey-300 text-light-blue-vivid-600 focus:border-light-blue-vivid-300 focus:ring focus:ring-light-blue-vivid-200 focus:ring-opacity-50"
    />
</template>

<script>
export default {
    props: {
        checked: {
            type: [Array, Boolean],
            default: false,
        },
        value: {
            default: null,
        },
    },
    emits: ['update:checked'],

    computed: {
        proxyChecked: {
            get() {
                return this.checked;
            },

            set(val) {
                this.$emit('update:checked', val);
            },
        },
    },
};
</script>
