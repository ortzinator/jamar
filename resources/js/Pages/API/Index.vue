<template>
    <div class="py-5 font-bold">
        <h1>API Tokens</h1>
    </div>

    <div>
        <ApiTokenManager
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
