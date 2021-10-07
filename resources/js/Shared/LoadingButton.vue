<template>
    <button :disabled="loading" class="flex items-center disabled:opacity-50">
        <icon
            v-if="delayedLoading"
            name="spinner"
            class="h-5 w-5 mr-2 fill-current animate-spin"
        />
        <slot></slot>
    </button>
</template>

<script>
import { ref, watch } from 'vue';
import Icon from '@/Shared/Icon';

export default {
    components: { Icon },
    props: { loading: Boolean },
    setup(props) {
        let delayedLoading = ref(false);
        let delayId = ref();

        watch(props.loading, (val) => {
            //Only show the loading spinner icon if the request has taken longer than 100ms
            if (val === false) {
                //If no longer loading, disable spinner immediately
                this.delayedLoading = false;
                clearTimeout(this.delayId);
            } else {
                clearTimeout(this.delayId);
                this.delayId = setTimeout(
                    () => (this.delayedLoading = true),
                    100
                );
            }
        });

        return { delayedLoading, delayId };
    }
};
</script>
