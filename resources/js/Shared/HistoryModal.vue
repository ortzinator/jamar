<template>
    <button @click="setIsOpen(true)" class="btn btn-secondary ml-auto">
        History of facts
    </button>
    <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        :open="isOpen"
        @close="setIsOpen"
    >
        <div class="flex items-center justify-center min-h-screen">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />

            <div
                class="
                    bg-white
                    flex flex-col
                    h-screen
                    md:max-w-lg
                    mx-auto
                    relative
                    md:rounded md:shadow-2xl
                    w-full
                "
            >
                <div class="px-7 py-5">
                    <DialogTitle>History of Facts</DialogTitle>
                    <div
                        v-if="histories.length > 0"
                        class="max-h-56 overflow-y-scroll"
                    >
                        <table class="font-mono w-full text-xs">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Message</th>
                                <th scope="col">Agent</th>
                            </tr>
                            <tr v-for="history in histories" :key="history.id">
                                <history-item :history="history" />
                            </tr>
                        </table>
                    </div>

                    <jet-label for="message" value="Message" />
                    <textarea
                        name="address"
                        id="address"
                        class="block w-full"
                        rows="2"
                        v-model="historyForm.message"
                    />
                    <jet-input-error :message="historyForm.errors.message" />
                </div>

                <div
                    class="
                        bg-cool-grey-100
                        md:mt-0
                        mt-auto
                        px-4
                        py-3
                        sm:flex sm:flex-row-reverse sm:px-6
                    "
                >
                    <button class="btn" @click="handleClose">Close</button>
                    <button class="btn btn-primary" @click="handleAdd">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription
} from '@headlessui/vue';

import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import JetValidationErrors from '@/Jetstream/ValidationErrors';
import HistoryItem from './HistoryItem.vue';

export default {
    props: { policy: Object },
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        DialogDescription,
        JetInput,
        JetLabel,
        JetInputError,
        JetValidationErrors,
        HistoryItem
    },
    setup(props) {
        let isOpen = ref(false);
        let histories = ref([]);
        let loading = ref(false);

        let cancelSource = null;

        const historyForm = useForm({
            message: '',
            policy_id: props.policy.id,
            event_type: 'note'
        });

        function handleAdd() {
            historyForm.post('/histories', {
                onSuccess: () => {
                    historyForm.reset();
                    loadHistory();
                }
            });
        }

        function handleClose() {
            historyForm.reset();
            setIsOpen(false);
        }

        function loadHistory() {
            if (cancelSource) {
                cancelSource.cancel();
            }
            cancelSource = axios.CancelToken.source();

            loading.value = true;

            axios
                .get(route('histories.index'), {
                    cancelToken: cancelSource.token,
                    params: {
                        'filter[policy_id]': props.policy.id
                    }
                })
                .then((response) => {
                    if (response) {
                        histories.value = response.data;
                        loading.value = false;
                        cancelSource = null;
                    }
                });
        }

        onMounted(loadHistory);

        function setIsOpen(state) {
            isOpen.value = state;
        }

        return {
            isOpen,
            setIsOpen,
            historyForm,
            histories,
            handleAdd,
            handleClose
        };
    }
};
</script>
