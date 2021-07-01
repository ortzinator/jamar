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
                            value="Policy Template"
                        ></jet-label>
                        <select v-model="policyForm.templateFields" class="">
                            <option
                                v-bind:value="template.fields"
                                v-for="template in templates"
                                v-bind:key="template.id"
                            >
                                {{ template.name }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <jet-label for="number" value="Number"></jet-label>
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
                        Fields
                        <policy-field
                            v-for="field in this.policyForm.templateFields"
                            :key="field.id"
                            :field="field"
                            class=""
                        ></policy-field>
                        <policy-fields-list
                            :fields="policyForm.templateFields"
                            :editable="false"
                            class="mb-5"
                        ></policy-fields-list>
                    </div>
                    <div class="mb-5">
                        <policy-fields-list
                            :fields="policyForm.fields"
                            @fieldAdded="handleNewField"
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
import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/inertia-vue3";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";
import JetConfirmationModal from "@/Jetstream/ConfirmationModal";
import LoadingButton from "@/Shared/LoadingButton";
import PolicyFieldsList from "@/Shared/Fields/PolicyFieldsList";

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
    },
    setup(props) {
        const policyForm = useForm({
            number: null,
            holders: null,
            created_at: null,
            templateFields: [],
            range: {
                start: null,
                end: null,
            },
            fields: [],
        });

        return { policyForm };
    },
    data() {
        return {
            templates: [
                {
                    id: 1,
                    name: "none",
                    fields: null,
                },
                {
                    id: 2,
                    name: "vehicle",
                    fields: [
                        { id: 1, name: "license", value: "" },
                        { id: 2, name: "vin", value: "" },
                    ],
                },
            ],
        };
    },
    methods: {
        store() {
            this.policyForm.post(this.route("policies.store"));
        },
        handleNewField(field) {
            this.policyForm.fields.push(field);
        },
    },
};
</script>
