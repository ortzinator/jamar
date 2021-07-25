<template>
    <div>
        <div v-if="$slots.header" class="border-b font-semibold p-2">
            <slot name="header"></slot>
        </div>
        <div class="prose p-2"><slot /></div>
    </div>
</template>

<script>
export default {
    setup() {},
};
</script>
