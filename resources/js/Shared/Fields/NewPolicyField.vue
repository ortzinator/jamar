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
        <loading-button
            class="btn mt-4 hover:underline"
            :loading="newFieldForm.processing"
            @click="processForm"
        >
            Add Field
        </loading-button>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import LoadingButton from "@/Shared/LoadingButton";

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
        LoadingButton,
    },
    setup(props) {
        const newFieldForm = useForm({
            name: "",
            value: "",
            policy_id: props.policy.id,
        });

        return { newFieldForm };
    },
    methods: {
        processForm() {
            this.newFieldForm.post(route("policyfield.store"), {
                onSuccess: () => this.newFieldForm.reset(),
            });
        },
    },
};
</script>
