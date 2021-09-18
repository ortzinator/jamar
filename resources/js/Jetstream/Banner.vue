<template>
    <div
        v-if="show && message"
        class="
            absolute
            flex
            items-center
            bottom-32
            left-10
            shadow-lg
            rounded-lg
        "
        :class="{
            'bg-green-400': style == 'success',
            'bg-red-vivid-600': style == 'danger'
        }"
    >
        <div class="p-4 border-r border-gray-400 rounded-l-lg">
            <CheckIcon v-if="style == 'success'" class="h-5 w-5" />
            <ExclamationIcon v-if="style == 'danger'" class="w-5 h-5" />
        </div>
        <div class="flex bg-white rounded-r-lg">
            <div class="p-4">{{ message }}</div>
            <div class="p-4">
                <button class="cursor-pointer" @click="show = false">
                    <XIcon class="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';
import { XIcon, ExclamationIcon, CheckIcon } from '@heroicons/vue/outline';

export default {
    components: { XIcon, ExclamationIcon, CheckIcon },
    setup() {
        var show = ref(true);

        const style = computed(() => {
            return (
                usePage().props.value.jetstream.flash?.bannerStyle || 'success'
            );
        });

        const message = computed(() => {
            return usePage().props.value.jetstream.flash?.banner || '';
        });

        watch(usePage().props.value.jetstream.flash, () => {
            show.value = true;
        });

        return { show, style, message };
    }
};
</script>
