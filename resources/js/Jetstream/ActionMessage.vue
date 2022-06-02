<script setup>
defineProps({
    on: Boolean,
});
</script>

<template>
    <div>
        <Transition
            leave-active-class="transition duration-1000 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-show="on" class="text-sm text-cool-grey-600">
                <slot />
            </div>
        </Transition>
    </div>
</template>
