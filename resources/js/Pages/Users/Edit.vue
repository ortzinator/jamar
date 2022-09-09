<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Edit User" />
        <h1>
            <InertiaLink
                class="text-light-blue-vivid-400 hover:text-light-blue-vivid-600"
                href="/users"
            >
                Employees
            </InertiaLink>
            <span class="font-medium text-light-blue-vivid-400">&nbsp;/</span>
            {{ userForm.name }}
        </h1>
    </div>

    <div class="max-w-3xl overflow-hidden bg-white rounded shadow">
        <div
            v-if="editedUser.deleted_at"
            class="flex items-center justify-between p-5 pl-8 bg-yellow-200"
        >
            <div class="flex">
                <TrashIcon class="w-5 h-5 mr-2" />
                This user is deleted
            </div>
            <button class="btn hover:underline" @click="confirmingRestore = true">Restore</button>
        </div>

        <div class="p-8">
            <div class="mb-5">
                <JetLabel for="name" value="Name" />
                <JetInput id="name" v-model="userForm.name" type="text" class="block w-full" />
                <JetInputError :message="userForm.errors.name" />
            </div>
            <div class="mb-5">
                <JetLabel for="email" value="Email" />
                <JetInput id="email" v-model="userForm.email" type="text" class="block w-full" />
                <JetInputError :message="userForm.errors.email" />
            </div>
            <div class="mb-5">
                <JetLabel for="roles" value="Roles" />
                <RoleSelector v-model="userForm.roles" />
                <JetInputError :message="userForm.errors.roles" />
            </div>
        </div>
        <div class="flex items-center justify-between px-8 py-4 bg-cool-grey-50">
            <button
                v-if="!editedUser.deleted_at"
                class="text-red-vivid-600 hover:underline"
                tabindex="-1"
                type="button"
                @click="confirmingDelete = true"
            >
                Delete user
            </button>
            <div class="flex items-baseline">
                <div v-if="userForm.isDirty" class="mr-5 italic text-cool-grey-400">
                    Unsaved Changes
                </div>
                <LoadingButton
                    class="btn btn-primary"
                    type="submit"
                    :loading="userForm.processing"
                    @click="updateUser"
                >
                    Update user
                </LoadingButton>
            </div>
        </div>
    </div>

    <JetConfirmationModal :show="confirmingRestore" @close="confirmingRestore = false">
        <template #title> Restore User </template>

        <template #content> Are you sure you want to restore this user? </template>

        <template #footer>
            <button class="btn" @click="confirmingRestore = false">Cancel</button>

            <button class="ml-2 btn btn-danger" @click="restore">Restore</button>
        </template>
    </JetConfirmationModal>

    <JetConfirmationModal :show="confirmingDelete" @close="confirmingDelete = false">
        <template #title> Delete User </template>

        <template #content> Are you sure you want to delete this user? </template>

        <template #footer>
            <button class="btn" @click="confirmingDelete = false">Cancel</button>

            <button class="ml-2 btn btn-danger" @click="destroy">Delete User</button>
        </template>
    </JetConfirmationModal>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { TrashIcon } from '@heroicons/vue/outline';
import AppLayout from '@/Layouts/NewLayout.vue';

import LoadingButton from '@/Shared/LoadingButton.vue';
import RoleSelector from '@/Shared/RoleSelector.vue';

import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal.vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps({
    errors: { type: Object, required: true },
    editedUser: { type: Object, required: true },
    roles: { type: Array, required: true },
});

const userForm = useForm({
    name: props.editedUser.name,
    email: props.editedUser.email,
    roles: props.editedUser.roles,
});

const confirmingDelete = ref(false);
const confirmingRestore = ref(false);

function updateUser() {
    userForm
        .transform((data) => ({
            ...data,
            roles: data.roles.filter((role) => role.enabled),
        }))
        .put(route('users.update', props.editedUser.id));
}

function destroy() {
    userForm.delete(route('users.destroy', props.editedUser.id));
    confirmingDelete.value = false;
}

function restore() {
    userForm.put(route('users.restore', props.editedUser.id));
    confirmingRestore.value = false;
}
</script>
