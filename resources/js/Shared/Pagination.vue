<template>
    <div class="mt-6 -mb-1 flex flex-wrap">
        <div v-for="link in links" :key="link.id" class="mr-1 mb-1 flex rounded border text-sm">
            <span
                v-if="link.url === null"
                :class="{ 'ml-auto': link.label === 'Next' }"
                class="text-cool-grey-400 px-4 py-3"
                v-text="link.label"
            >
            </span>
            <InertiaLink
                v-else
                class="focus:border-light-blue-vivid-500 focus:text-light-blue-vivid-500 px-4 py-3 hover:bg-white"
                :class="{
                    'bg-white': link.active,
                    'ml-auto': link.label === 'Next',
                }"
                :href="link.url"
            >
                <span v-text="link.label" />
            </InertiaLink>
        </div>
    </div>
</template>

<script setup>
defineProps({ links: { type: Array, required: true } });
</script>
