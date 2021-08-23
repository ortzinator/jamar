<template>
    <div v-if="contacts.length > 0">
        <h3><slot></slot></h3>
        <ul>
            <li v-for="contact in contacts" :key="contact.id" class="p-2">
                <a
                    @click="$emit('contactClicked', contact)"
                    class="block cursor-pointer hover:line-through"
                >
                    <div v-text="contact.name"></div>
                    <div v-text="contact.address"></div>
                </a>
            </li>
        </ul>
    </div>
    <div v-else>
        <slot name="noContacts"></slot>
    </div>
</template>

<script>
export default {
    props: { contacts: Array },
    emits: ['contactClicked']
};
</script>
