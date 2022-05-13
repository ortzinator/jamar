<template>
    <button class="btn btn-secondary ml-auto" @click="setIsOpen(true)">
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
                    md:h-auto md:max-w-lg md:my-auto md:rounded md:shadow-2xl
                    relative
                    w-full
                "
            >
                <DialogTitle class="md:mx-7 md:my-5 mx-2 my-4">
                    History of Facts
                </DialogTitle>
                <DialogDescription>Displays a history of facts</DialogDescription>
                <div
                    v-if="histories.length > 0"
                    class="
                        grow
                        md:max-h-96 md:mx-7 md:my-5
                        mx-2
                        my-4
                        overflow-y-scroll
                    "
                >
                    <table class="font-mono w-full text-xs table-fixed">
                        <tr>
                            <th scope="col" class="w-2/12">Date</th>
                            <th scope="col" class="w-6/12">Message</th>
                            <th scope="col" class="w-2/12">Agent</th>
                        </tr>
                        <tr v-for="history in histories" :key="history.id">
                            <history-item :history="history" />
                        </tr>
                    </table>
                </div>

                <div class="md:mx-7 md:my-5 mx-2 my-4">
                    <JetLabel for="message" value="Message" />
                    <textarea
                        id="address"
                        v-model="historyForm.message"
                        name="address"
                        class="block w-full"
                        rows="2"
                    />
                    <JetInput-error :message="historyForm.errors.message" />
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

<script setup>
import { ref, onMounted } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue';

import JetLabel from '@/Jetstream/Label';
import JetInputError from '@/Jetstream/InputError';
import HistoryItem from './HistoryItem.vue';

const props = defineProps({ policy: { type: Object, required: true } });
const isOpen = ref(false);
const histories = ref([]);
const loading = ref(false);

let cancelSource = null;

const historyForm = useForm({
    message: '',
    policy_id: props.policy.id,
    event_type: 'note',
});

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
                'filter[policy_id]': props.policy.id,
            },
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

function handleAdd() {
    historyForm.post('/histories', {
        onSuccess: () => {
            historyForm.reset();
            loadHistory();
        },
    });
}

function handleClose() {
    historyForm.reset();
    setIsOpen(false);
}
</script>
