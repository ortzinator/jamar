<template>
    <div class="bottom-0 fixed w-full z-50">
        <div
            :class="{
                'bg-light-blue-vivid-500': style == 'success',
                'bg-red-vivid-700': style == 'danger',
            }"
            class="md:px-20 mx-auto py-2 px-3 sm:px-6"
            v-if="show && message"
        >
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center min-w-0">
                    <span
                        class="flex p-2 rounded-lg"
                        :class="{
                            'bg-light-blue-vivid-600': style == 'success',
                            'bg-red-vivid-600': style == 'danger',
                        }"
                    >
                        <CheckCircleIcon
                            v-if="style == 'success'"
                            class="h-5 w-5 text-white"
                        />

                        <ExclamationIcon
                            v-if="style == 'danger'"
                            class="w-5 h-5 text-white"
                        />
                    </span>

                    <p class="ml-3 font-medium text-sm text-white truncate">
                        {{ message }}
                    </p>
                </div>

                <div class="flex-shrink-0 sm:ml-3">
                    <button
                        type="button"
                        class="
                            -mr-1
                            flex
                            p-2
                            rounded-md
                            focus:outline-none
                            sm:-mr-2
                            transition
                            ease-in-out
                            duration-150
                        "
                        :class="{
                            'hover:bg-light-blue-vivid-600 focus:bg-light-blue-vivid-600':
                                style == 'success',
                            'hover:bg-red-vivid-600 focus:bg-red-vivid-600':
                                style == 'danger',
                        }"
                        aria-label="Dismiss"
                        @click.prevent="show = false"
                    >
                        <XIcon class="h-5 w-5 text-white" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    XIcon,
    ExclamationIcon,
    CheckCircleIcon,
} from "@heroicons/vue/outline";

export default {
    components: { XIcon, ExclamationIcon, CheckCircleIcon },
    data() {
        return {
            show: true,
        };
    },

    computed: {
        style() {
            return this.$page.props.jetstream.flash?.bannerStyle || "success";
        },

        message() {
            return this.$page.props.jetstream.flash?.banner || "";
        },
    },

    watch: {
        "$page.props.jetstream.flash"() {
            this.show = true;
        },
    },
};
</script>
