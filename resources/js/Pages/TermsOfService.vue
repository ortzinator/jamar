<template>
    <div class="font-sans antialiased text-cool-grey-900">
        <div class="pt-4 bg-cool-grey-100">
            <div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0">
                <div>
                    <JetAuthenticationCardLogo />
                </div>

                <div
                    class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg"
                    v-html="terms"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo';

export default {
    components: {
        JetAuthenticationCardLogo,
    },
    props: ['terms'],
};
</script>
