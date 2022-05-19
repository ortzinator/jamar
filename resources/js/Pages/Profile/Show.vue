<template>
    <div class="py-5 font-bold">
        <h1 class="text-xl font-semibold leading-tight text-cool-grey-800">Profile</h1>
    </div>

    <div>
        <div v-if="$page.props.jetstream.canUpdateProfileInformation">
            <UpdateProfileInformationForm :user="$page.props.user" />

            <JetSectionBorder />
        </div>

        <div v-if="$page.props.jetstream.canUpdatePassword">
            <UpdatePasswordForm class="mt-10 sm:mt-0" />

            <JetSectionBorder />
        </div>

        <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
            <TwoFactorAuthenticationForm class="mt-10 sm:mt-0" />

            <JetSectionBorder />
        </div>

        <LogoutOtherBrowserSessionsForm :sessions="sessions" class="mt-10 sm:mt-0" />

        <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
            <JetSectionBorder />

            <DeleteUserForm class="mt-10 sm:mt-0" />
        </template>
    </div>
</template>

<script>
import AppLayout from '@/Layouts/NewLayout';
import DeleteUserForm from './DeleteUserForm';
import JetSectionBorder from '@/Jetstream/SectionBorder';
import LogoutOtherBrowserSessionsForm from './LogoutOtherBrowserSessionsForm';
import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm';
import UpdatePasswordForm from './UpdatePasswordForm';
import UpdateProfileInformationForm from './UpdateProfileInformationForm';

export default {
    components: {
        DeleteUserForm,
        JetSectionBorder,
        LogoutOtherBrowserSessionsForm,
        TwoFactorAuthenticationForm,
        UpdatePasswordForm,
        UpdateProfileInformationForm,
    },
    layout: AppLayout,
    props: { sessions: { type: Array, required: true } },
};
</script>
