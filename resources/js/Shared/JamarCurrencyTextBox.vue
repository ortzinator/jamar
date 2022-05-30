<script>
import { useCurrencyInput } from 'vue-currency-input';
import { h } from 'vue';

export default {
    props: {
        modelValue: { type: Number, required: true },
        options: { type: Object, required: true },
    },
    setup(props) {
        const { inputRef } = useCurrencyInput(props.options);

        return () => h('input', { ref: inputRef, type: 'text' });
    },
};
</script>
