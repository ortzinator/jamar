<template>
    <app-layout>
        <template #header>
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
        </template>

        <form @submit.prevent="store">
            <div class="">
                <FormSection>
                    <template #header>Basics</template>
                    <template #description>
                        Description of this section
                    </template>
                    <jet-label for="template" value="Policy Type"></jet-label>
                    <div class="flex items-center">
                        <select
                            class="border border-cool-grey-200 mr-5 rounded"
                            v-model="selectedTemplate"
                        >
                            <option
                                v-bind:value="template.fields"
                                v-for="template in templates"
                                v-bind:key="template.id"
                            >
                                {{ template.label }}
                            </option>
                        </select>
                        <Popper hover arrow placement="right">
                            <QuestionMarkCircleIcon
                                class="text-light-blue-vivid-600 w-5 h-5"
                            />
                            <template #content>
                                <div
                                    class="bg-white px-5 py-3 rounded shadow-xl"
                                >
                                    Help text
                                </div>
                            </template>
                        </Popper>
                    </div>
                    <jet-label for="agent" value="Assigned Agent"></jet-label>
                    <select
                        class="border border-cool-grey-200 mr-5 rounded"
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
                    <jet-label for="number" value="Policy Number" />
                    <jet-input
                        v-model="policyForm.number"
                        id="number"
                        type="text"
                        class="block w-full"
                    />
                    <jet-input-error :message="policyForm.errors.number" />
                    <div class="text-gray-600 text-sm text-left">
                        Period of Insurance
                    </div>
                    <date-range v-model="policyForm.period" />
                </FormSection>
                <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />
                <FormSection>
                    <template #header>Policy Fields</template>
                    <template #description>
                        Description of this section
                    </template>

                    <policy-fields-list
                        :fields="policyForm.fields"
                        @fieldAdded="(field) => policyForm.fields.push(field)"
                        class="mb-5"
                    ></policy-fields-list>
                </FormSection>
                <hr class="bg-cool-grey-100 border-0 h-px text-cool-grey-500" />
                <FormSection>
                    <template #header>Policyholders</template>
                    <template #description> Add policyholders here </template>
                    <holder-list
                        :holders="policyForm.holders"
                        class="mb-5"
                        @holderClicked="handleHolderClick"
                    >
                        Policyholders
                        <template v-slot:noHolders>
                            <div class="mb-5 text-yellow-vivid-600">
                                <exclamation-icon class="inline h-5 mr-2 w-5" />
                                Please add one or more policyholders
                            </div>
                        </template>
                    </holder-list>
                    <SelectPolicyholder @selected="holderSelected" />
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
    </app-layout>
</template>

<script>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/NewLayout';
import { useForm } from '@inertiajs/inertia-vue3';
import { ExclamationIcon } from '@heroicons/vue/outline';
import { QuestionMarkCircleIcon } from '@heroicons/vue/outline';
import Popper from 'vue3-popper';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import JetValidationErrors from '@/Jetstream/ValidationErrors';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal';
import LoadingButton from '@/Shared/LoadingButton';
import PolicyFieldsList from '@/Shared/Fields/PolicyFieldsList';
import DateRange from '@/Shared/DateRange';
import SelectPolicyholder from '@/Shared/Policyholder/SelectPolicyholder';
import HolderList from '@/Shared/Policyholder/HolderList';
import FormSection from '@/Shared/FormSection';

export default {
    props: ['users'],
    components: {
        AppLayout,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        JetConfirmationModal,
        LoadingButton,
        PolicyFieldsList,
        DateRange,
        SelectPolicyholder,
        HolderList,
        ExclamationIcon,
        QuestionMarkCircleIcon,
        Popper,
        FormSection
    },
    setup(props, context) {
        const policyForm = useForm('policy', {
            number: null,
            holders: [],
            created_at: null,
            period: {
                start: null,
                end: null
            },
            fields: [],
            agent_id: context.attrs.user.id
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

        function holderExists(holder) {
            return (
                _.findIndex(policyForm.holders, (o) => {
                    return _.isMatch(o, holder);
                }) > -1
            );
        }

        function holderSelected(holder) {
            if (!holderExists(holder)) {
                policyForm.holders.push(holder);
            }
        }

        function handleHolderClick(holder) {
            _.pull(policyForm.holders, holder);
        }

        return {
            policyForm,
            templates,
            selectedTemplate,
            store,
            holderSelected,
            handleHolderClick
        };
    }
};
</script>
