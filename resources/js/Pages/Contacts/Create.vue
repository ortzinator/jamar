<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Create Contact" />
        <h1>
            <InertiaLink
                class="text-light-blue-vivid-400 hover:text-light-blue-vivid-600"
                href="/contacts"
            >
                Contacts
            </InertiaLink>
            <span class="font-medium text-light-blue-vivid-400">&nbsp;/</span>
            New Contact
        </h1>
    </div>

    <form @submit.prevent="store">
        <div class="max-w-3xl overflow-hidden bg-white rounded shadow">
            <div class="p-5">
                <div class="mb-5">
                    <JetLabel for="name" value="Name"></JetLabel>
                    <JetInput id="name" v-model="form.name" type="text" class="block w-full" />
                    <JetInputError :message="form.errors.name" />
                </div>
                <div class="mb-5">
                    <JetLabel for="address" value="Address"></JetLabel>
                    <textarea
                        id="address"
                        v-model="form.address"
                        name="address"
                        class="block w-full"
                        cols="30"
                        rows="10"
                    />
                    <JetInputError :message="form.errors.address" />
                </div>
            </div>
            <div class="flex items-center px-8 py-4 border-t bg-cool-grey-50 border-cool-grey-100">
                <LoadingButton
                    class="ml-auto btn btn-primary"
                    type="submit"
                    :loading="form.processing"
                >
                    Create contact
                </LoadingButton>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/NewLayout.vue';

import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';

defineOptions({
    layout: AppLayout,
});

const form = useForm({
    name: null,
    address: null,
});

function store() {
    this.form.post(this.route('contacts.store'));
}
</script>
