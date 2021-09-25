<template>
    <button @click="setIsOpen(true)" class="btn btn-secondary ml-auto">
        History of facts
    </button>
    <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        :open="isOpen"
        @close="setIsOpen"
    >
        <div class="flex items-center justify-center min-h-screen">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />

            <div class="bg-white max-w-sm mx-auto relative rounded shadow-2xl">
                <div class="px-7 py-5">
                    <DialogTitle>Add to History of Facts</DialogTitle>

                    <jet-label for="message" value="Message" />
                    <textarea
                        name="address"
                        id="address"
                        class="block w-full"
                        cols="30"
                        rows="10"
                        v-model="historyForm.message"
                    />
                    <jet-input-error :message="historyForm.errors.message" />
                </div>

                <div
                    class="
                        bg-cool-grey-100
                        px-4
                        py-3
                        sm:flex sm:flex-row-reverse sm:px-6
                    "
                >
                    <button class="btn" @click="setIsOpen(false)">
                        Cancel
                    </button>
                    <button class="btn btn-primary" @click="setIsOpen(false)">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription
} from '@headlessui/vue';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import JetValidationErrors from '@/Jetstream/ValidationErrors';

export default {
    props: { policy: Object },
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        DialogDescription,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors
    },
    setup(props) {
        let isOpen = ref(false);

        const historyForm = useForm({
            message: '',
            policy_id: props.policy.id,
            event_type: 'note'
        });

        function setIsOpen(state) {
            isOpen.value = state;
        }

        return { isOpen, setIsOpen, historyForm };
    }
};
</script>
