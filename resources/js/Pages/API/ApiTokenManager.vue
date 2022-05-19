<template>
    <div>
        <!-- Generate API Token -->
        <JetFormSection @submitted="createApiToken">
            <template #title> Create API Token </template>

            <template #description>
                API tokens allow third-party services to authenticate with our application on your
                behalf.
            </template>

            <template #form>
                <!-- Token Name -->
                <div class="col-span-6 sm:col-span-4">
                    <JetLabel for="name" value="Name" />
                    <JetInput
                        id="name"
                        v-model="createApiTokenForm.name"
                        type="text"
                        class="block w-full mt-1"
                        autofocus
                    />
                    <JetInputError :message="createApiTokenForm.errors.name" class="mt-2" />
                </div>

                <!-- Token Permissions -->
                <div v-if="availablePermissions.length > 0" class="col-span-6">
                    <JetLabel for="permissions" value="Permissions" />

                    <div class="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
                        <div v-for="permission in availablePermissions" :key="permission">
                            <label class="flex items-center">
                                <JetCheckbox
                                    v-model:checked="createApiTokenForm.permissions"
                                    :value="permission"
                                />
                                <span class="ml-2 text-sm text-cool-grey-600">{{
                                    permission
                                }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </template>

            <template #actions>
                <JetActionMessage :on="createApiTokenForm.recentlySuccessful" class="mr-3">
                    Created.
                </JetActionMessage>

                <JetButton
                    :class="{ 'opacity-25': createApiTokenForm.processing }"
                    :disabled="createApiTokenForm.processing"
                >
                    Create
                </JetButton>
            </template>
        </JetFormSection>

        <div v-if="tokens.length > 0">
            <JetSectionBorder />

            <!-- Manage API Tokens -->
            <div class="mt-10 sm:mt-0">
                <JetActionSection>
                    <template #title> Manage API Tokens </template>

                    <template #description>
                        You may delete any of your existing tokens if they are no longer needed.
                    </template>

                    <!-- API Token List -->
                    <template #content>
                        <div class="space-y-6">
                            <div
                                v-for="token in tokens"
                                :key="token.id"
                                class="flex items-center justify-between"
                            >
                                <div>
                                    {{ token.name }}
                                </div>

                                <div class="flex items-center">
                                    <div
                                        v-if="token.last_used_ago"
                                        class="text-sm text-cool-grey-400"
                                    >
                                        Last used {{ token.last_used_ago }}
                                    </div>

                                    <button
                                        v-if="availablePermissions.length > 0"
                                        class="ml-6 text-sm underline cursor-pointer text-cool-grey-400"
                                        @click="manageApiTokenPermissions(token)"
                                    >
                                        Permissions
                                    </button>

                                    <button
                                        class="ml-6 text-sm cursor-pointer text-red-vivid-500"
                                        @click="confirmApiTokenDeletion(token)"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                </JetActionSection>
            </div>
        </div>

        <!-- Token Value Modal -->
        <JetDialogModal :show="displayingToken" @close="displayingToken = false">
            <template #title> API Token </template>

            <template #content>
                <div>
                    Please copy your new API token. For your security, it won't be shown again.
                </div>

                <div
                    v-if="$page.props.jetstream.flash.token"
                    class="px-4 py-2 mt-4 font-mono text-sm rounded bg-cool-grey-100 text-cool-grey-500"
                >
                    {{ $page.props.jetstream.flash.token }}
                </div>
            </template>

            <template #footer>
                <JetSecondaryButton @click="displayingToken = false"> Close </JetSecondaryButton>
            </template>
        </JetDialogModal>

        <!-- API Token Permissions Modal -->
        <JetDialogModal :show="managingPermissionsFor" @close="managingPermissionsFor = null">
            <template #title> API Token Permissions </template>

            <template #content>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div v-for="permission in availablePermissions" :key="permission">
                        <label class="flex items-center">
                            <JetCheckbox
                                v-model:checked="updateApiTokenForm.permissions"
                                :value="permission"
                            />
                            <span class="ml-2 text-sm text-cool-grey-600">{{ permission }}</span>
                        </label>
                    </div>
                </div>
            </template>

            <template #footer>
                <JetSecondaryButton @click="managingPermissionsFor = null">
                    Nevermind
                </JetSecondaryButton>

                <JetButton
                    class="ml-2"
                    :class="{ 'opacity-25': updateApiTokenForm.processing }"
                    :disabled="updateApiTokenForm.processing"
                    @click="updateApiToken"
                >
                    Save
                </JetButton>
            </template>
        </JetDialogModal>

        <!-- Delete Token Confirmation Modal -->
        <JetConfirmationModal :show="apiTokenBeingDeleted" @close="apiTokenBeingDeleted = null">
            <template #title> Delete API Token </template>

            <template #content> Are you sure you would like to delete this API token? </template>

            <template #footer>
                <JetSecondaryButton @click="apiTokenBeingDeleted = null">
                    Nevermind
                </JetSecondaryButton>

                <JetDangerButton
                    class="ml-2"
                    :class="{ 'opacity-25': deleteApiTokenForm.processing }"
                    :disabled="deleteApiTokenForm.processing"
                    @click="deleteApiToken"
                >
                    Delete
                </JetDangerButton>
            </template>
        </JetConfirmationModal>
    </div>
</template>

<script>
import JetActionMessage from '@/Jetstream/ActionMessage';
import JetActionSection from '@/Jetstream/ActionSection';
import JetButton from '@/Jetstream/Button';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal';
import JetDangerButton from '@/Jetstream/DangerButton';
import JetDialogModal from '@/Jetstream/DialogModal';
import JetFormSection from '@/Jetstream/FormSection';
import JetInput from '@/Jetstream/Input';
import JetCheckbox from '@/Jetstream/Checkbox';
import JetInputError from '@/Jetstream/InputError';
import JetLabel from '@/Jetstream/Label';
import JetSecondaryButton from '@/Jetstream/SecondaryButton';
import JetSectionBorder from '@/Jetstream/SectionBorder';

export default {
    components: {
        JetActionMessage,
        JetActionSection,
        JetButton,
        JetConfirmationModal,
        JetDangerButton,
        JetDialogModal,
        JetFormSection,
        JetInput,
        JetCheckbox,
        JetInputError,
        JetLabel,
        JetSecondaryButton,
        JetSectionBorder,
    },

    props: ['tokens', 'availablePermissions', 'defaultPermissions'],

    data() {
        return {
            createApiTokenForm: this.$inertia.form({
                name: '',
                permissions: this.defaultPermissions,
            }),

            updateApiTokenForm: this.$inertia.form({
                permissions: [],
            }),

            deleteApiTokenForm: this.$inertia.form(),

            displayingToken: false,
            managingPermissionsFor: null,
            apiTokenBeingDeleted: null,
        };
    },

    methods: {
        createApiToken() {
            this.createApiTokenForm.post(route('api-tokens.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    this.displayingToken = true;
                    this.createApiTokenForm.reset();
                },
            });
        },

        manageApiTokenPermissions(token) {
            this.updateApiTokenForm.permissions = token.abilities;

            this.managingPermissionsFor = token;
        },

        updateApiToken() {
            this.updateApiTokenForm.put(route('api-tokens.update', this.managingPermissionsFor), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => (this.managingPermissionsFor = null),
            });
        },

        confirmApiTokenDeletion(token) {
            this.apiTokenBeingDeleted = token;
        },

        deleteApiToken() {
            this.deleteApiTokenForm.delete(route('api-tokens.destroy', this.apiTokenBeingDeleted), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => (this.apiTokenBeingDeleted = null),
            });
        },
    },
};
</script>
