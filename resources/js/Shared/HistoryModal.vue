<template>
    <button class="ml-auto btn btn-secondary" @click="setIsOpen(true)">History of facts</button>
    <Dialog
        as="div"
        class="fixed inset-0 z-10 overflow-y-auto md:py-5"
        :open="isOpen"
        @close="setIsOpen"
    >
        <div class="flex items-center justify-center min-h-screen">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />

            <div
                class="relative flex flex-col w-full h-screen bg-white md:h-[80vh] md:w-5/6 md:rounded md:shadow-2xl"
            >
                <DialogTitle class="mx-2 my-4 md:mx-7 md:my-5"> History of Facts </DialogTitle>
                <div class="mx-2 my-4 overflow-y-scroll grow md:max-h-96 md:mx-7 md:my-5">
                    <table v-if="histories.length > 0" class="w-full font-mono text-xs table-fixed">
                        <tr>
                            <th scope="col" class="w-2/12">Date</th>
                            <th scope="col" class="w-6/12">Message</th>
                            <th scope="col" class="w-2/12">Agent</th>
                        </tr>
                        <tr v-for="history in histories" :key="history.id">
                            <HistoryItem :history="history" />
                        </tr>
                    </table>
                    <p v-else>There is no history for this policy</p>
                </div>

                <div class="mx-2 my-4 md:mx-7 md:my-5">
                    <InputLabel for="message" value="Message" />
                    <textarea
                        id="address"
                        v-model="historyForm.message"
                        name="address"
                        class="block w-full"
                        rows="2"
                    />
                    <TextInputError :message="historyForm.errors.message" />
                </div>
                <div
                    class="px-4 py-3 mt-auto bg-cool-grey-100 md:mt-0 sm:flex sm:flex-row-reverse sm:px-6"
                >
                    <button class="btn" @click="handleClose">Close</button>
                    <button class="btn btn-primary" @click="handleAdd">Add</button>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue';

import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
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

function setIsOpen(state) {
    isOpen.value = state;
    if (state) {
        loadHistory();
    }
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
