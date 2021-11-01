<template>
    <div class="font-bold py-5">
        <inertia-head title="Edit Policy" />
        <h1>
            <inertia-link
                class="
                    text-light-blue-vivid-400
                    hover:text-light-blue-vivid-600
                "
                href="/"
            >
                Policies
            </inertia-link>
            <span class="text-light-blue-vivid-400 font-medium">&nbsp;/</span>
            {{ policyForm.number }}
        </h1>
    </div>

    <div class="flex max-w-3xl mb-2"><HistoryModal :policy="policy" /></div>

    <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
        <div
            v-if="policy.deleted_at"
            class="bg-yellow-200 flex items-center justify-between p-5 pl-8"
        >
            <div class="flex">
                <trash-icon class="h-5 mr-2 w-5" />
                This policy is deleted
            </div>
            <button class="btn hover:underline" @click="restore">
                Restore
            </button>
        </div>

        <div
            v-if="policyForm.contacts.length === 0"
            class="bg-red-vivid-200 flex items-center justify-between p-5 pl-8"
        >
            <div class="flex items-center">
                <exclamation-icon class="h-5 mr-2 w-5" />
                <div class="text-lg">
                    This policy does not have any policyholders
                </div>
            </div>
        </div>

        <div class="p-8">
            <div class="mb-5">
                <jet-label for="number" value="Policy Number" />
                <jet-input
                    id="number"
                    v-model="policyForm.number"
                    type="text"
                    class="block w-full"
                />
                <jet-input-error :message="policyForm.errors.number" />
            </div>

            <div class="mb-5">
                <jet-label value="Date Issued" />
                <date-picker v-model="policyForm.created_at" mode="dateTime">
                    <template #default="{ inputValue }">
                        <jet-input
                            id="created_at"
                            :value="inputValue"
                            type="text"
                            class="block w-full text-cool-grey-400"
                            readonly
                        />
                    </template>
                </date-picker>
            </div>

            <div class="mb-5">
                <jet-label value="Assigned Agent" />
                <select
                    id="agent"
                    v-model="policyForm.agent_id"
                    class="border border-cool-grey-200 mr-5 rounded mt-1"
                >
                    <option
                        v-for="agent in users"
                        :key="agent.id"
                        :value="agent.id"
                    >
                        {{ agent.name }}
                    </option>
                </select>
            </div>

            <div class="mb-5">
                <jet-label value="Premium" />
                <CurrencyTextBox
                    id="premium"
                    v-model="policyForm.premium"
                    class="border border-cool-grey-200 mr-5 rounded mt-1"
                />
                <jet-input-error :message="policyForm.errors.premium" />
            </div>

            <div class="mb-5">
                <div class="text-cool-grey-600 text-sm text-left">
                    Period of Insurance
                </div>
                <date-range v-model="policyForm.range" />
            </div>

            <policy-fields-list
                class="mb-5"
                :fields="policyForm.fields"
                :policy="policy"
                @fieldAdded="(field) => policyForm.fields.push(field)"
            ></policy-fields-list>

            <contact-list
                v-if="policyForm.contacts.length > 0"
                :contacts="policyForm.contacts"
                class="mb-5"
                removable
                @contactClicked="handleContactClick"
            >
                Policyholders
            </contact-list>

            <select-contact @selected="contactSelected"></select-contact>
        </div>
        <div
            class="px-8 py-4 bg-cool-grey-50 flex justify-between items-center"
        >
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
                <div
                    v-if="policyForm.isDirty"
                    class="mr-5 text-cool-grey-400 italic"
                >
                    Unsaved Changes
                </div>
                <loading-button
                    class="btn btn-primary"
                    type="submit"
                    :loading="policyForm.processing"
                    @click="updatePolicy"
                >
                    Update policy
                </loading-button>
            </div>
        </div>
    </div>
</template>

<script>
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

export default {
    components: {
        ExclamationIcon,
        TrashIcon,
        JetInput,
        JetLabel,
        JetInputError,
        PolicyFieldsList,
        ContactList,
        LoadingButton,
        SelectContact,
        DateRange,
        DatePicker,
        HistoryModal,
        CurrencyTextBox,
    },
    layout: AppLayout,
    props: {
        errors: { type: Object, required: true },
        policy: { type: Object, required: true },
        fields: { type: Array, required: false, default() { return []; } },
        users: { type: Array, required: true },
    },
    setup(props) {
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

        const sending = ref(false);
        const fieldFormShown = ref(false);

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

        return {
            policyForm,
            sending,
            fieldFormShown,
            updatePolicy,
            destroy,
            restore,
            contactSelected,
            handleContactClick,
        };
    },
};
</script>
