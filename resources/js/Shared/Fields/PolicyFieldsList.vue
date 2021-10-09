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
                <template v-if="!field.protected" #delButton>
                    <button
                        v-show="true"
                        class="btn hover:bg-red-vivid-300 hover:text-white"
                        @click="handleFieldDeleted(field)"
                    >
                        <trash-icon class="w-5 h-5 mx-auto" />
                    </button>
                </template>
            </policy-field>
        </div>

        <new-policy-field
            v-if="fieldFormShown"
            class="mb-5 p-5 rounded border"
            @added="(field) => handleFieldAdded(field)"
        />
        <button
            v-if="editable && !fieldFormShown"
            type="button"
            class="btn btn-sm px-2 py-1 rounded flex items-center"
            @click="handleNewFieldClick"
        >
            <plus-sm-icon class="h-5 w-5 mr-2" /> Field
        </button>
    </div>
</template>
<script>
import { ref, computed } from 'vue';

import { PlusSmIcon, TrashIcon } from '@heroicons/vue/outline';
import NewPolicyField from '@/Shared/Fields/NewPolicyField';
import PolicyField from '@/Shared/Fields/PolicyField';

export default {
    components: {
        NewPolicyField,
        PolicyField,
        PlusSmIcon,
        TrashIcon,
    },
    props: {
        fields: { type: Array, required: true },
        editable: { type: Boolean, default: true },
    },
    emits: ['fieldAdded', 'fieldDeleted'],
    setup(props, { emit }) {
        const newFieldClicked = ref(false);
        const confirmingDeleteField = ref(false);
        const anyFieldAdded = ref(false);

        const fieldFormShown = computed(() => {
            const fieldsEmpty = props.fields.length < 1;
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
            handleFieldDeleted,
        };
    },
};
</script>
