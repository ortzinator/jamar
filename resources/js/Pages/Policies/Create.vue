<template>
    <div class="font-bold py-5">
        <InertiaHead title="Create Policy" />
        <h1>
            <InertiaLink
                class="
                    text-light-blue-vivid-400
                    hover:text-light-blue-vivid-600
                "
                :href="route('policies')"
            >
                Policies
            </InertiaLink>
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
                        <JetLabel for="template" value="Policy Type" />
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
                        <JetLabel for="agent" value="Assigned Agent" />
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
                        <JetLabel for="number" value="Policy Number" />
                        <JetInput
                            id="number"
                            v-model="policyForm.number"
                            type="text"
                            class="block w-full mt-1"
                        />
                        <JetInput-error :message="policyForm.errors.number" />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <JetLabel>Period of Insurance</JetLabel>
                        <div
                            :class="{
                                formError:
                                    policyForm.errors.period_start ||
                                    policyForm.errors.period_end
                            }"
                            class="mt-1"
                        >
                            <DateRange v-model="policyForm.period" />
                        </div>
                        <JetInput-error
                            :message="policyForm.errors.period_start"
                        />
                        <JetInput-error
                            :message="policyForm.errors.period_end"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <CurrencyTextBox
                            id="premium"
                            v-model="policyForm.premium"
                            class="border border-cool-grey-200 mr-5 rounded mt-1"
                        />
                        <JetInput-error :message="policyForm.errors.premium" />
                    </div>
                </div>
            </FormSection>

            <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />

            <FormSection>
                <template #header>Policy Fields</template>
                <template #description> Description of this section </template>

                <PolicyFieldsList
                    class="mb-5"
                    :fields="policyForm.fields"
                    @fieldAdded="(field) => policyForm.fields.push(field)"
                    @fieldDeleted="handleFieldDelete"
                />
            </FormSection>

            <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />

            <FormSection>
                <template #header>Policyholders</template>
                <template #description> Add policyholders here </template>
                <ContactList
                    :contacts="policyForm.contacts"
                    class="mb-5"
                    removable
                    @contactClicked="handleContactClick"
                >
                    <template #noContacts>
                        <div class="mb-5 text-yellow-vivid-600">
                            <ExclamationIcon class="inline h-5 mr-2 w-5" />
                            Please add one or more policyholders
                        </div>
                    </template>
                </ContactList>
                <SelectContact @selected="contactSelected" />
            </FormSection>

            <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />

            <div class="flex justify-between mt-5">
                <div>Problems?</div>
                <LoadingButton
                    class="btn btn-primary"
                    type="submit"
                    :loading="policyForm.processing"
                >
                    Create Policy
                </LoadingButton>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { ExclamationIcon } from '@heroicons/vue/outline';
import AppLayout from '@/Layouts/NewLayout';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import LoadingButton from '@/Shared/LoadingButton';
import PolicyFieldsList from '@/Shared/Fields/PolicyFieldsList';
import DateRange from '@/Shared/DateRange';
import SelectContact from '@/Shared/Contact/SelectContact';
import ContactList from '@/Shared/Contact/ContactList';
import FormSection from '@/Shared/FormSection';
import CurrencyTextBox from '@/Shared/CurrencyTextBox';

defineOptions({
    layout: AppLayout,
});

const props = defineProps({ users: { type: Array, required: true } });
const policyForm = useForm({
    number: null,
    contacts: [],
    period: {
        start: null,
        end: null,
    },
    fields: [],
    agent_id: props.value.user.id,
    premium: {
        amount: '0',
        subunit: 2,
        currency: 'PHP',
    },
});

const templates = ref([
    {
        id: 1,
        name: 'none',
        label: 'None',
        fields: null,
    },
    {
        id: 2,
        name: 'vehicle',
        label: 'Vehicle',
        fields: [
            { id: 1, name: 'license', value: '' },
            { id: 2, name: 'vin', value: '' },
        ],
    },
]);

const selectedTemplate = ref(null);
watch(selectedTemplate, (selectedTemplate) => {
    policyForm.fields = [];
    if (selectedTemplate) {
        policyForm.fields.push(...selectedTemplate);
        policyForm.fields.map((field) => {
            const item = { ...field };
            item.protected = true;
            return item;
        });
    }
});

function store() {
    policyForm
        .transform((data) => ({
            ...data,
            period_start: data.period.start,
            period_end: data.period.end,
            premium: data.premium.amount,
        }))
        .post(route('policies.store'));
}

function contactExists(contact) {
    return (
        _.findIndex(policyForm.contacts, (o) => _.isMatch(o, contact)) > -1
    );
}

function contactSelected(contact) {
    if (!contactExists(contact)) {
        policyForm.contacts.push(contact);
    }
}

function handleContactClick(contact) {
    window.open(contact.link, '_blank').focus();
}

function handleFieldDelete(field) {
    _.pull(policyForm.fields, field);
}
</script>
