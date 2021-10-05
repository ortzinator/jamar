<template>
    <div>
        <button :class="classes" class="w-full text-left" v-if="as == 'button'">
            <slot></slot>
        </button>

        <inertia-link :href="href" :class="classes" v-else>
            <slot></slot>
        </inertia-link>
    </div>
</template>

<script>
export default {
    props: ['active', 'href', 'as'],

    computed: {
        classes() {
            return this.active
                ? 'block pl-3 pr-4 py-2 border-l-4 border-light-blue-vivid-400 text-base font-medium text-light-blue-vivid-700 bg-light-blue-vivid-50 focus:outline-none focus:text-light-blue-vivid-800 focus:bg-light-blue-vivid-100 focus:border-light-blue-vivid-700 transition duration-150 ease-in-out'
                : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-cool-grey-600 hover:text-cool-grey-800 hover:bg-cool-grey-50 hover:border-cool-grey-300 focus:outline-none focus:text-cool-grey-800 focus:bg-cool-grey-50 focus:border-cool-grey-300 transition duration-150 ease-in-out';
        }
    }
};
</script>
