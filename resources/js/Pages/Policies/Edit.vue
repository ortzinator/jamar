<template>
    <div>
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link
                class="text-indigo-400 hover:text-indigo-600"
                href="/"
            >
                Policies
            </inertia-link>
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            {{ policyForm.name }}
        </h1>
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
                v-if="policyForm.holders.length === 0"
                class="bg-red-200 flex items-center justify-between p-5 pl-8"
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
                    <date-picker
                        v-model="policyForm.created_at"
                        mode="dateTime"
                    >
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

                <holder-list
                    v-if="policyForm.holders.length > 0"
                    :holders="policyForm.holders"
                    class="mb-5"
                >
                    Policyholders
                </holder-list>

                <select-policyholder
                    @selected="holderSelected"
                ></select-policyholder>
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
import { reactive, ref, watch } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/NewLayout";
import { ExclamationIcon } from "@heroicons/vue/outline";
import { TrashIcon } from "@heroicons/vue/outline";
import PolicyFieldsList from "@/Shared/Fields/PolicyFieldsList";
import HolderList from "@/Shared/Policyholder/HolderList";
import SelectPolicyholder from "@/Shared/Policyholder/SelectPolicyholder";
import LoadingButton from "@/Shared/LoadingButton";
import DateRange from "@/Shared/DateRange";
import { DatePicker } from "v-calendar";

import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetInputError from "@/Jetstream/InputError";
import JetValidationErrors from "@/Jetstream/ValidationErrors";

export default {
    layout: AppLayout,
    components: {
        ExclamationIcon,
        TrashIcon,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        PolicyFieldsList,
        HolderList,
        LoadingButton,
        SelectPolicyholder,
        DateRange,
        DatePicker,
    },
    props: {
        errors: Object,
        policy: Object,
        fields: Array,
    },
    setup(props) {
        const policyForm = useForm({
            number: props.policy.number,
            holders: props.policy.holders,
            created_at: props.policy.created_at,
            range: {
                start: props.policy.period_start,
                end: props.policy.period_end,
            },
            fields: props.policy.fields,
        });

        const sending = ref(false);
        const fieldFormShown = ref(false);

        function updatePolicy() {
            policyForm.put(route("policies.update", props.policy.id));
        }

        function destroy() {
            //TODO check if holder is associated with a policy
            if (confirm("Are you sure you want to delete this policy?")) {
                policyForm.delete(route("policies.destroy", props.policy.id));
            }
        }

        function restore() {
            if (confirm("Are you sure you want to restore this policy?")) {
                policyForm.put(route("policies.restore", props.policy.id));
            }
        }

        function holderSelected(holder) {
            policyForm.holders.push(holder);
        }

        function formatDate(date) {
            return new Date(date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        }

        return {
            policyForm,
            sending,
            fieldFormShown,
            updatePolicy,
            destroy,
            restore,
            holderSelected,
            formatDate,
        };
    },
};
</script>
