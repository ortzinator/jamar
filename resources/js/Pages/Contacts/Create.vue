<template>
    <div class="font-bold py-5">
        <InertiaHead title="Create Contact" />
        <h1>
            <InertiaLink
                class="
                    text-light-blue-vivid-400
                    hover:text-light-blue-vivid-600
                "
                href="/contacts"
            >
                Contacts
            </InertiaLink>
            <span class="text-light-blue-vivid-400 font-medium">&nbsp;/</span>
            New Contact
        </h1>
    </div>

    <form @submit.prevent="store">
        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div class="p-5">
                <div class="mb-5">
                    <JetLabel for="name" value="Name"></JetLabel>
                    <JetInput
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="block w-full"
                    />
                    <JetInput-error :message="form.errors.name" />
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
                    <JetInput-error :message="form.errors.address" />
                </div>
            </div>
            <div
                class="
                    px-8
                    py-4
                    bg-cool-grey-50
                    border-t border-cool-grey-100
                    flex
                    items-center
                "
            >
                <LoadingButton
                    class="btn btn-primary ml-auto"
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
import AppLayout from '@/Layouts/NewLayout';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import LoadingButton from '@/Shared/LoadingButton';

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
