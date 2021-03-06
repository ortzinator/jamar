<template>
    <div
        @mouseenter="showButtons = true"
        @mouseleave="showButtons = false"
        class="grid grid-cols-9 gap-5 mb-5"
    >
        <jet-confirmation-modal :show="confirming" @close="confirming = false">
            <template #title> Delete Field </template>

            <template #content>
                Are you sure you want to delete this field?
            </template>

            <template #footer>
                <button class="btn" @click="confirming = false">Cancel</button>

                <button class="btn btn-danger ml-2" @click="deleteField">
                    Delete Field
                </button>
            </template>
        </jet-confirmation-modal>

        <div v-text="field.name" class="px-4 py-2 rounded col-span-4"></div>
        <jet-input
            v-if="editing"
            v-model="form.value"
            id="value"
            type="text"
            class="col-span-4 font-mono"
            @keyup.enter="submit"
        />
        <div
            v-else
            v-text="field.value"
            class="bg-gray-200 px-4 py-2 col-span-4 font-mono"
            @click="editing = true"
        ></div>
        <button
            class="btn-sm btn-danger mr-2 col-span-1"
            @click="confirming = true"
            v-show="showButtons"
        >
            Delete
        </button>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import JetConfirmationModal from "@/Jetstream/ConfirmationModal";
import JetInput from "@/Jetstream/Input";

export default {
    props: ["field", "policy"],
    components: { JetConfirmationModal, JetInput },
    setup(props) {
        const form = useForm({
            value: props.field.value,
            id: props.field.id,
        });

        return { form };
    },
    data() {
        return {
            showButtons: false,
            confirming: false,
            editing: false,
        };
    },
    methods: {
        deleteField() {
            this.$inertia.delete(route("policyfield.destroy", this.field.id));
            this.confirming = false;
        },
        submit() {
            this.form.post(route("policyfield.update", this.field.id));
            this.editing = false;
        },
    },
};
</script>
