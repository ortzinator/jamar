<template>
    <div>
        <div class="flex space-x-4 mb-4">
            <div class="flex-auto">
                <jet-label for="number" value="Field Name" />
                <jet-input
                    v-model="field.name"
                    id="name"
                    type="text"
                    class="w-full"
                />
            </div>
            <div class="flex-auto">
                <jet-label for="number" value="Field Value" />
                <jet-input
                    v-model="field.value"
                    id="value"
                    type="text"
                    class="w-full"
                />
            </div>
            <button
                class="btn mt-4 hover:underline"
                type="button"
                @click="add()"
            >
                Add Field
            </button>
        </div>
        <div v-if="errors.length" class="text-red-vivid-500">
            <ul>
                <li v-for="(error, index) in errors" :key="`error-${index}`">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";

export default {
    emits: ["added"],
    components: {
        JetInput,
        JetLabel,
    },
    data() {
        return {
            field: {
                name: null,
                value: null,
            },
            errors: [],
        };
    },
    methods: {
        add() {
            if (!this.validate()) return;
            this.$emit("added", this.field);
            this.reset();
        },
        reset() {
            this.field = {
                name: null,
                value: null,
            };
        },
        validate() {
            this.errors = [];

            if (this.field.name) {
                return true;
            } else {
                this.errors.push("Field name is required");
            }
        },
    },
};
</script>
