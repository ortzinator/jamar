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
        <div v-if="showButtons">
            <button class="btn-sm btn-primary mr-2">Edit</button>
            <button class="btn-sm btn-danger mr-2">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["field", "policy"],
    data() {
        return {
            showButtons: true,
        };
    },
};
</script>
