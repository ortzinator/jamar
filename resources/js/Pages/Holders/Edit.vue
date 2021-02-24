<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link
                class="text-indigo-400 hover:text-indigo-600"
                :href="route('holders')"
                >Holders</inertia-link
            >
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            {{ form.name }}
        </h1>
        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div
                v-if="holder.deleted_at"
                class="bg-yellow-200 flex items-center justify-between p-5 pl-8"
            >
                <div class="flex">
                    <icon name="trash" class="h-5 mr-2 w-5" />
                    This policyholder is deleted
                </div>
                <button class="btn hover:underline" @click="restore">
                    Restore
                </button>
            </div>
            <form @submit.prevent="updateHolder">
                <div class="p-8 -mr-6 -mb-8">
                    <div class="mr-5 mb-5">
                        <jet-label for="name" value="Name"></jet-label>
                        <jet-input
                            v-model="form.name"
                            id="name"
                            type="text"
                            class="block w-full"
                        />
                        <jet-input-error
                            :message="form.errors.name"
                        ></jet-input-error>
                    </div>
                    <div class="mr-5 mb-5">
                        <jet-label for="address" value="Address"></jet-label>
                        <!-- <textarea
                            v-model="form.address"
                            id="address"
                            type="text"
                            class="block w-full"
                        /> -->
                        <textarea
                            name="address"
                            id="address"
                            class="block w-full"
                            cols="30"
                            rows="10"
                            v-model="form.address"
                        ></textarea>
                        <jet-input-error
                            :message="form.errors.address"
                        ></jet-input-error>
                    </div>
                </div>
                <div
                    class="px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"
                >
                    <button
                        v-if="!holder.deleted_at"
                        class="text-red-600 hover:underline"
                        tabindex="-1"
                        type="button"
                        @click="destroy"
                    >
                        Delete holder
                    </button>
                    <button
                        :loading="sending"
                        class="btn btn-primary ml-auto"
                        type="submit"
                        :disabled="form.processing"
                    >
                        Update holder
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
        holder: Object,
    },
    remember: "form",
    setup(props) {
        const form = useForm({
            name: props.holder.name,
            address: props.holder.address,
        });

        return { form };
    },
    data() {
        return {
            sending: false,
        };
    },
    methods: {
        updateHolder() {
            this.form.put(this.route("holders.update", this.holder.id));
        },
        destroy() {
            //TODO check if holder is associated with a policy
            if (confirm("Are you sure you want to delete this policyholder?")) {
                this.form.delete(this.route("holders.destroy", this.holder.id));
            }
        },
        restore() {
            if (confirm("Are you sure you want to restore this contact?")) {
                this.form.put(this.route("holders.restore", this.holder.id));
            }
        },
    },
};
</script>
