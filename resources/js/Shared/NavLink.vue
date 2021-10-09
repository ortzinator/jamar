<template>
    <li>
        <inertia-link
            :href="href"
            :class="classes"
            class="
                flex
                px-6
                py-3
                hover:bg-light-blue-vivid-600
                hover:border-light-blue-vivid-500
                hover:text-cool-grey-100
                hover:border-r-4
            "
        >
            <slot></slot>
        </inertia-link>
    </li>
</template>

<script>
export default {
    props: { href: { type: String, required: true }, active: { type: String, required: true } },

    computed: {
        classes() {
            return this.active
                ? 'bg-light-blue-vivid-600 border-light-blue-vivid-500 border-r-4 text-cool-grey-100'
                : '';
        },
    },
};
</script>
