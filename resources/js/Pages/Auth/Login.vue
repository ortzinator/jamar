<template>
    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo />
        </template>

        <JetValidationErrors class="mb-4" />

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <JetLabel for="email" value="Email" />
                <JetInput
                    id="email"
                    v-model="form.email"
                    name="email"
                    type="email"
                    class="block w-full mt-1"
                    autocomplete="username"
                    required
                    autofocus
                />
            </div>

            <div class="mt-4">
                <JetLabel for="password" value="Password" />
                <JetInput
                    id="password"
                    v-model="form.password"
                    name="password"
                    type="password"
                    class="block w-full mt-1"
                    required
                    autocomplete="current-password"
                />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <JetCheckbox v-model:checked="form.remember" name="remember" />
                    <span class="ml-2 text-sm text-cool-grey-600"> Remember me </span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <InertiaLink
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="text-sm underline text-cool-grey-600 hover:text-cool-grey-900"
                >
                    Forgot your password?
                </InertiaLink>

                <JetButton
                    class="ml-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard>
</template>

<script>
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo';
import JetButton from '@/Jetstream/Button';
import JetInput from '@/Jetstream/Input';
import JetCheckbox from '@/Jetstream/Checkbox';
import JetLabel from '@/Jetstream/Label';
import JetValidationErrors from '@/Jetstream/ValidationErrors';

export default {
    components: {
        JetAuthenticationCard,
        JetAuthenticationCardLogo,
        JetButton,
        JetInput,
        JetCheckbox,
        JetLabel,
        JetValidationErrors,
    },

    props: {
        canResetPassword: Boolean,
        status: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                email: '',
                password: '',
                remember: false,
            }),
        };
    },

    methods: {
        submit() {
            this.form
                .transform((data) => ({
                    ...data,
                    remember: this.form.remember ? 'on' : '',
                }))
                .post(this.route('login'), {
                    onFinish: () => this.form.reset('password'),
                });
        },
    },
};
</script>
