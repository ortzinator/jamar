<template>
    <div class="py-5 md:p-5 md:grid-cols-3 md:grid">
        <div class="md:col-span-1">
            <div class="text-lg"><slot name="header" /></div>
            <div class="text-sm text-cool-grey-700">
                <slot name="description" />
            </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <slot />
        </div>
    </div>
</template>
