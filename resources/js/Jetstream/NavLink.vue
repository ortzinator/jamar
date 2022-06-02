<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    href: { type: String, required: true },
    active: Boolean,
});

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-cool-grey-900 focus:outline-none focus:border-indigo-700 transition'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-cool-grey-500 hover:text-cool-grey-700 hover:border-cool-grey-300 focus:outline-none focus:text-cool-grey-700 focus:border-cool-grey-300 transition'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
