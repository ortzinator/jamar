<template>
    <InertiaHead title="Edit Contact" />
    <div class="font-bold py-5">
        <h1>
            <InertiaLink
                class="
                    text-light-blue-vivid-400
                    hover:text-light-blue-vivid-600
                "
                :href="route('contacts')"
            >
                Contacts
            </InertiaLink>
            <span class="text-light-blue-vivid-400 font-medium">&nbsp;/</span>
            {{ form.name }}
        </h1>
    </div>

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
                <TrashIcon class="h-5 mr-2 w-5" />
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
                    <JetLabel for="name" value="Name" />
                    <JetInput
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="block w-full"
                    />
                    <JetInput-error :message="form.errors.name" />
                </div>
                <div class="mb-5">
                    <JetLabel for="address" value="Address" />
                    <textarea
                        id="address"
                        v-model="form.address"
                        name="address"
                        class="block w-full"
                        cols="30"
                        rows="10"
                    />
                    <JetInputError :message="form.errors.address" />
                </div>
                <div class="mb-5">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton class="flex items-center">
                            <label for="notes" class="cursor-pointer">
                                Agent Notes
                            </label>
                            <ChevronRightIcon
                                :class="open ? 'rotate-90' : ''"
                                class="h-5 w-5 ml-2"
                            />
                        </DisclosureButton>
                        <DisclosurePanel class="mt-5">
                            <textarea
                                id="notes"
                                v-model="form.notes"
                                name="notes"
                                class="block w-full"
                                cols="30"
                                rows="10"
                            />
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
            <div
                class="
                    px-8
                    py-4
                    bg-cool-grey-50
                    border-t border-cool-grey-100
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
                <LoadingButton
                    class="btn btn-primary ml-auto"
                    type="submit"
                    :loading="form.processing"
                >
                    Update contact
                </LoadingButton>
            </div>
        </form>
    </div>

    <JetConfirmationModal
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
    </JetConfirmationModal>

    <JetConfirmationModal
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
    </JetConfirmationModal>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { TrashIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import AppLayout from '@/Layouts/NewLayout';
import LoadingButton from '@/Shared/LoadingButton';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal';

defineOptions({
    layout: AppLayout,
});

const props = defineProps({
    errors: { type: Object, required: true },
    contact: { type: Object, required: true },
});

const form = useForm({
    name: props.contact.name,
    address: props.contact.address,
    notes: props.contact.notes,
});
const confirmingDelete = ref(false);
const confirmingRestore = ref(false);

function updateContact() {
    form.put(route('contacts.update', props.contact.id));
}

function destroy() {
    form.delete(route('contacts.destroy', props.contact.id));
    confirmingDelete.value = false;
}

function restore() {
    form.put(route('contacts.restore', props.contact.id));
    confirmingRestore.value = false;
}

</script>
