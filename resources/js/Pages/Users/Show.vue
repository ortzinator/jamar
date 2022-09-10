<template>
    <div class="py-5 font-bold">
        <InertiaHead :title="viewedUser.name" />
        <h1>
            <InertiaLink
                class="text-light-blue-vivid-400 hover:text-light-blue-vivid-600"
                href="/users"
            >
                Employees
            </InertiaLink>
            <span class="font-medium text-light-blue-vivid-400">&nbsp;/</span>
            {{ viewedUser.name }}
        </h1>
    </div>

    <div class="max-w-3xl overflow-hidden bg-white rounded shadow">
        <dl>
            <div class="px-4 py-5 sm:grid sm:grid-cols-3 odd:bg-white even:bg-slate-50">
                <dt class="font-medium text-gray-500">Photo</dt>
                <dd class="block w-full sm:col-span-2">
                    <img
                        :src="viewedUser.profile_photo_url"
                        :alt="viewedUser.name"
                        class="object-cover w-20 h-20 rounded-full"
                    />
                </dd>
            </div>
            <div class="px-4 py-5 sm:grid sm:grid-cols-3 odd:bg-white even:bg-slate-50">
                <dt class="font-medium text-gray-500">Name</dt>
                <dd class="block w-full sm:col-span-2" v-text="viewedUser.name" />
            </div>
            <div class="px-4 py-5 sm:grid sm:grid-cols-3 odd:bg-white even:bg-slate-50">
                <dt class="font-medium text-gray-500">Email</dt>
                <dd class="block w-full sm:col-span-2" v-text="viewedUser.email" />
            </div>
            <div class="px-4 py-5 sm:grid sm:grid-cols-3 odd:bg-white even:bg-slate-50">
                <dt class="font-medium text-gray-500">Role</dt>
                <dd class="block w-full sm:col-span-2" v-text="roleName" />
            </div>
        </dl>
    </div>
    <div class="flex items-center justify-end px-8 my-4 bg-cool-grey-50">
        <InertiaLink
            v-if="$attrs.permissions.includes('update users')"
            :href="route('users.edit', viewedUser.id)"
        >
            Edit
        </InertiaLink>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import AppLayout from '@/Layouts/NewLayout.vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps({
    viewedUser: { type: Object, required: true },
});

const roleName = computed(() => props.viewedUser.roles.find((x) => x.enabled === true).name);
</script>
