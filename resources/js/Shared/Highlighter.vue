<script>
import { ref, toRefs, watchEffect, h } from 'vue';
import { highlight } from '@/util.js';

export default {
    props: {
        text: { type: String, required: true },
        term: { type: String, required: true },
    },
    setup(props) {
        const { text, term } = toRefs(props);
        const highlightedText = ref(props.text.value);

        watchEffect(() => {
            highlightedText.value = highlight(text.value, term.value);
        });

        return () => h('span', { innerHTML: highlightedText.value });
    },
};
</script>
