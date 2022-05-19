<template>
    <div class="flex flex-wrap mt-6 -mb-1">
        <div v-for="link in links" :key="link.id" class="flex mb-1 mr-1 text-sm border rounded">
            <span
                v-if="link.url === null"
                :class="{ 'ml-auto': link.label === 'Next' }"
                class="px-4 py-3 text-cool-grey-400"
                v-text="link.label"
            >
            </span>
            <InertiaLink
                v-else
                class="px-4 py-3 hover:bg-white focus:border-light-blue-vivid-500 focus:text-light-blue-vivid-500"
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
