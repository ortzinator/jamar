<template>
    <div @mouseenter="showButtons = true" @mouseleave="showButtons = false">
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

        <div
            v-text="field.name"
            class="border border-gray-300 px-4 py-2 rounded shadow-sm"
        ></div>
        <div
            v-text="field.value"
            class="border border-gray-300 px-4 py-2 rounded shadow-sm"
        ></div>
        <div v-show="showButtons">
            <button class="btn-sm btn-primary mr-2" @click="showEdit">
                Edit
            </button>
            <button class="btn-sm btn-danger mr-2" @click="confirming = true">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
import JetConfirmationModal from "@/Jetstream/ConfirmationModal";

export default {
    props: ["field", "policy"],
    components: { JetConfirmationModal },
    data() {
        return {
            showButtons: false,
            confirming: false,
        };
    },
    methods: {
        deleteField() {
            // this.$inertia.delete(route("policyfield.destroy", this.field.id));
            this.confirming = false;
        },
    },
};
</script>
