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
                    v-model="policyForm.number"
                    id="number"
                    type="text"
                    class="block w-full"
                />
                <jet-input-error :message="policyForm.errors.number" />
            </div>

            <div class="mb-5">
                <jet-label value="Date Issued" />
                <date-picker v-model="policyForm.created_at" mode="dateTime">
                    <template v-slot="{ inputValue }">
                        <jet-input
                            :value="inputValue"
                            id="created_at"
                            type="text"
                            class="block w-full text-gray-400"
                            readonly
                        />
                    </template>
                </date-picker>
            </div>
            <div class="mb-5">
                <jet-label value="Assigned Agent" />
                <select
                    class="border border-cool-grey-200 mr-5 rounded mt-1"
                    id="agent"
                    v-model="policyForm.agent_id"
                >
                    <option
                        v-for="agent in users"
                        v-bind:value="agent.id"
                        v-bind:key="agent.id"
                    >
                        {{ agent.name }}
                    </option>
                </select>
            </div>

            <div class="mb-5">
                <div class="text-gray-600 text-sm text-left">
                    Period of Insurance
                </div>
                <date-range v-model="policyForm.range" />
            </div>

            <policy-fields-list
                :fields="policyForm.fields"
                :policy="policy"
                @fieldAdded="(field) => this.policyForm.fields.push(field)"
                class="mb-5"
            ></policy-fields-list>

            <contact-list
                v-if="policyForm.contacts.length > 0"
                :contacts="policyForm.contacts"
                class="mb-5"
                removable
            >
                Policyholders
            </contact-list>

            <select-contact @selected="contactSelected"></select-contact>
        </div>
        <div
            class="
                px-8
                py-4
                bg-gray-100
                border-t border-gray-200
                flex
                justify-between
                items-center
            "
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
import { reactive, ref, watch } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/NewLayout';
import { ExclamationIcon } from '@heroicons/vue/outline';
import { TrashIcon } from '@heroicons/vue/outline';
import PolicyFieldsList from '@/Shared/Fields/PolicyFieldsList';
import ContactList from '@/Shared/Contact/ContactList';
import SelectContact from '@/Shared/Contact/SelectContact';
import LoadingButton from '@/Shared/LoadingButton';
import DateRange from '@/Shared/DateRange';
import { DatePicker } from 'v-calendar';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import JetValidationErrors from '@/Jetstream/ValidationErrors';

export default {
    layout: AppLayout,
    components: {
        AppLayout,
        ExclamationIcon,
        TrashIcon,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        PolicyFieldsList,
        ContactList,
        LoadingButton,
        SelectContact,
        DateRange,
        DatePicker
    },
    props: {
        errors: Object,
        policy: Object,
        fields: Array,
        users: { type: Array, required: true }
    },
    setup(props) {
        const policyForm = useForm({
            number: props.policy.number,
            contacts: props.policy.contacts,
            created_at: props.policy.created_at,
            range: {
                start: props.policy.period_start,
                end: props.policy.period_end
            },
            fields: props.policy.fields ?? [],
            agent_id: props.policy.agent_id
        });

        const sending = ref(false);
        const fieldFormShown = ref(false);

        function updatePolicy() {
            policyForm
                .transform((data) => ({
                    ...data,
                    period_start: data.range.start,
                    period_end: data.range.end
                }))
                .put(route('policies.update', props.policy.id));
        }

        function destroy() {
            //TODO check if contact is associated with a policy
            if (confirm('Are you sure you want to delete this policy?')) {
                policyForm.delete(route('policies.destroy', props.policy.id));
            }
        }

        function restore() {
            if (confirm('Are you sure you want to restore this policy?')) {
                policyForm.put(route('policies.restore', props.policy.id));
            }
        }

        function contactSelected(contact) {
            policyForm.contacts.push(contact);
        }

        function formatDate(date) {
            return new Date(date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        return {
            policyForm,
            sending,
            fieldFormShown,
            updatePolicy,
            destroy,
            restore,
            contactSelected,
            formatDate
        };
    }
};
</script>
