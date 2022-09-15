<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Edit Policy" />
        <h1>
            <InertiaLink class="text-light-blue-vivid-400 hover:text-light-blue-vivid-600" href="/">
                Policies
            </InertiaLink>
            <span class="font-medium text-light-blue-vivid-400">&nbsp;/</span>
            {{ policyForm.number }}
        </h1>
    </div>

    <div class="flex max-w-3xl mb-2"><HistoryModal :policy="policy" /></div>

    <div class="max-w-3xl overflow-hidden bg-white rounded shadow">
        <div
            v-if="policy.deleted_at"
            class="flex items-center justify-between p-5 pl-8 bg-yellow-200"
        >
            <div class="flex">
                <TrashIcon class="w-5 h-5 mr-2" />
                This policy is deleted
            </div>
            <button class="btn hover:underline" @click="confirmingRestore = true">Restore</button>
        </div>

        <div
            v-if="policyForm.contacts.length === 0"
            class="flex items-center justify-between p-5 pl-8 bg-red-vivid-200"
        >
            <div class="flex items-center">
                <ExclamationIcon class="w-5 h-5 mr-2" />
                <div class="text-lg">This policy does not have any policyholders</div>
            </div>
        </div>

        <div class="p-8">
            <div class="mb-5">
                <JetLabel for="number" value="Policy Number" />
                <JetInput
                    id="number"
                    v-model="policyForm.number"
                    type="text"
                    class="block w-full"
                />
                <JetInputError :message="policyForm.errors.number" />
            </div>

            <div class="mb-5">
                <JetLabel value="Date Issued" />
                <Calendar v-model="policyForm.created_at" readonly="true" />
            </div>

            <div class="mb-5">
                <JetLabel value="Assigned Agent" />
                <select
                    id="agent"
                    v-model="policyForm.agent_id"
                    class="mt-1 mr-5 border rounded border-cool-grey-200"
                >
                    <option v-for="agent in users" :key="agent.id" :value="agent.id">
                        {{ agent.name }}
                    </option>
                </select>
            </div>

            <div class="mb-5">
                <JetLabel value="Premium" />
                <JamarCurrencyTextBox
                    id="premium"
                    v-model="policyForm.premium"
                    :options="{ currency: $attrs.currency.code, valueScaling: 'precision' }"
                    class="mt-1 mr-5 border rounded border-cool-grey-200"
                />
                <JetInputError :message="policyForm.errors.premium" />
            </div>

            <div class="mb-5">
                <div class="text-sm text-left text-cool-grey-600">Period of Insurance</div>
                <Calendar v-model="policyForm.period" selection-mode="range" />
            </div>

            <PolicyFieldsList
                class="mb-5"
                :fields="policyForm.fields"
                :policy="policy"
                @field-added="(field) => policyForm.fields.push(field)"
            ></PolicyFieldsList>

            <ContactList
                v-if="policyForm.contacts.length > 0"
                :contacts="policyForm.contacts"
                class="mb-5"
                removable
                @contact-clicked="handleContactClick"
            >
                Policyholders
            </ContactList>
            <button class="btn" @click="showAddContact = true">Add Policyholder</button>
        </div>
        <div class="flex items-center justify-between px-8 py-4 bg-cool-grey-50">
            <button
                v-if="!policy.deleted_at"
                class="text-red-vivid-600 hover:underline"
                tabindex="-1"
                type="button"
                @click="confirmingDelete = true"
            >
                Delete policy
            </button>
            <div class="flex items-baseline">
                <div v-if="policyForm.isDirty" class="mr-5 italic text-cool-grey-400">
                    Unsaved Changes
                </div>
                <LoadingButton
                    class="btn btn-primary"
                    type="submit"
                    :loading="policyForm.processing"
                    @click="updatePolicy"
                >
                    Update policy
                </LoadingButton>
            </div>
        </div>
    </div>

    <JetConfirmationModal :show="confirmingRestore" @close="confirmingRestore = false">
        <template #title> Restore Policy </template>

        <template #content> Are you sure you want to restore this policy? </template>

        <template #footer>
            <button class="btn" @click="confirmingRestore = false">Cancel</button>

            <button class="ml-2 btn btn-danger" @click="restore">Restore</button>
        </template>
    </JetConfirmationModal>

    <JetConfirmationModal :show="confirmingDelete" @close="confirmingDelete = false">
        <template #title> Delete Policy </template>

        <template #content> Are you sure you want to delete the policy? </template>

        <template #footer>
            <button class="btn" @click="confirmingDelete = false">Cancel</button>

            <button class="ml-2 btn btn-danger" @click="destroy">Delete Policy</button>
        </template>
    </JetConfirmationModal>

    <JetDialogModal :show="showAddContact" @close="showAddContact = false">
        <template #title>Add Policyholder</template>

        <template #content>
            <SelectContact class="m-4" @selected="contactSelected" />
        </template>

        <template #footer>
            <button class="btn" @click="showAddContact = false">Close</button>
        </template>
    </JetDialogModal>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { ExclamationIcon, TrashIcon } from '@heroicons/vue/outline';
import Calendar from 'primevue/calendar';
import AppLayout from '@/Layouts/NewLayout.vue';

import PolicyFieldsList from '@/Shared/Fields/PolicyFieldsList.vue';
import ContactList from '@/Shared/Contact/ContactList.vue';
import SelectContact from '@/Shared/Contact/SelectContact.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import HistoryModal from '@/Shared/HistoryModal.vue';

import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal.vue';
import JetDialogModal from '@/Jetstream/DialogModal.vue';
import JamarCurrencyTextBox from '@/Shared/JamarCurrencyTextBox.vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps({
    errors: { type: Object, required: true },
    policy: { type: Object, required: true },
    fields: {
        type: Array,
        required: false,
        default() {
            return [];
        },
    },
    users: { type: Array, required: true },
});

const policyForm = useForm({
    number: props.policy.number,
    contacts: props.policy.contacts,
    created_at: new Date(props.policy.created_at),
    period: [new Date(props.policy.period_start), new Date(props.policy.period_end)],
    fields: props.policy.fields ?? [],
    agent_id: props.policy.agent_id,
    premium: Number(props.policy.premium.amount),
});

const confirmingDelete = ref(false);
const confirmingRestore = ref(false);
const showAddContact = ref(false);

function updatePolicy() {
    policyForm
        .transform((data) => ({
            ...data,
            period_start: data.period[0],
            period_end: data.period[1],
        }))
        .put(route('policies.update', props.policy.id));
}

function destroy() {
    // TODO check if contact is associated with a policy
    policyForm.delete(route('policies.destroy', props.policy.id));
    confirmingDelete.value = false;
}

function restore() {
    policyForm.put(route('policies.restore', props.policy.id));
    confirmingRestore.value = false;
}

function contactSelected(contact) {
    policyForm.contacts.push(contact);
    showAddContact.value = false;
}

function handleContactClick(contact) {
    window.open(contact.link, '_blank').focus();
}
</script>
