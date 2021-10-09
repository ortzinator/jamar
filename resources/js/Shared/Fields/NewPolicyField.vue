<template>
    <div>
        <div class="mb-4 md:flex md:space-x-4 md:space-y-0 space-y-4">
            <div class="flex-auto">
                <jet-label for="number" value="Field Name" />
                <jet-input
                    id="name"
                    v-model="field.name"
                    type="text"
                    class="w-full"
                />
            </div>
            <div class="flex-auto">
                <jet-label for="number" value="Field Value" />
                <jet-input
                    id="value"
                    v-model="field.value"
                    type="text"
                    class="w-full"
                />
            </div>
            <button class="btn mt-4 hover:underline" type="button" @click="add">
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
import { ref, reactive } from 'vue';
import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';

export default {
    components: {
        JetInput,
        JetLabel,
    },
    emits: ['added'],
    setup(props, context) {
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
            context.emit('added', { ...field });
            reset();
        }

        return {
            field, errors, reset, add,
        };
    },
};
</script>
