<template>
    <li>
        <inertia-link
            :href="href"
            :class="classes"
            class="
                flex
                px-6
                py-3
                hover:bg-cool-grey-200
                hover:border-light-blue-vivid-500
                hover:border-r-4
            "
        >
            <slot></slot>
        </inertia-link>
    </li>
</template>

<script>
export default {
    props: ["href", "active"],

    computed: {
        classes() {
            return this.active
                ? "bg-cool-grey-200 border-light-blue-vivid-500 border-r-4"
                : "";
        },
    },
};
</script>
