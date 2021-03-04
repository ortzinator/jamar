<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link class="text-indigo-400 hover:text-indigo-600" href="/"
                >Policies</inertia-link
            >
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            {{ policyForm.name }}
        </h1>
        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div class="p-5">
                <div
                    v-if="policy.deleted_at"
                    class="bg-yellow-200 flex items-center justify-between pl-8"
                >
                    <div class="flex">
                        <icon name="trash" class="h-5 mr-2 w-5" />
                        This policy is deleted
                    </div>
                    <button class="btn hover:underline" @click="restore">
                        Restore
                    </button>
                </div>

                <jet-label for="number" value="Policy Number" />
                <jet-input
                    v-model="policyForm.number"
                    id="name"
                    type="text"
                    class="block w-full"
                />
                <jet-input-error :message="policyForm.errors.number" />

                <policy-fields-list
                    :fields="fieldsData"
                    :policy="policy"
                ></policy-fields-list>
            </div>
            <div
                class="px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"
            >
                <button
                    v-if="!policy.deleted_at"
                    class="text-red-600 hover:underline"
                    tabindex="-1"
                    type="button"
                    @click="destroy"
                >
                    Delete policy
                </button>
                <loading-button
                    class="btn btn-primary ml-auto"
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
import { useForm } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/AppLayout";
import Icon from "@/Shared/Icon";
import PolicyFieldsList from "@/Shared/Fields/PolicyFieldsList";
import LoadingButton from "@/Shared/LoadingButton";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";

export default {
    layout: AppLayout,
    components: {
        Icon,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        PolicyFieldsList,
        LoadingButton,
    },
    props: {
        errors: Object,
        policy: Object,
        fields: Array,
    },
    remember: "policyForm",
    setup(props) {
        const policyForm = useForm({
            number: props.policy.number,
        });

        return { policyForm };
    },
    data() {
        return {
            sending: false,
            fieldFormShown: false,
            fieldsData: this.fields,
        };
    },
    watch: {
        fields() {
            this.fieldsData = this.fields;
        },
    },
    methods: {
        updatePolicy() {
            this.policyForm.put(this.route("policies.update", this.policy.id));
        },
        destroy() {
            //TODO check if holder is associated with a policy
            if (confirm("Are you sure you want to delete this policy?")) {
                // this.policyForm.delete(this.route("policies.destroy", this.policy.id));
            }
        },
        restore() {
            if (confirm("Are you sure you want to restore this contact?")) {
                // this.policyForm.put(this.route("policies.restore", this.policy.id));
            }
        },
    },
};
</script>
