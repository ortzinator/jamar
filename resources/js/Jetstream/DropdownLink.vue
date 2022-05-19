<template>
    <div>
        <button
            v-if="as == 'button'"
            type="submit"
            class="block w-full px-4 py-2 text-sm leading-5 text-left transition duration-150 ease-in-out text-cool-grey-700 hover:bg-cool-grey-100 focus:outline-none focus:bg-cool-grey-100"
        >
            <slot></slot>
        </button>

        <InertiaLink
            v-else
            :href="href"
            class="block px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out text-cool-grey-700 hover:bg-cool-grey-100 focus:outline-none focus:bg-cool-grey-100"
        >
            <slot></slot>
        </InertiaLink>
    </div>
</template>

<script>
export default {
    props: ['href', 'as'],
};
</script>
