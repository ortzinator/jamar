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
        <div
            v-text="field.value"
            class="bg-gray-200 px-4 py-2 col-span-4 font-mono"
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
