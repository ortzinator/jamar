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
        <div class="max-w-6xl overflow-hidden bg-white rounded shadow">
            <div class="p-5">
                <div class="mb-5">
                    <InputLabel for="name" value="Name" />
                    <TextInput id="name" v-model="form.name" type="text" class="block w-full" />
                    <InputError :message="form.errors.name" />
                </div>
                <div class="mb-5">
                    <InputLabel for="address" value="Address" />
                    <textarea
                        id="address"
                        v-model="form.address"
                        name="address"
                        class="block w-full"
                        cols="30"
                        rows="10"
                    />
                    <InputError :message="form.errors.address" />
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
import { useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
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
