<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link class="text-indigo-400 hover:text-indigo-600"
                >Policies</inertia-link
            >
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            {{ policyForm.name }}
        </h1>
        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div
                v-if="policy.deleted_at"
                class="bg-yellow-200 flex items-center justify-between p-5 pl-8"
            >
                <div class="flex">
                    <icon name="trash" class="h-5 mr-2 w-5" />
                    This policy is deleted
                </div>
                <button class="btn hover:underline" @click="restore">
                    Restore
                </button>
            </div>
            <form @submit.prevent="updatePolicy">
                <div class="p-8 -mr-6 -mb-8">
                    <div class="mr-5 mb-5">
                        <jet-label for="number" value="Policy Number" />
                        <jet-input
                            v-model="policyForm.number"
                            id="name"
                            type="text"
                            class="block w-full"
                        />
                        <jet-input-error
                            :message="policyForm.errors.number"
                        ></jet-input-error>
                    </div>
                    <div v-if="policy.fields.length === 0">No fields found</div>
                    <div v-else class="mr-5 mb-5">
                        <div>Custom Fields</div>
                        <div
                            v-for="field in policy.fields"
                            :key="field.id"
                            class="flex space-x-6"
                        >
                            <div
                                v-text="field.name"
                                class="border border-gray-300 px-4 py-2 rounded shadow-sm"
                            ></div>
                            <div
                                v-text="field.value"
                                class="border border-gray-300 px-4 py-2 rounded shadow-sm"
                            ></div>
                        </div>
                    </div>
                    <div v-if="fieldFormShown" class="flex space-x-6">
                        <div class="flex-auto">
                            <jet-label for="number" value="Field Name" />
                            <jet-input
                                v-model="newFieldForm.name"
                                id="name"
                                type="text"
                                class="w-full"
                            />
                        </div>
                        <div class="flex-auto">
                            <jet-label for="number" value="Field Value" />
                            <jet-input
                                v-model="newFieldForm.value"
                                id="value"
                                type="text"
                                class="w-full"
                            />
                        </div>
                        <button
                            class="btn mt-4"
                            @click="
                                this.newFieldForm.post(
                                    route('policyfield.store')
                                )
                            "
                        >
                            Add Field
                        </button>
                    </div>
                    <div>
                        <button @click="fieldFormShown = true">+ Field</button>
                    </div>
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
                    <button
                        :loading="sending"
                        class="btn btn-primary ml-auto"
                        type="submit"
                        :disabled="policyForm.processing"
                    >
                        Update policy
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/AppLayout";
import Icon from "@/Shared/Icon";
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
    },
    props: {
        errors: Object,
        policy: Object,
    },
    remember: "policyForm",
    setup(props) {
        const policyForm = useForm({
            number: props.policy.number,
        });

        const newFieldForm = useForm({
            name: "",
            value: "",
            policy_id: props.policy.id,
        });

        return { policyForm, newFieldForm };
    },
    data() {
        return {
            sending: false,
            fieldFormShown: false,
        };
    },
    methods: {
        updatePolicy() {
            // this.policyForm.put(this.route("policies.update", this.policy.id));
        },
        destroy() {
            //TODO check if holder is associated with a policy
            if (confirm("Are you sure you want to delete this policyholder?")) {
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
