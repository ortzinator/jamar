<template>
    <table class="w-full whitespace-nowrap">
        <tr class="text-left">
            <th
                v-for="column in columns"
                :key="column.value"
                class="px-6 pt-6 pb-4"
                v-text="column.text"
            />
        </tr>
        <tr v-for="row in dataSource" :key="row.id" class="odd:bg-white even:bg-slate-50">
            <td v-for="column in columns" :key="column.value" class="border-t">
                <InertiaLink
                    :href="route(routeName, row.id)"
                    class="flex items-center px-6 py-4 focus:text-light-blue-vivid-500"
                >
                    <slot :name="'column.' + column.value" :value="row[column.value]" :row="row">
                        {{ row[column.value] }}
                    </slot>
                </InertiaLink>
            </td>
        </tr>
        <tr v-if="dataSource.length === 0">
            <slot name="noneFound">
                <td class="px-6 py-4 border-t" colspan="4">No data found.</td>
            </slot>
        </tr>
    </table>
</template>

<script setup>
defineProps({
    columns: {
        type: Array,
        default() {
            return [];
        },
    },
    dataSource: { type: Object, required: true },
    routeName: { type: String, required: true },
});
</script>
