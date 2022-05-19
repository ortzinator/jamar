<template>
    <AppLayout title="Create Team">
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-cool-grey-800">Create Team</h2>
        </template>

        <div>
            <div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <CreateTeamForm />
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/NewLayout.vue';
import CreateTeamForm from '@/Pages/Teams/Partials/CreateTeamForm.vue';

export default {
    components: {
        AppLayout,
        CreateTeamForm,
    },
};
</script>
