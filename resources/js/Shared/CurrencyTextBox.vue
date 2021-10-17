<template>
    <input
        ref="textInput"
        v-model="formattedValue"
        type="text"
        inputmode="decimal"
        v-bind="$attrs"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @paste="handlePaste"
    />
    <span>{{ errors[0] }}</span>
</template>

<script>
import { ref, computed } from 'vue';
import { createMoney } from '@easymoney/money';
import { createMoneyIntlFormatter } from '@easymoney/formatter';
import { addDecimal } from '@/util.js';

export default {
    props: { modelValue: { type: Object, required: true } },
    emits: ['update:modelValue'],
    setup(props, context) {
        const focused = ref(false);
        const errors = ref([]);
        const currency = ref(props.modelValue.currency);
        const rawValue = ref(addDecimal(props.modelValue.amount, props.modelValue.subunit));

        function stripDecimal(val) {
            return val.replaceAll('.', '');
        }

        function getMoney() {
            return createMoney({ amount: stripDecimal(rawValue.value), currency: currency.value });
        }

        function handleFocus() {
            focused.value = true;
        }

        function handleBlur() {
            focused.value = false;
        }

        function handleKeydown(e) {
            e.preventDefault();
        }

        function handlePaste(e) {
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            console.log(paste);
            e.preventDefault();
        }

        const formattedValue = computed({
            get() {
                if (focused.value === false) {
                    if (errors.value.length > 0) {
                        return rawValue.value;
                    }
                    return createMoneyIntlFormatter().format(getMoney());
                }
                return rawValue.value;
            },
            set(value) {
                const regex = /^(\d*\.{0,1}\d*)$/gm;

                if (value.match(regex)) {
                    errors.value = [];
                } else {
                    errors.value.push('Value is invalid');
                }
                rawValue.value = value;
                if (errors.value.length === 0) {
                    const newVal = { ...props.modelValue };
                    newVal.amount = stripDecimal(value);
                    context.emit('update:modelValue', newVal);
                }
            },
        });

        return {
            formattedValue,
            handleFocus,
            handleBlur,
            errors,
            handleKeydown,
            handlePaste,
            rawValue,
        };
    },
};
</script>
