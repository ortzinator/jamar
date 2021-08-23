<template>
    <app-layout>
        <template #header>
            <h1>
                <inertia-link
                    class="
                        text-light-blue-vivid-400
                        hover:text-light-blue-vivid-600
                    "
                    :href="route('contacts')"
                >
                    Contacts
                </inertia-link>
                <span class="text-light-blue-vivid-400 font-medium"
                    >&nbsp;/</span
                >
                {{ form.name }}
            </h1>
        </template>

        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div
                v-if="contact.deleted_at"
                class="
                    bg-yellow-vivid-200
                    flex
                    items-center
                    justify-between
                    p-5
                    pl-8
                "
            >
                <div class="flex">
                    <trash-icon class="h-5 mr-2 w-5" />
                    This contact is deleted
                </div>
                <button
                    class="btn hover:underline"
                    @click="confirmingRestore = true"
                >
                    Restore
                </button>
            </div>
            <form @submit.prevent="updateContact">
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
                    <div class="mb-5">
                        <Disclosure v-slot="{ open }">
                            <DisclosureButton class="flex items-center">
                                <label for="notes" class="cursor-pointer"
                                    >Agent Notes</label
                                >
                                <ChevronRightIcon
                                    :class="open ? 'transform rotate-90' : ''"
                                    class="h-5 w-5 ml-2"
                                />
                            </DisclosureButton>
                            <DisclosurePanel class="mt-5">
                                <textarea
                                    name="notes"
                                    id="notes"
                                    class="block w-full"
                                    cols="30"
                                    rows="10"
                                    v-model="form.notes"
                                ></textarea>
                            </DisclosurePanel>
                        </Disclosure>
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
                        v-if="!contact.deleted_at"
                        class="text-red-vivid-600 hover:underline"
                        tabindex="-1"
                        type="button"
                        @click="confirmingDelete = true"
                    >
                        Delete contact
                    </button>
                    <loading-button
                        class="btn btn-primary ml-auto"
                        type="submit"
                        :loading="form.processing"
                    >
                        Update contact
                    </loading-button>
                </div>
            </form>
        </div>

        <jet-confirmation-modal
            :show="confirmingRestore"
            @close="confirmingRestore = false"
        >
            <template #title> Restore Contact </template>

            <template #content>
                Are you sure you want to restore this contact?
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
            <template #title> Delete Contact </template>

            <template #content>
                Are you sure you want to delete the Contact?
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
    </app-layout>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/NewLayout';
import LoadingButton from '@/Shared/LoadingButton';
import { TrashIcon, ChevronRightIcon } from '@heroicons/vue/outline';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import JetValidationErrors from '@/Jetstream/ValidationErrors';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

export default {
    components: {
        AppLayout,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        LoadingButton,
        JetConfirmationModal,
        TrashIcon,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronRightIcon
    },
    props: {
        errors: Object,
        contact: Object
    },
    setup(props) {
        const form = useForm({
            name: props.contact.name,
            address: props.contact.address,
            notes: props.contact.notes
        });

        return { form };
    },
    data() {
        return {
            confirmingDelete: false,
            confirmingRestore: false
        };
    },
    methods: {
        updateContact() {
            this.form.put(this.route('contacts.update', this.contact.id));
        },
        destroy() {
            this.form.delete(this.route('contacts.destroy', this.contact.id));
            this.confirmingDelete = false;
        },
        restore() {
            this.form.put(this.route('contacts.restore', this.contact.id));
            this.confirmingRestore = false;
        }
    }
};
</script>
