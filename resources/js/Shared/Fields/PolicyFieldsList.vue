<template>
    <div>
        <div v-if="fields.length === 0 && editable" class="p-3 mb-5 text-sm bg-yellow-100 rounded">
            No policy fields found
        </div>
        <div v-else class="mb-5 mr-5">
            <PolicyField v-for="field in fields" :key="field.id" :field="field" class="">
                <template v-if="!field.protected" #delButton>
                    <button
                        v-show="true"
                        class="btn hover:bg-red-vivid-300 hover:text-white"
                        @click="handleFieldDeleted(field)"
                    >
                        <TrashIcon class="w-5 h-5 mx-auto" />
                    </button>
                </template>
            </PolicyField>
        </div>

        <NewPolicyField v-if="fieldFormShown" @added="(field) => handleFieldAdded(field)" />
        <button
            v-if="editable && !fieldFormShown"
            type="button"
            class="flex items-center px-2 py-1 rounded btn btn-sm"
            @click="handleNewFieldClick"
        >
            <PlusSmIcon class="w-5 h-5 mr-2" /> Field
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import { PlusSmIcon, TrashIcon } from '@heroicons/vue/outline';
import NewPolicyField from '@/Shared/Fields/NewPolicyField';
import PolicyField from '@/Shared/Fields/PolicyField';

const props = defineProps({
    fields: { type: Array, required: true },
    editable: { type: Boolean, default: true },
});
const emit = defineEmits(['fieldAdded', 'fieldDeleted']);

const newFieldClicked = ref(false);
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
</script>
