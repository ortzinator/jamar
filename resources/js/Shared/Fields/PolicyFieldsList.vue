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
                class="border-b font-bold my-5 pb-2 text-cool-grey-700"
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
                        class="btn hover:bg-red-vivid-300 hover:text-white"
                        @click="handleFieldDeleted(field)"
                        v-show="true"
                    >
                        <trash-icon class="w-5 h-5 mx-auto" />
                    </button>
                </template>
            </policy-field>
        </div>

        <new-policy-field
            v-if="fieldFormShown"
            @added="(field) => handleFieldAdded(field)"
            class="mb-5 p-5 rounded border"
        />
        <button
            v-if="editable && !fieldFormShown"
            @click="handleNewFieldClick"
            type="button"
            class="btn btn-sm px-2 py-1 rounded flex items-center"
        >
            <plus-sm-icon class="h-5 w-5 mr-2" /> Field
        </button>
    </div>
</template>
<script>
import { ref, computed } from 'vue';

import NewPolicyField from '@/Shared/Fields/NewPolicyField';
import PolicyField from '@/Shared/Fields/PolicyField';
import { PlusSmIcon, TrashIcon } from '@heroicons/vue/outline';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal';

export default {
    props: { fields: Array, editable: { default: true } },
    emits: ['fieldAdded', 'fieldDeleted'],
    components: {
        NewPolicyField,
        PolicyField,
        PlusSmIcon,
        JetConfirmationModal,
        TrashIcon
    },
    setup(props, { emit }) {
        var newFieldClicked = ref(false);
        var confirmingDeleteField = ref(false);
        var anyFieldAdded = ref(false);

        const fieldFormShown = computed(() => {
            var fieldsEmpty = props.fields.length < 1;
            return newFieldClicked.value || fieldsEmpty || anyFieldAdded;
        });

        function handleNewFieldClick() {
            newFieldClicked.value = true;
        }

        function handleFieldAdded(field) {
            emit('fieldAdded', field);
            anyFieldAdded.value = true;
        }

        function handleFieldDeleted(field) {
            emit('fieldDeleted', field);
        }

        return {
            newFieldClicked,
            fieldFormShown,
            confirmingDeleteField,
            anyFieldAdded,
            handleNewFieldClick,
            handleFieldAdded,
            handleFieldDeleted
        };
    }
};
</script>
