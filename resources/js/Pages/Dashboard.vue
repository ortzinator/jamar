<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div
                class="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-4
                    overflow-hidden
                    sm:rounded-lg
                    grid-flow-row-dense
                "
            >
                <EndingSoon class="border bg-white p-4" />
                <Text class="border bg-white md:col-span-2">
                    <template #header>Header</template>

                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Sed
                    porttitor lectus nibh. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
                <Text class="border bg-white">
                    <template #header>Header</template>

                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Sed
                    porttitor lectus nibh. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
                <Text class="border bg-white">
                    <template #header>Header</template>

                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Sed
                    porttitor lectus nibh. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
                <Text class="border bg-white">
                    <template #header>Header</template>

                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Sed
                    porttitor lectus nibh. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
                <Text class="border bg-white">
                    <template #header>Header</template>

                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Sed
                    porttitor lectus nibh. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import EndingSoon from "@/Widgets/EndingSoon";
import Text from "@/Widgets/Text";

export default {
    components: {
        AppLayout,
        EndingSoon,
        Text,
    },
};
</script>
