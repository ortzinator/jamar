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
            <button class="btn hover:underline" @click="restore">Restore</button>
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
                <DatePicker v-model="policyForm.created_at" mode="dateTime">
                    <template #default="{ inputValue }">
                        <JetInput
                            id="created_at"
                            :value="inputValue"
                            type="text"
                            class="block w-full text-cool-grey-400"
                            readonly
                        />
                    </template>
                </DatePicker>
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
                <CurrencyTextBox
                    id="premium"
                    v-model="policyForm.premium"
                    class="mt-1 mr-5 border rounded border-cool-grey-200"
                />
                <JetInputError :message="policyForm.errors.premium" />
            </div>

            <div class="mb-5">
                <div class="text-sm text-left text-cool-grey-600">Period of Insurance</div>
                <DateRange v-model="policyForm.range" />
            </div>

            <PolicyFieldsList
                class="mb-5"
                :fields="policyForm.fields"
                :policy="policy"
                @fieldAdded="(field) => policyForm.fields.push(field)"
            ></PolicyFieldsList>

            <ContactList
                v-if="policyForm.contacts.length > 0"
                :contacts="policyForm.contacts"
                class="mb-5"
                removable
                @contactClicked="handleContactClick"
            >
                Policyholders
            </ContactList>

            <SelectContact @selected="contactSelected"></SelectContact>
        </div>
        <div class="flex items-center justify-between px-8 py-4 bg-cool-grey-50">
            <button
                v-if="!policy.deleted_at"
                class="text-red-vivid-600 hover:underline"
                tabindex="-1"
                type="button"
                @click="destroy"
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
</template>

<script setup>
import { ref, watch } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { ExclamationIcon, TrashIcon } from '@heroicons/vue/outline';
import { DatePicker } from 'v-calendar';
import AppLayout from '@/Layouts/NewLayout';

import PolicyFieldsList from '@/Shared/Fields/PolicyFieldsList';
import ContactList from '@/Shared/Contact/ContactList';
import SelectContact from '@/Shared/Contact/SelectContact';
import LoadingButton from '@/Shared/LoadingButton';
import DateRange from '@/Shared/DateRange';
import HistoryModal from '@/Shared/HistoryModal';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import CurrencyTextBox from '@/Shared/CurrencyTextBox';

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
    created_at: props.policy.created_at,
    range: {
        start: props.policy.period_start,
        end: props.policy.period_end,
    },
    fields: props.policy.fields ?? [],
    agent_id: props.policy.agent_id,
    premium: props.policy.premium,
});

function updatePolicy() {
    policyForm
        .transform((data) => ({
            ...data,
            period_start: data.range.start,
            period_end: data.range.end,
            premium: data.premium.amount,
        }))
        .put(route('policies.update', props.policy.id));
}
const premium = ref(props.policy.premium);
watch(premium, () => console.log(policyForm.premium.amount));

function destroy() {
    // TODO check if contact is associated with a policy
    if (window.confirm('Are you sure you want to delete this policy?')) {
        policyForm.delete(route('policies.destroy', props.policy.id));
    }
}

function restore() {
    if (window.confirm('Are you sure you want to restore this policy?')) {
        policyForm.put(route('policies.restore', props.policy.id));
    }
}

function contactSelected(contact) {
    policyForm.contacts.push(contact);
}

function handleContactClick(contact) {
    window.open(contact.link, '_blank').focus();
}
</script>
