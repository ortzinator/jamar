<template>
    <div>
        <div class="mb-4 space-y-4 md:flex md:space-x-4 md:space-y-0">
            <div class="flex-auto">
                <InputLabel for="number" value="Field Name" />
                <TextInput id="name" v-model="field.name" type="text" class="w-full" />
            </div>
            <div class="flex-auto">
                <InputLabel for="number" value="Field Value" />
                <TextInput id="value" v-model="field.value" type="text" class="w-full" />
            </div>
            <button class="mt-4 font-bold hover:underline" type="button" @click="add">
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

<script setup>
import { ref, reactive } from 'vue';
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';

const emit = defineEmits(['added']);

const field = reactive({
    name: null,
    value: null,
});
let errors = ref([]);

function validate() {
    errors = [];

    if (field.name) {
        return true;
    }
    errors.value.push('Field name is required');
    return false;
}

function reset() {
    field.name = null;
    field.value = null;
}

function add() {
    if (!validate()) return;
    emit('added', { ...field });
    reset();
}
</script>
