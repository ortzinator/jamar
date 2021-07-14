<template>
    <div v-if="holders.length > 0">
        <h3 class="font-bold leading-7 text-xl"><slot></slot></h3>
        <div v-for="holder in holders" :key="holder.id" class="p-2">
            <a :href="holder.link" v-text="holder.name"></a>
        </div>
    </div>
    <div v-else>
        <slot name="noHolders"></slot>
    </div>
</template>

<script>
export default {
    props: { holders: Array },
};
</script>
