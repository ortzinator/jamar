<template>
    <div class="mt-6 -mb-1 flex flex-wrap">
        <div
            v-for="link in links"
            :key="link.id"
            class="mr-1 mb-1 text-sm border rounded flex"
        >
            <span
                v-if="link.url === null"
                :class="{ 'ml-auto': link.label === 'Next' }"
                class="text-gray-400 px-4 py-3"
                v-text="link.label"
            >
            </span>
            <Link
                v-else
                class="
                    hover:bg-white
                    focus:border-indigo-500 focus:text-indigo-500
                    px-4
                    py-3
                "
                :class="{
                    'bg-white': link.active,
                    'ml-auto': link.label === 'Next',
                }"
                :href="link.url"
            >
                <span v-text="link.label" />
            </Link>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: { Link },
    props: {
        links: Array,
    },
};
</script>
