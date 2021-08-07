<template>
    <app-layout>
        <template #header>
            <h2>API Tokens</h2>
        </template>

        <div>
            <api-token-manager
                :tokens="tokens"
                :available-permissions="availablePermissions"
                :default-permissions="defaultPermissions"
            />
        </div>
    </app-layout>
</template>

<script>
import ApiTokenManager from "./ApiTokenManager";
import AppLayout from "@/Layouts/NewLayout";

export default {
    props: ["tokens", "availablePermissions", "defaultPermissions"],

    components: {
        ApiTokenManager,
        AppLayout,
    },
};
</script>
