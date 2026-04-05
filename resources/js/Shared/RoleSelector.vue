<template>
    <div v-for="role in value" :key="role">
        <Switch
            v-model="role.enabled"
            :class="role.enabled ? 'bg-light-blue-vivid-900' : 'bg-light-blue-vivid-700'"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
        >
            <span
                :class="role.enabled ? 'translate-x-6' : 'translate-x-1'"
                class="inline-block h-4 w-4 transform rounded-full bg-white"
            />
        </Switch>
        <span class="ml-4">{{ role.name }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { SelectorIcon } from '@heroicons/vue/outline';
import { Switch } from '@headlessui/vue';

const props = defineProps({ modelValue: { type: Array, required: true } });
const emit = defineEmits(['update:modelValue']);
const value = computed({
    get: () => props.modelValue,
    set: (val) => {
        emit('update:modelValue', val);
    },
});
</script>
