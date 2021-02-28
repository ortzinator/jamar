<template>
    <div>
        <div class="flex-auto">
            <jet-label for="number" value="Field Name" />
            <jet-input
                v-model="newFieldForm.name"
                id="name"
                type="text"
                class="w-full"
            />
        </div>
        <div class="flex-auto">
            <jet-label for="number" value="Field Value" />
            <jet-input
                v-model="newFieldForm.value"
                id="value"
                type="text"
                class="w-full"
            />
        </div>
        <button class="btn mt-4 hover:underline" @click="processForm">
            Add Field
        </button>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";

export default {
    props: ["policy"],
    components: {
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
    },
    setup(props) {
        const newFieldForm = useForm({
            name: "",
            value: "",
            policy_id: props.policy.id,
        });

        return { newFieldForm };
    },
    watch: {
        "newFieldForm.wasSuccessful"() {
            if (this.newFieldForm.wasSuccessful === true) {
                this.newFieldForm.reset();
            }
        },
    },
    methods: {
        processForm() {
            this.newFieldForm.post(route("policyfield.store"));
        },
    },
};
</script>
