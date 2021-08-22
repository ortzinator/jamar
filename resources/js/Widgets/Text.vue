<template>
    <div class="p-6">
        <h4 v-if="$slots.header" class="font-semibold">
            <slot name="header"></slot>
        </h4>
        <div class="prose"><slot /></div>
    </div>
</template>
