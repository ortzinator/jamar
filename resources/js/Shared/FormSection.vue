<template>
    <div class="py-5 md:grid md:grid-cols-3 md:p-5">
        <div class="md:col-span-1">
            <div class="text-lg"><slot name="header" /></div>
            <div class="text-cool-grey-700 text-sm">
                <slot name="description" />
            </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <slot />
        </div>
    </div>
</template>
