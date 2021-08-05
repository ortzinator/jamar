<template>
    <button
        :disabled="loading"
        class="flex items-center disabled:opacity-50"
        @click="showEdit"
    >
        <icon
            v-if="delayedLoading"
            name="spinner"
            class="h-5 w-5 mr-2 fill-current animate-spin"
        />
        <slot></slot>
    </button>
</template>

<script>
import Icon from "@/Shared/Icon";
import delay from "lodash/delay";
export default {
    props: { loading: Boolean },
    components: { Icon },
    data() {
        return {
            delayedLoading: false,
            delayId: null,
        };
    },
    watch: {
        loading(val) {
            //Only show the loading spinner icon if the request has taken longer than 100ms
            if (val === false) {
                //If no longer loading, disable spinner immediately
                this.delayedLoading = false;
                clearTimeout(this.delayId);
            } else {
                clearTimeout(this.delayId);
                this.delayId = delay(() => (this.delayedLoading = true), 100);
            }
        },
    },
};
</script>
