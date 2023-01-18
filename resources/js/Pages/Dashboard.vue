<template>
    <div class="py-5 font-bold">
        <InertiaHead title="Dashboard" />
        <h1>Dashboard</h1>
        <AlertWidget v-if="user.roles.length < 1">
            You have not been assigned any roles yet. Please contact your manager or administrator
        </AlertWidget>
    </div>

    <div
        class="grid grid-flow-row-dense grid-cols-1 gap-4 overflow-hidden lg:grid-cols-3 sm:rounded-lg"
    >
        <EndingSoonWidget class="p-4 bg-white rounded shadow-sm" />
        <TextWidget class="bg-white rounded shadow-sm lg:col-span-2">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TextWidget>
        <TextWidget class="bg-white rounded shadow-sm">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TextWidget>
        <TextWidget class="bg-white rounded shadow-sm">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TextWidget>
        <TextWidget class="bg-white rounded shadow-sm">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TextWidget>
        <TextWidget class="bg-white rounded shadow-sm">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TextWidget>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

import AppLayout from '@/Layouts/AppLayout.vue';
import EndingSoonWidget from '@/Widgets/EndingSoon.vue';
import TextWidget from '@/Widgets/Text.vue';
import AlertWidget from '@/Shared/Alert.vue';

defineOptions({
    layout: AppLayout,
});

const user = computed(() => usePage().props.user);
</script>
