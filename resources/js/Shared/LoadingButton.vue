<template>
    <button :disabled="loading" class="flex items-center" @click="showEdit">
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
        };
    },
    watch: {
        loading(val) {
            //Only show the loading spinner icon if the request has taken longer than 100ms
            if (val === true) {
                delay(
                    () => (this.loading ? (this.delayedLoading = true) : false),
                    100
                );
            } else {
                this.delayedLoading = false;
            }
        },
    },
};
</script>
