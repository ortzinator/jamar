<template>
    <InertiaHead title="Edit Contact" />
    <div class="py-5 font-bold">
        <h1>
            <InertiaLink
                class="text-light-blue-vivid-400 hover:text-light-blue-vivid-600"
                :href="route('contacts.index')"
            >
                Contacts
            </InertiaLink>
            <span class="font-medium text-light-blue-vivid-400">&nbsp;/</span>
            {{ form.name }}
        </h1>
    </div>

    <div class="max-w-6xl overflow-hidden bg-white rounded shadow">
        <div
            v-if="contact.deleted_at"
            class="flex items-center justify-between p-5 pl-8 bg-yellow-vivid-200"
        >
            <div class="flex">
                <TrashIcon class="w-5 h-5 mr-2" />
                This contact is deleted
            </div>
            <button class="btn hover:underline" @click="confirmingRestore = true">Restore</button>
        </div>
        <form @submit.prevent="updateContact">
            <div class="p-8">
                <div class="mb-5">
                    <InputLabel for="name" value="Name" />
                    <TextInput id="name" v-model="form.name" type="text" class="block w-full" />
                    <InputError :message="form.errors.name" />
                </div>
                <div class="mb-5">
                    <InputLabel for="address" value="Address" />
                    <textarea
                        id="address"
                        v-model="form.address"
                        name="address"
                        class="block w-full"
                        cols="30"
                        rows="10"
                    />
                    <InputError :message="form.errors.address" />
                </div>
                <div class="mb-5">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton class="flex items-center">
                            <label for="notes" class="cursor-pointer"> Agent Notes </label>
                            <ChevronRightIcon
                                :class="open ? 'rotate-90' : ''"
                                class="w-5 h-5 ml-2"
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
            <div class="flex items-center px-8 py-4 border-t bg-cool-grey-50 border-cool-grey-100">
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
                    class="ml-auto btn btn-primary"
                    type="submit"
                    :loading="form.processing"
                >
                    Update contact
                </LoadingButton>
            </div>
        </form>
    </div>

    <ConfirmationModal :show="confirmingRestore" @close="confirmingRestore = false">
        <template #title> Restore Contact</template>

        <template #content> Are you sure you want to restore this contact?</template>

        <template #footer>
            <button class="btn" @click="confirmingRestore = false">Cancel</button>

            <button class="ml-2 btn btn-danger" @click="restore">Restore</button>
        </template>
    </ConfirmationModal>

    <ConfirmationModal :show="confirmingDelete" @close="confirmingDelete = false">
        <template #title> Delete Contact</template>

        <template #content> Are you sure you want to delete the Contact?</template>

        <template #footer>
            <button class="btn" @click="confirmingDelete = false">Cancel</button>

            <button class="ml-2 btn btn-danger" @click="destroy">Delete Contact</button>
        </template>
    </ConfirmationModal>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { ChevronRightIcon, TrashIcon } from '@heroicons/vue/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';

import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';

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
