<template>
    <button :disabled="loading" class="flex items-center disabled:opacity-50">
        <Icon v-if="delayedLoading" name="spinner" class="w-5 h-5 mr-2 fill-current animate-spin" />
        <slot></slot>
    </button>
</template>

<script setup>
import { ref, watch } from 'vue';
import Icon from '@/Shared/Icon.vue';

const props = defineProps({ loading: { type: Boolean, required: true } });

const delayedLoading = ref(false);
const delayId = ref();
const loading = ref(props.loading);

watch(loading, (val) => {
    // Only show the loading spinner icon if the request has taken longer than 100ms
    if (val === false) {
        // If no longer loading, disable spinner immediately
        delayedLoading.value = false;
        clearTimeout(delayId.value);
    } else {
        clearTimeout(delayId.value);
        delayId.value = setTimeout(() => {
            delayedLoading.value = true;
        }, 100);
    }
});
</script>
