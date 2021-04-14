<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link
                class="text-indigo-400 hover:text-indigo-600"
                href="/holders"
                >Holders</inertia-link
            >
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            New Policyholder
        </h1>
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
                        <jet-input-error
                            :message="form.errors.name"
                        ></jet-input-error>
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
                        ></textarea>
                        <jet-input-error
                            :message="form.errors.address"
                        ></jet-input-error>
                    </div>
                </div>
                <div
                    class="px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"
                >
                    <loading-button
                        class="btn btn-primary ml-auto"
                        type="submit"
                        :loading="form.processing"
                    >
                        Create holder
                    </loading-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/inertia-vue3";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";
import JetConfirmationModal from "@/Jetstream/ConfirmationModal";
import LoadingButton from "@/Shared/LoadingButton";

export default {
    layout: AppLayout,
    components: {
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        JetConfirmationModal,
        LoadingButton,
    },
    setup(props) {
        const form = useForm({
            name: null,
            address: null,
        });

        return { form };
    },
    methods: {
        store() {
            this.form.post(this.route("holders.store"));
        },
    },
};
</script>
