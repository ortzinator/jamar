<template>
    <input
        ref="textInput"
        v-model="formattedValue"
        type="text"
        inputmode="decimal"
        v-bind="$attrs"
        @focus="handleFocus"
        @blur="handleBlur"
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

        function hasEnoughCents(value) {
            return value.match(/(.\d{3,})$/gm);
        }

        function handlePaste(e) {
            e.preventDefault();
        }

        const formattedValue = computed({
            get() {
                if (focused.value === false) {
                    console.log(rawValue.value);
                    if (errors.value.length > 0
                        || !(rawValue.value > 0)) {
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

                if (!hasEnoughCents(value) && errors.value.length === 0) {
                    rawValue.value = value;
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
            handlePaste,
            rawValue,
        };
    },
};
</script>
