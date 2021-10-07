<template>
    <div class="font-bold py-5">
        <inertia-head title="Create Policy" />
        <h1>
            <inertia-link
                class="
                    text-light-blue-vivid-400
                    hover:text-light-blue-vivid-600
                "
                :href="route('policies')"
            >
                Policies
            </inertia-link>
            <span class="text-light-blue-vivid-400 font-medium">/</span>
            New Policy
        </h1>
    </div>

    <form @submit.prevent="store">
        <div class="">
            <FormSection>
                <template #header>Basics</template>
                <template #description> Description of this section </template>
                <div class="grid gap-4 grid-cols-6">
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="template" value="Policy Type" />
                        <div class="flex items-center">
                            <select
                                v-model="selectedTemplate"
                                class="
                                    border border-cool-grey-200
                                    mt-1
                                    rounded
                                    w-full
                                "
                            >
                                <option
                                    v-for="template in templates"
                                    :key="template.id"
                                    :value="template.fields"
                                >
                                    {{ template.label }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="agent" value="Assigned Agent" />
                        <select
                            v-model="policyForm.agent_id"
                            class="
                                border border-cool-grey-200
                                rounded
                                mt-1
                                w-full
                            "
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
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="number" value="Policy Number" />
                        <jet-input
                            id="number"
                            v-model="policyForm.number"
                            type="text"
                            class="block w-full mt-1"
                        />
                        <jet-input-error :message="policyForm.errors.number" />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label>Period of Insurance</jet-label>
                        <div
                            :class="{
                                formError:
                                    policyForm.errors.period_start ||
                                    policyForm.errors.period_end
                            }"
                            class="mt-1"
                        >
                            <date-range v-model="policyForm.period" />
                        </div>
                        <jet-input-error
                            :message="policyForm.errors.period_start"
                        />
                        <jet-input-error
                            :message="policyForm.errors.period_end"
                        />
                    </div>
                </div>
            </FormSection>

            <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />

            <FormSection>
                <template #header>Policy Fields</template>
                <template #description> Description of this section </template>

                <policy-fields-list
                    class="mb-5"
                    :fields="policyForm.fields"
                    @fieldAdded="(field) => policyForm.fields.push(field)"
                    @fieldDeleted="handleFieldDelete"
                />
            </FormSection>

            <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />

            <FormSection>
                <template #header>Contacts</template>
                <template #description> Add contacts here </template>
                <contact-list
                    :contacts="policyForm.contacts"
                    class="mb-5"
                    removable
                    @contactClicked="handleContactClick"
                >
                    Contacts
                    <template #noContacts>
                        <div class="mb-5 text-yellow-vivid-600">
                            <exclamation-icon class="inline h-5 mr-2 w-5" />
                            Please add one or more contacts
                        </div>
                    </template>
                </contact-list>
                <SelectContact @selected="contactSelected" />
            </FormSection>

            <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />

            <div class="flex justify-between mt-5">
                <div>Problems?</div>
                <loading-button
                    class="btn btn-primary"
                    type="submit"
                    :loading="policyForm.processing"
                >
                    Create Policy
                </loading-button>
            </div>
        </div>
    </form>
</template>

<script>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/NewLayout';
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import { ExclamationIcon } from '@heroicons/vue/outline';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import LoadingButton from '@/Shared/LoadingButton';
import PolicyFieldsList from '@/Shared/Fields/PolicyFieldsList';
import DateRange from '@/Shared/DateRange';
import SelectContact from '@/Shared/Contact/SelectContact';
import ContactList from '@/Shared/Contact/ContactList';
import FormSection from '@/Shared/FormSection';

export default {
    components: {
        JetInput,
        JetLabel,
        JetInputError,
        LoadingButton,
        PolicyFieldsList,
        DateRange,
        SelectContact,
        ContactList,
        ExclamationIcon,
        FormSection
    },
    layout: AppLayout,
    props: { users: { type: Array, required: true } },
    setup() {
        const policyForm = useForm({
            number: null,
            contacts: [],
            period: {
                start: null,
                end: null
            },
            fields: [],
            agent_id: usePage().props.value.user.id
        });

        const templates = ref([
            {
                id: 1,
                name: 'none',
                label: 'None',
                fields: null
            },
            {
                id: 2,
                name: 'vehicle',
                label: 'Vehicle',
                fields: [
                    { id: 1, name: 'license', value: '' },
                    { id: 2, name: 'vin', value: '' }
                ]
            }
        ]);

        const selectedTemplate = ref(null);
        watch(selectedTemplate, (selectedTemplate) => {
            policyForm.fields = [];
            if (selectedTemplate) {
                policyForm.fields.push(...selectedTemplate);
                policyForm.fields.filter((field) => (field.protected = true));
            }
        });

        function store() {
            policyForm
                .transform((data) => ({
                    ...data,
                    period_start: data.period.start,
                    period_end: data.period.end
                }))
                .post(route('policies.store'));
        }

        function contactExists(contact) {
            return (
                _.findIndex(policyForm.contacts, (o) => {
                    return _.isMatch(o, contact);
                }) > -1
            );
        }

        function contactSelected(contact) {
            if (!contactExists(contact)) {
                policyForm.contacts.push(contact);
            }
        }

        function handleContactClick(contact) {
            _.pull(policyForm.contacts, contact);
        }

        function handleFieldDelete(field) {
            _.pull(policyForm.fields, field);
        }

        return {
            policyForm,
            templates,
            selectedTemplate,
            store,
            contactSelected,
            handleContactClick,
            handleFieldDelete
        };
    }
};
</script>
