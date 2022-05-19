<template>
    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-cool-grey-600">
            Thanks for signing up! Before getting started, could you verify your email address by
            clicking on the link we just emailed to you? If you didn't receive the email, we will
            gladly send you another.
        </div>

        <div v-if="verificationLinkSent" class="mb-4 text-sm font-medium text-green-600">
            A new verification link has been sent to the email address you provided during
            registration.
        </div>

        <form @submit.prevent="submit">
            <div class="flex items-center justify-between mt-4">
                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Resend Verification Email
                </JetButton>

                <InertiaLink
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="text-sm underline text-cool-grey-600 hover:text-cool-grey-900"
                >
                    Log Out
                </InertiaLink>
            </div>
        </form>
    </JetAuthenticationCard>
</template>

<script>
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo';
import JetButton from '@/Jetstream/Button';

export default {
    components: {
        JetAuthenticationCard,
        JetAuthenticationCardLogo,
        JetButton,
    },

    props: {
        status: { type: String, required: true },
    },

    data() {
        return {
            form: this.$inertia.form(),
        };
    },

    computed: {
        verificationLinkSent() {
            return this.status === 'verification-link-sent';
        },
    },

    methods: {
        submit() {
            this.form.post(this.route('verification.send'));
        },
    },
};
</script>
