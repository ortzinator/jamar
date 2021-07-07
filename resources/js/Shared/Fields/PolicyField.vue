<template>
    <div
        @mouseenter="fieldHover = true"
        @mouseleave="fieldHover = false"
        class="grid grid-cols-9 gap-5 mb-5"
    >
        <div v-text="field.name" class="px-4 py-2 rounded col-span-4"></div>
        <jet-input
            v-if="editing"
            v-model="policyForm.value"
            id="value"
            type="text"
            class="col-span-4 font-mono"
            @keyup.enter="submit"
        />
        <div
            v-else
            v-text="policyForm.value"
            class="bg-gray-200 px-4 py-2 col-span-4 font-mono cursor-pointer"
            @click="editing = true"
        ></div>
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
    setup(props) {
        const policyForm = useForm({
            value: props.field.value,
            id: props.field.id,
        });

        return { policyForm };
    },
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
