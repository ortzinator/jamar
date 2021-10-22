<template>
    <template v-if="history.event_type === 'policy_created'">
        <td class="border-t">{{ history.created_at }}</td>
        <td class="border-t italic font-bold px-2">Policy created</td>
        <td class="border-t">{{ history.user_name }}</td>
    </template>
    <template v-else-if="history.event_type === 'note'">
        <td class="border-t">{{ history.created_at }}</td>
        <td class="border-t px-2">{{ history.message }}</td>
        <td class="border-t">{{ history.user_name }}</td>
    </template>
</template>

<script>
export default {
    props: { history: { type: Object, required: true } },
};
</script>
