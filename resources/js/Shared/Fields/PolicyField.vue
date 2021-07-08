<template>
    <div
        @mouseenter="fieldHover = true"
        @mouseleave="fieldHover = false"
        class="grid grid-cols-9 gap-5 mb-5"
    >
        <div v-text="field.name" class="px-4 py-2 rounded col-span-4"></div>
        <jet-input
            v-model="field.value"
            :id="'input-' + field.name"
            type="text"
            class="col-span-4 font-mono"
        />
        <slot name="delButton"></slot>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import JetInput from "@/Jetstream/Input";

export default {
    props: ["field", "policy"],
    emits: ["delete"],
    components: { JetInput },
    data() {
        return {
            fieldHover: false,
            editing: false,
        };
    },
    methods: {
        deleteField() {
            this.confirming = false;
        },
    },
};
</script>
