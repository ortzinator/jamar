<template>
    <li :class="classes">
        <inertia-link :href="href">
            <slot></slot>
        </inertia-link>
    </li>
</template>

<script>
export default {
    props: ["href", "active"],

    computed: {
        classes() {
            return this.active ? "text-white" : "hover:text-white";
        },
    },
};
</script>
