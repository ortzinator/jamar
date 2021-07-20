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
                <template #delButton v-if="!field.protected">
                    <button
                        class="btn btn-sm btn-danger"
                        @click="confirmingDeleteField = true"
                        v-show="true"
                    >
                        <trash-icon class="w-5 h-5 mx-auto" />
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
            v-if="fieldFormShown"
            @added="(field) => $emit('fieldAdded', field)"
            class="mb-5 p-5 rounded border"
        />
        <button
            v-if="editable && !fieldFormShown"
            @click="newFieldClicked = true"
            type="button"
            class="btn btn-sm font-thin px-2 py-1 rounded text-xs"
        >
            <plus-sm-icon class="h-5 w-5 mr-2" /> Field
        </button>
    </div>
</template>
<script>
import { reactive, ref, watch, computed } from "vue";

import NewPolicyField from "@/Shared/Fields/NewPolicyField";
import PolicyField from "@/Shared/Fields/PolicyField";
import { PlusSmIcon } from "@heroicons/vue/outline";
import { TrashIcon } from "@heroicons/vue/outline";
import JetConfirmationModal from "@/Jetstream/ConfirmationModal";

export default {
    props: { fields: Array, editable: { default: true } },
    emits: ["fieldAdded"],
    components: {
        NewPolicyField,
        PolicyField,
        PlusSmIcon,
        JetConfirmationModal,
        TrashIcon,
    },
    setup(props) {
        var newFieldClicked = ref(false);
        var confirmingDeleteField = ref(false);

        const fieldFormShown = computed(() => {
            var fieldsEmpty = props.fields.length < 1;
            return newFieldClicked.value || fieldsEmpty;
        });

        return { newFieldClicked, fieldFormShown, confirmingDeleteField };
    },
};
</script>
