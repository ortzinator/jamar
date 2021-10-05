<template>
    <inertia-link :href="href" :class="classes">
        <slot></slot>
    </inertia-link>
</template>

<script>
export default {
    props: ['href', 'active'],

    computed: {
        classes() {
            return this.active
                ? 'inline-flex items-center px-1 pt-1 border-b-2 border-light-blue-vivid-400 text-sm font-medium leading-5 text-cool-grey-900 focus:outline-none focus:border-light-blue-vivid-700 transition duration-150 ease-in-out'
                : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-cool-grey-500 hover:text-cool-grey-700 hover:border-cool-grey-300 focus:outline-none focus:text-cool-grey-700 focus:border-cool-grey-300 transition duration-150 ease-in-out';
        }
    }
};
</script>
