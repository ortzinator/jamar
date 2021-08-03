<template>
    <table class="w-full table-fixed">
        <tr class="text-left">
            <th
                v-for="column in columns"
                :key="column.value"
                v-text="column.text"
                class="px-6 pt-6 pb-4"
            />
        </tr>
        <tr v-for="row in dataSource" :key="row.id">
            <td v-for="column in columns" :key="column.value" class="border-t">
                <inertia-link
                    :href="route(routeName, row.id)"
                    class="px-6 py-4 flex items-center focus:text-indigo-500"
                >
                    <slot
                        :name="'column.' + column.value"
                        :value="row[column.value]"
                        :row="row"
                    >
                        {{ row[column.value] }}
                    </slot>
                </inertia-link>
            </td>
        </tr>
        <tr v-if="dataSource.length === 0">
            <slot name="noneFound">
                <td class="border-t px-6 py-4" colspan="4">No data found.</td>
            </slot>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        columns: { type: Array, required: false },
        dataSource: { type: Object, required: true },
        routeName: { type: String, required: true },
    },
};
</script>
