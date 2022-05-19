<template>
    <div v-if="contacts.length > 0">
        <h3><slot></slot></h3>
        <ul>
            <li v-for="contact in contacts" :key="contact.id" class="p-2">
                <div class="flex items-center justify-between cursor-pointer group">
                    <div @click="$emit('contactClicked', contact)">
                        <div v-text="contact.name"></div>
                        <div v-text="contact.address"></div>
                    </div>
                    <div
                        v-if="removable"
                        title="Remove policyholder"
                        @click="removeContact(contact)"
                    >
                        <XIcon class="invisible w-5 h-5 ml-10 group-hover:visible" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div v-else>
        <slot name="noContacts"></slot>
    </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/outline';

const props = defineProps({
    contacts: { type: Array, required: true },
    removable: { type: Boolean, default: false },
});

defineEmits(['contactClicked']);

function removeContact(contact) {
    _.pull(props.contacts, contact);
}
</script>
