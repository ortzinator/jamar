<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link
                class="text-indigo-400 hover:text-indigo-600"
                :href="route('policies')"
                >Policies</inertia-link
            >
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            New Policy
        </h1>
        <form @submit.prevent="store">
            <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
                <div class="p-5">
                    <div class="mb-5">
                        <jet-label
                            for="template"
                            value="Policy Type"
                        ></jet-label>
                        <select class="mr-5" v-model="selectedTemplate">
                            <option
                                v-bind:value="template.fields"
                                v-for="template in templates"
                                v-bind:key="template.id"
                            >
                                {{ template.label }}
                            </option>
                        </select>
                        <Popper
                            hover
                            arrow
                            class="inline-block"
                            placement="right"
                        >
                            <QuestionMarkCircleIcon class="text-blue-600 w-5">
                            </QuestionMarkCircleIcon>
                            <template #content>Help text</template>
                        </Popper>
                    </div>
                    <div class="mb-5">
                        <jet-label
                            for="number"
                            value="Policy Number"
                        ></jet-label>
                        <jet-input
                            v-model="policyForm.number"
                            id="number"
                            type="text"
                            class="block w-full"
                        />
                        <jet-input-error
                            :message="policyForm.errors.number"
                        ></jet-input-error>
                    </div>
                    <div class="mb-5">
                        <div class="text-gray-600 text-sm text-left">
                            Period of Insurance
                        </div>
                        <date-range v-model="policyForm.period" />
                    </div>
                    <div class="mb-5">
                        <policy-fields-list
                            :fields="policyForm.fields"
                            @fieldAdded="
                                (field) => policyForm.fields.push(field)
                            "
                            class="mb-5"
                        ></policy-fields-list>
                    </div>
                    <div class="mb-5">
                        <holder-list :holders="policyForm.holders" class="mb-5">
                            Policyholders
                            <template v-slot:noHolders>
                                <div class="mb-5 text-yellow-500">
                                    <exclamation-icon
                                        class="inline h-5 mr-2 w-5"
                                    />
                                    Please add one or more policyholders
                                </div>
                            </template>
                        </holder-list>
                        <select-policyholder @selected="holderSelected">
                        </select-policyholder>
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
                    <loading-button
                        class="btn btn-primary ml-auto"
                        type="submit"
                        :loading="policyForm.processing"
                    >
                        Create Policy
                    </loading-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/inertia-vue3";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";
import JetConfirmationModal from "@/Jetstream/ConfirmationModal";
import LoadingButton from "@/Shared/LoadingButton";
import PolicyFieldsList from "@/Shared/Fields/PolicyFieldsList";
import DateRange from "@/Shared/DateRange";
import SelectPolicyholder from "@/Shared/Policyholder/SelectPolicyholder";
import HolderList from "@/Shared/Policyholder/HolderList";
import { ExclamationIcon } from "@heroicons/vue/outline";
import { QuestionMarkCircleIcon } from "@heroicons/vue/outline";
import Popper from "vue3-popper";

export default {
    layout: AppLayout,
    components: {
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
    },
    setup(props) {
        const policyForm = useForm("policy", {
            number: null,
            holders: [],
            created_at: null,
            period: {
                start: null,
                end: null,
            },
            fields: [],
        });

        const templates = ref([
            {
                id: 1,
                name: "none",
                label: "None",
                fields: null,
            },
            {
                id: 2,
                name: "vehicle",
                label: "Vehicle",
                fields: [
                    { id: 1, name: "license", value: "" },
                    { id: 2, name: "vin", value: "" },
                ],
            },
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
                    period_end: data.period.end,
                }))
                .post(route("policies.store"));
        }

        function holderSelected(holder) {
            policyForm.holders.push(holder);
        }

        return {
            policyForm,
            templates,
            selectedTemplate,
            store,
            holderSelected,
        };
    },
};
</script>
