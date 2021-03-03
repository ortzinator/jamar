<template>
    <div @mouseenter="showButtons = true" @mouseleave="showButtons = false">
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
            <button class="btn-sm btn-danger mr-2" @click="deleteField">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["field", "policy"],
    data() {
        return {
            showButtons: false,
        };
    },
    methods: {
        deleteField() {
            this.$inertia.delete(route("policyfield.destroy", this.field.id));
        },
    },
};
</script>
