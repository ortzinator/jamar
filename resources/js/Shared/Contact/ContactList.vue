<template>
    <div v-if="contacts.length > 0">
        <h3><slot></slot></h3>
        <ul>
            <li v-for="contact in contacts" :key="contact.id" class="p-2">
                <a
                    class="group cursor-pointer flex items-center"
                    @click="$emit('contactClicked', contact)"
                >
                    <div>
                        <div v-text="contact.name"></div>
                        <div v-text="contact.address"></div>
                    </div>
                    <div
                        v-if="removable"
                        title="Remove policyholder"
                        @click="removeContact(contact)"
                    >
                        <XIcon
                            class="h-5 w-5 ml-10 invisible group-hover:visible"
                        />
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <div v-else>
        <slot name="noContacts"></slot>
    </div>
</template>

<script>
import { XIcon } from '@heroicons/vue/outline';

export default {
    components: { XIcon },
    props: {
        contacts: { type: Array, required: true },
        removable: { type: Boolean, default: false },
    },
    emits: ['contactClicked'],

    setup(props) {
        function removeContact(contact) {
            _.pull(props.contacts, contact);
        }

        return { removeContact };
    },
};
</script>
