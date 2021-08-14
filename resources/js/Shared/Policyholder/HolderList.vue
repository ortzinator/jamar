<template>
    <div v-if="holders.length > 0">
        <h3><slot></slot></h3>
        <ul>
            <li v-for="holder in holders" :key="holder.id" class="p-2">
                <a
                    @click="$emit('holderClicked', holder)"
                    class="block cursor-pointer hover:line-through"
                >
                    <div v-text="holder.name"></div>
                    <div v-text="holder.address"></div>
                </a>
            </li>
        </ul>
    </div>
    <div v-else>
        <slot name="noHolders"></slot>
    </div>
</template>

<script>
export default {
    props: { holders: Array },
    emits: ["holderClicked"],
};
</script>
