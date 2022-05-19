<template>
    <template v-if="history.event_type === 'policy_created'">
        <td class="border-t">{{ history.created_at }}</td>
        <td class="px-2 italic font-bold border-t">Policy created</td>
        <td class="border-t">{{ history.user_name }}</td>
    </template>
    <template v-else-if="history.event_type === 'policy_updated'">
        <td class="border-t">{{ history.created_at }}</td>
        <td class="px-2 italic font-bold border-t">Policy updated</td>
        <td class="border-t">{{ history.user_name }}</td>
    </template>
    <template v-else-if="history.event_type === 'note'">
        <td class="border-t">{{ history.created_at }}</td>
        <td class="px-2 border-t">{{ history.message }}</td>
        <td class="border-t">{{ history.user_name }}</td>
    </template>
</template>

<script>
export default {
    props: { history: { type: Object, required: true } },
};
</script>
