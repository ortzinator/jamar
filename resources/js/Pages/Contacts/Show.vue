<template>
    <InertiaHead title="Contact" />
    <div class="py-5 font-bold">
        <h1>
            <InertiaLink
                class="text-light-blue-vivid-400 hover:text-light-blue-vivid-600"
                :href="route('contacts.index')"
            >
                Contacts
            </InertiaLink>
            <span class="font-medium text-light-blue-vivid-400">&nbsp;/</span>
            {{ contact.name }}
        </h1>
    </div>

    <div class="max-w-3xl">
        <div class="overflow-hidden bg-white rounded shadow">
            <div
                v-if="contact.deleted_at"
                class="flex items-center justify-between p-5 pl-8 bg-yellow-vivid-200"
            >
                <div class="flex">
                    <TrashIcon class="w-5 h-5 mr-2" />
                    This contact is deleted
                </div>
            </div>
            <dl>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 odd:bg-white even:bg-slate-50">
                    <dt class="font-medium text-gray-500">Name</dt>
                    <dd class="block w-full sm:col-span-2" v-text="contact.name" />
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 odd:bg-white even:bg-slate-50">
                    <dt class="font-medium text-gray-500">Address</dt>
                    <dd class="block w-full sm:col-span-2">
                        <address v-html="formattedAddress" />
                    </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 odd:bg-white even:bg-slate-50">
                    <dt class="font-medium text-gray-500">Policies</dt>
                    <dd class="block w-full sm:col-span-2">
                        <DataTable
                            :columns="columns"
                            :data-source="contact.policies"
                            route-name="policies.edit"
                        >
                            <template #[`column.period_end`]="{ value }">
                                <span :class="{ 'text-red-vivid-500': isInPast(value) }">
                                    {{ formatDate(value) }}
                                </span>
                            </template>
                            <template #[`column.created_at`]="{ value }">
                                {{ formatDate(value) }}
                            </template>
                            <template #[`column.premium`]="{ value }">
                                <div class="w-full text-right" v-text="value.formatted" />
                            </template>
                        </DataTable>
                    </dd>
                </div>
            </dl>
            <div class="p-8">
                <div class="mb-5">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton class="flex items-center">
                            <label for="notes" class="cursor-pointer"> Agent Notes </label>
                            <ChevronRightIcon
                                :class="open ? 'rotate-90' : ''"
                                class="w-5 h-5 ml-2"
                            />
                        </DisclosureButton>
                        <DisclosurePanel class="mt-5">
                            <textarea
                                id="notes"
                                v-model="contact.notes"
                                name="notes"
                                class="block w-full"
                                cols="30"
                                rows="10"
                            />
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-end px-8 my-4 bg-cool-grey-50">
            <InertiaLink
                v-if="$attrs.permissions.includes('update contacts')"
                :href="route('contacts.edit', contact.id)"
            >
                Edit
            </InertiaLink>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { TrashIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { sanitize, formatDate, isInPast } from '@/util.js';
import DataTable from '@/Shared/DataTable.vue';
import AppLayout from '@/Layouts/NewLayout.vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps({
    errors: { type: Object, required: true },
    contact: { type: Object, required: true },
});

const columns = ref([
    { text: 'Number', value: 'number' },
    { text: 'Premium', value: 'premium' },
    { text: 'Date Issued', value: 'created_at' },
    { text: 'Ending', value: 'period_end' },
]);

const formattedAddress = computed(() => sanitize(props.contact.address).replace(/\n/g, '<br />'));
</script>
