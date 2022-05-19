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

<script setup>
import { ref, computed } from 'vue';
import { createMoney } from '@easymoney/money';
import { createMoneyIntlFormatter } from '@easymoney/formatter';
import { addDecimal } from '@/util.js';

const props = defineProps({ modelValue: { type: Object, required: true } });
const emit = defineEmits(['update:modelValue']);

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
    return value.match(/(\.\d{3,})$/gm);
}

function handlePaste(e) {
    e.preventDefault();
}

const formattedValue = computed({
    get() {
        if (focused.value === false) {
            if (errors.value.length > 0 || !(rawValue.value > 0)) {
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

        if (hasEnoughCents(value)) {
            return;
        }

        if (errors.value.length === 0) {
            rawValue.value = value;
            const newVal = { ...props.modelValue };
            newVal.amount = stripDecimal(value);
            emit('update:modelValue', newVal);
        }
    },
});
</script>
