<template>
    <div class="font-bold py-5">
        <inertia-head title="Create Contact" />
        <h1>
            <inertia-link
                class="
                    text-light-blue-vivid-400
                    hover:text-light-blue-vivid-600
                "
                href="/contacts"
            >
                Contacts
            </inertia-link>
            <span class="text-light-blue-vivid-400 font-medium">&nbsp;/</span>
            New Contact
        </h1>
    </div>

    <form @submit.prevent="store">
        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div class="p-5">
                <div class="mb-5">
                    <jet-label for="name" value="Name"></jet-label>
                    <jet-input
                        v-model="form.name"
                        id="name"
                        type="text"
                        class="block w-full"
                    />
                    <jet-input-error :message="form.errors.name" />
                </div>
                <div class="mb-5">
                    <jet-label for="address" value="Address"></jet-label>
                    <textarea
                        name="address"
                        id="address"
                        class="block w-full"
                        cols="30"
                        rows="10"
                        v-model="form.address"
                    />
                    <jet-input-error :message="form.errors.address" />
                </div>
            </div>
            <div
                class="
                    px-8
                    py-4
                    bg-gray-100
                    border-t border-gray-200
                    flex
                    items-center
                "
            >
                <loading-button
                    class="btn btn-primary ml-auto"
                    type="submit"
                    :loading="form.processing"
                >
                    Create contact
                </loading-button>
            </div>
        </div>
    </form>
</template>

<script>
import AppLayout from '@/Layouts/NewLayout';
import { useForm } from '@inertiajs/inertia-vue3';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import JetValidationErrors from '@/Jetstream/ValidationErrors';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal';
import LoadingButton from '@/Shared/LoadingButton';

export default {
    layout: AppLayout,
    components: {
        AppLayout,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        JetConfirmationModal,
        LoadingButton
    },
    setup(props) {
        const form = useForm({
            name: null,
            address: null
        });

        return { form };
    },
    methods: {
        store() {
            this.form.post(this.route('contacts.store'));
        }
    }
};
</script>
