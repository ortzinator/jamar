<template>
    <div class="font-bold py-5">
        <inertia-head title="Dashboard" />
        <h1>Dashboard</h1>
        <Alert v-if="user.roles.length < 1">
            You have not been assigned any roles yet. Please contact your
            manager or administrator
        </Alert>
    </div>

    <div
        class="
            grid grid-cols-1
            lg:grid-cols-3
            gap-4
            overflow-hidden
            sm:rounded-lg
            grid-flow-row-dense
        "
    >
        <EndingSoon class="shadow-sm bg-white p-4 rounded" />
        <Text class="bg-white lg:col-span-2 rounded shadow-sm">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text class="shadow-sm bg-white rounded">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text class="shadow-sm bg-white rounded">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text class="shadow-sm bg-white rounded">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text class="shadow-sm bg-white rounded">
            <template #header>Header</template>

            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
    </div>
</template>

<script>
import { computed } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';

import AppLayout from '@/Layouts/NewLayout';
import EndingSoon from '@/Widgets/EndingSoon';
import Text from '@/Widgets/Text';
import Alert from '@/Shared/Alert';

export default {
    layout: AppLayout,
    components: {
        AppLayout,
        EndingSoon,
        Text,
        Alert
    },
    setup() {
        const user = computed(() => usePage().props.value.user);
        return { user };
    }
};
</script>
