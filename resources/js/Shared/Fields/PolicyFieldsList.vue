<template>
    <div>
        <div
            v-if="fields.length === 0 && editable"
            class="bg-yellow-100 p-3 text-sm rounded mb-5"
        >
            No policy fields found
        </div>
        <div v-else class="mr-5 mb-5">
            <div
                v-if="editable"
                class="border-b font-bold my-5 pb-2 text-gray-700"
            >
                Policy Fields
            </div>

            <policy-field
                v-for="field in fields"
                :key="field.id"
                :field="field"
                class=""
            >
                <template v-slot:delButton v-if="!field.protected">
                    <button
                        class="btn-sm btn-danger mr-2 col-span-1"
                        @click="confirmingDeleteField = true"
                        v-show="true"
                    >
                        Delete
                    </button>
                </template>
            </policy-field>

            <jet-confirmation-modal
                :show="confirmingDeleteField"
                @close="confirmingDeleteField = false"
            >
                <template #title> Delete Field </template>

                <template #content>
                    Are you sure you want to delete this field?
                </template>

                <template #footer>
                    <button class="btn" @click="confirmingDeleteField = false">
                        Cancel
                    </button>

                    <button
                        class="btn btn-danger ml-2"
                        @click="(field) => $emit('delete', field)"
                    >
                        Delete Field
                    </button>
                </template>
            </jet-confirmation-modal>
        </div>

        <new-policy-field
            v-if="fieldFormShown && editable"
            @added="(field) => $emit('fieldAdded', field)"
            class="
                mb-5
                p-5
                rounded
                bg-blue-100
                border border-blue-200
                shadow-lg
            "
        />
        <button
            @click="fieldFormShown = true"
            v-if="!fieldFormShown && editable"
            type="button"
            class="flex items-center"
        >
            <plus-circle-icon class="h-5 w-5 mr-2" /> Field
        </button>
    </div>
</template>
<script>
import NewPolicyField from "@/Shared/Fields/NewPolicyField";
import PolicyField from "@/Shared/Fields/PolicyField";
import { PlusCircleIcon } from "@heroicons/vue/outline";
import JetConfirmationModal from "@/Jetstream/ConfirmationModal";

export default {
    props: { fields: Array, editable: { default: true } },
    emits: ["fieldAdded"],
    components: {
        NewPolicyField,
        PolicyField,
        PlusCircleIcon,
        JetConfirmationModal,
    },
    data() {
        return {
            fieldFormShown: false,
            confirmingDeleteField: false,
        };
    },
};
</script>
