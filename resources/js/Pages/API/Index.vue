<template>
    <div class="font-bold py-5">
        <h1>API Tokens</h1>
    </div>

    <div>
        <api-token-manager
            :tokens="tokens"
            :available-permissions="availablePermissions"
            :default-permissions="defaultPermissions"
        />
    </div>
</template>

<script>
import ApiTokenManager from './ApiTokenManager';
import AppLayout from '@/Layouts/NewLayout';

export default {
    components: {
        ApiTokenManager,
    },
    layout: AppLayout,
    props: ['tokens', 'availablePermissions', 'defaultPermissions'],
};
</script>
