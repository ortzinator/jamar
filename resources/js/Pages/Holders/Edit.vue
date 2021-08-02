<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 class="mb-8 font-bold text-3xl">
            <Link
                class="text-indigo-400 hover:text-indigo-600"
                :href="route('holders')"
            >
                Holders
            </Link>
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            {{ form.name }}
        </h1>
        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div
                v-if="holder.deleted_at"
                class="bg-yellow-200 flex items-center justify-between p-5 pl-8"
            >
                <div class="flex">
                    <trash-icon class="h-5 mr-2 w-5" />
                    This policyholder is deleted
                </div>
                <button
                    class="btn hover:underline"
                    @click="confirmingRestore = true"
                >
                    Restore
                </button>
            </div>
            <form @submit.prevent="updateHolder">
                <div class="p-8">
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
                    class="
                        px-8
                        py-4
                        bg-gray-100
                        border-t border-gray-200
                        flex
                        items-center
                    "
                >
                    <button
                        v-if="!holder.deleted_at"
                        class="text-red-600 hover:underline"
                        tabindex="-1"
                        type="button"
                        @click="confirmingDelete = true"
                    >
                        Delete holder
                    </button>
                    <loading-button
                        class="btn btn-primary ml-auto"
                        type="submit"
                        :loading="form.processing"
                    >
                        Update holder
                    </loading-button>
                </div>
            </form>
        </div>

        <jet-confirmation-modal
            :show="confirmingRestore"
            @close="confirmingRestore = false"
        >
            <template #title> Restore Policyholder </template>

            <template #content>
                Are you sure you want to restore this policyholder?
            </template>

            <template #footer>
                <button class="btn" @click="confirmingRestore = false">
                    Cancel
                </button>

                <button class="btn btn-danger ml-2" @click="restore">
                    Restore
                </button>
            </template>
        </jet-confirmation-modal>

        <jet-confirmation-modal
            :show="confirmingDelete"
            @close="confirmingDelete = false"
        >
            <template #title> Delete Policyholder </template>

            <template #content>
                Are you sure you want to delete the Policyholder?
            </template>

            <template #footer>
                <button class="btn" @click="confirmingDelete = false">
                    Cancel
                </button>

                <button class="btn btn-danger ml-2" @click="destroy">
                    Delete Field
                </button>
            </template>
        </jet-confirmation-modal>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/AppLayout";
import LoadingButton from "@/Shared/LoadingButton";
import { TrashIcon } from "@heroicons/vue/outline";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";
import JetConfirmationModal from "@/Jetstream/ConfirmationModal";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    layout: AppLayout,
    components: {
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        LoadingButton,
        JetConfirmationModal,
        TrashIcon,
        Link,
    },
    props: {
        errors: Object,
        holder: Object,
    },
    setup(props) {
        const form = useForm({
            name: props.holder.name,
            address: props.holder.address,
        });

        return { form };
    },
    data() {
        return {
            confirmingDelete: false,
            confirmingRestore: false,
        };
    },
    methods: {
        updateHolder() {
            this.form.put(this.route("holders.update", this.holder.id));
        },
        destroy() {
            this.form.delete(this.route("holders.destroy", this.holder.id));
            this.confirmingDelete = false;
        },
        restore() {
            this.form.put(this.route("holders.restore", this.holder.id));
            this.confirmingRestore = false;
        },
    },
};
</script>
