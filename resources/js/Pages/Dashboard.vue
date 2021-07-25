<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="
                        grid grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-4
                        overflow-hidden
                        sm:rounded-lg
                    "
                >
                    <div class="relative border bg-white p-4">
                        <EndingSoon />
                    </div>
                    <div class="border bg-white">
                        <Text>
                            <template #header>Header</template>

                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam
                            vel, ullamcorper sit amet ligula. Sed porttitor
                            lectus nibh. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </Text>
                    </div>
                    <div class="prose border bg-white p-4">
                        <Text>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam
                            vel, ullamcorper sit amet ligula. Sed porttitor
                            lectus nibh. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </Text>
                    </div>
                    <div class="prose border bg-white p-4">
                        <Text>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam
                            vel, ullamcorper sit amet ligula. Sed porttitor
                            lectus nibh. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </Text>
                    </div>
                    <div class="prose border bg-white p-4">
                        <Text>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam
                            vel, ullamcorper sit amet ligula. Sed porttitor
                            lectus nibh. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </Text>
                    </div>
                    <div class="prose border bg-white p-4">
                        <Text>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam
                            vel, ullamcorper sit amet ligula. Sed porttitor
                            lectus nibh. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </Text>
                    </div>
                </div>
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
