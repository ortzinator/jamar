<template>
    <input
        type="checkbox"
        :value="value"
        v-model="proxyChecked"
        class="
            rounded
            border-cool-grey-300
            text-light-blue-vivid-600
            shadow-sm
            focus:border-light-blue-vivid-300
            focus:ring
            focus:ring-light-blue-vivid-200
            focus:ring-opacity-50
        "
    />
</template>

<script>
export default {
    emits: ['update:checked'],

    props: {
        checked: {
            type: [Array, Boolean],
            default: false
        },
        value: {
            default: null
        }
    },

    computed: {
        proxyChecked: {
            get() {
                return this.checked;
            },

            set(val) {
                this.$emit('update:checked', val);
            }
        }
    }
};
</script>
