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
                        <select class="" v-model="selectedTemplate">
                            <option
                                v-bind:value="template.fields"
                                v-for="template in templates"
                                v-bind:key="template.id"
                            >
                                {{ template.label }}
                            </option>
                        </select>
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
import { reactive, ref } from "vue";
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
    },
    setup(props) {
        const policyForm = useForm("policy", {
            number: null,
            holders: null,
            created_at: null,
            period: {
                start: null,
                end: null,
            },
            fields: [],
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

        return { policyForm, store };
    },
    data() {
        return {
            templates: [
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
            ],
            selectedTemplate: null,
        };
    },
    watch: {
        selectedTemplate() {
            this.policyForm.fields = [];
            if (this.selectedTemplate) {
                this.policyForm.fields.push(...this.selectedTemplate);
                this.policyForm.fields.filter(
                    (field) => (field.protected = true)
                );
            }
        },
    },
};
</script>
