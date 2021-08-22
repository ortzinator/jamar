<template>
    <app-layout>
        <template #header>
            <h1>Dashboard</h1>
        </template>

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
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus
                nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text class="shadow-sm bg-white rounded">
                <template #header>Header</template>

                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus
                nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text class="shadow-sm bg-white rounded">
                <template #header>Header</template>

                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus
                nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text class="shadow-sm bg-white rounded">
                <template #header>Header</template>

                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus
                nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text class="shadow-sm bg-white rounded">
                <template #header>Header</template>

                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus
                nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/NewLayout';
import EndingSoon from '@/Widgets/EndingSoon';
import Text from '@/Widgets/Text';

export default {
    components: {
        AppLayout,
        EndingSoon,
        Text
    }
};
</script>
