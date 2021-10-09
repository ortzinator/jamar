<template>
    <div>
        <button
            v-if="as == 'button'"
            type="submit"
            class="
                block
                w-full
                px-4
                py-2
                text-sm
                leading-5
                text-cool-grey-700 text-left
                hover:bg-cool-grey-100
                focus:outline-none focus:bg-cool-grey-100
                transition
                duration-150
                ease-in-out
            "
        >
            <slot></slot>
        </button>

        <inertia-link
            v-else
            :href="href"
            class="
                block
                px-4
                py-2
                text-sm
                leading-5
                text-cool-grey-700
                hover:bg-cool-grey-100
                focus:outline-none focus:bg-cool-grey-100
                transition
                duration-150
                ease-in-out
            "
        >
            <slot></slot>
        </inertia-link>
    </div>
</template>

<script>
export default {
    props: ['href', 'as'],
};
</script>
