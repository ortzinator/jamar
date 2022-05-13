<template>
    <JetActionSection>
        <template #title> Delete Team </template>

        <template #description> Permanently delete this team. </template>

        <template #content>
            <div class="max-w-xl text-sm text-cool-grey-600">
                Once a team is deleted, all of its resources and data will be
                permanently deleted. Before deleting this team, please download
                any data or information regarding this team that you wish to
                retain.
            </div>

            <div class="mt-5">
                <JetDangerButton @click="confirmTeamDeletion">
                    Delete Team
                </JetDangerButton>
            </div>

            <!-- Delete Team Confirmation Modal -->
            <jet-confirmation-modal
                :show="confirmingTeamDeletion"
                @close="confirmingTeamDeletion = false"
            >
                <template #title> Delete Team </template>

                <template #content>
                    Are you sure you want to delete this team? Once a team is
                    deleted, all of its resources and data will be permanently
                    deleted.
                </template>

                <template #footer>
                    <JetSecondaryButton
                        @click="confirmingTeamDeletion = false"
                    >
                        Cancel
                    </JetSecondaryButton>

                    <JetDangerButton
                        class="ml-2"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteTeam"
                    >
                        Delete Team
                    </JetDangerButton>
                </template>
            </jet-confirmation-modal>
        </template>
    </JetActionSection>
</template>

<script>
import JetActionSection from '@/Jetstream/ActionSection.vue';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal.vue';
import JetDangerButton from '@/Jetstream/DangerButton.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';

export default {

    components: {
        JetActionSection,
        JetConfirmationModal,
        JetDangerButton,
        JetSecondaryButton,
    },
    props: ['team'],

    data() {
        return {
            confirmingTeamDeletion: false,
            deleting: false,

            form: this.$inertia.form(),
        };
    },

    methods: {
        confirmTeamDeletion() {
            this.confirmingTeamDeletion = true;
        },

        deleteTeam() {
            this.form.delete(route('teams.destroy', this.team), {
                errorBag: 'deleteTeam',
            });
        },
    },
};
</script>
