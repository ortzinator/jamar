<template>
    <JetActionSection>
        <template #title> Two Factor Authentication </template>

        <template #description>
            Add additional security to your account using two factor authentication.
        </template>

        <template #content>
            <h3 v-if="twoFactorEnabled" class="text-lg font-medium text-cool-grey-900">
                You have enabled two factor authentication.
            </h3>

            <h3 v-else class="text-lg font-medium text-cool-grey-900">
                You have not enabled two factor authentication.
            </h3>

            <div class="max-w-xl mt-3 text-sm text-cool-grey-600">
                <p>
                    When two factor authentication is enabled, you will be prompted for a secure,
                    random token during authentication. You may retrieve this token from your
                    phone's Google Authenticator application.
                </p>
            </div>

            <div v-if="twoFactorEnabled">
                <div v-if="qrCode">
                    <div class="max-w-xl mt-4 text-sm text-cool-grey-600">
                        <p class="font-semibold">
                            Two factor authentication is now enabled. Scan the following QR code
                            using your phone's authenticator application.
                        </p>
                    </div>

                    <div class="mt-4 dark:p-4 dark:w-56 dark:bg-white" v-html="qrCode"></div>
                </div>

                <div v-if="recoveryCodes.length > 0">
                    <div class="max-w-xl mt-4 text-sm text-cool-grey-600">
                        <p class="font-semibold">
                            Store these recovery codes in a secure password manager. They can be
                            used to recover access to your account if your two factor authentication
                            device is lost.
                        </p>
                    </div>

                    <div
                        class="grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm rounded-lg bg-cool-grey-100"
                    >
                        <div v-for="code in recoveryCodes" :key="code">
                            {{ code }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div v-if="!twoFactorEnabled">
                    <JetConfirmsPassword @confirmed="enableTwoFactorAuthentication">
                        <JetButton
                            type="button"
                            :class="{ 'opacity-25': enabling }"
                            :disabled="enabling"
                        >
                            Enable
                        </JetButton>
                    </JetConfirmsPassword>
                </div>

                <div v-else>
                    <JetConfirmsPassword @confirmed="regenerateRecoveryCodes">
                        <JetSecondaryButton v-if="recoveryCodes.length > 0" class="mr-3">
                            Regenerate Recovery Codes
                        </JetSecondaryButton>
                    </JetConfirmsPassword>

                    <JetConfirmsPassword @confirmed="showRecoveryCodes">
                        <JetSecondaryButton v-if="recoveryCodes.length === 0" class="mr-3">
                            Show Recovery Codes
                        </JetSecondaryButton>
                    </JetConfirmsPassword>

                    <JetConfirmsPassword @confirmed="disableTwoFactorAuthentication">
                        <JetDangerButton :class="{ 'opacity-25': disabling }" :disabled="disabling">
                            Disable
                        </JetDangerButton>
                    </JetConfirmsPassword>
                </div>
            </div>
        </template>
    </JetActionSection>
</template>

<script>
import JetActionSection from '@/Jetstream/ActionSection';
import JetButton from '@/Jetstream/Button';
import JetConfirmsPassword from '@/Jetstream/ConfirmsPassword';
import JetDangerButton from '@/Jetstream/DangerButton';
import JetSecondaryButton from '@/Jetstream/SecondaryButton';

export default {
    components: {
        JetActionSection,
        JetButton,
        JetConfirmsPassword,
        JetDangerButton,
        JetSecondaryButton,
    },

    data() {
        return {
            enabling: false,
            disabling: false,

            qrCode: null,
            recoveryCodes: [],
        };
    },

    computed: {
        twoFactorEnabled() {
            return !this.enabling && this.$page.props.user.two_factor_enabled;
        },
    },

    methods: {
        enableTwoFactorAuthentication() {
            this.enabling = true;

            this.$inertia.post(
                '/user/two-factor-authentication',
                {},
                {
                    preserveScroll: true,
                    onSuccess: () => Promise.all([this.showQrCode(), this.showRecoveryCodes()]),
                    onFinish: () => (this.enabling = false),
                }
            );
        },

        showQrCode() {
            return axios.get('/user/two-factor-qr-code').then((response) => {
                this.qrCode = response.data.svg;
            });
        },

        showRecoveryCodes() {
            return axios.get('/user/two-factor-recovery-codes').then((response) => {
                this.recoveryCodes = response.data;
            });
        },

        regenerateRecoveryCodes() {
            axios.post('/user/two-factor-recovery-codes').then(() => {
                this.showRecoveryCodes();
            });
        },

        disableTwoFactorAuthentication() {
            this.disabling = true;

            this.$inertia.delete('/user/two-factor-authentication', {
                preserveScroll: true,
                onSuccess: () => (this.disabling = false),
            });
        },
    },
};
</script>
