<template>
    <div
        class="grid grid-cols-9 gap-5 mb-5"
        @mouseenter="fieldHover = true"
        @mouseleave="fieldHover = false"
    >
        <div class="px-4 py-2 rounded col-span-4" v-text="field.name"></div>
        <jet-input
            :id="'input-' + field.name"
            :value="field.value"
            type="text"
            class="col-span-4 font-mono"
        />
        <slot name="delButton"></slot>
    </div>
</template>

<script>
import { ref } from 'vue';
import JetInput from '@/Jetstream/Input';

export default {
    components: { JetInput },
    props: {
        field: { type: Object, required: true },
    },
    emits: ['delete'],
    setup() {
        const fieldHover = ref(false);
        const editing = ref(false);

        function deleteField() {
            this.confirming = false;
        }

        return { fieldHover, editing, deleteField };
    },
};
</script>
