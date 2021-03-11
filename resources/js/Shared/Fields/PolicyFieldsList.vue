<template>
    <div v-if="fields.length === 0" class="bg-yellow-100 p-3 text-sm rounded">
        No fields found
    </div>
    <div v-else class="mr-5 mb-5">
        <div class="border-b font-bold my-5 pb-2 text-gray-700">
            Custom Fields
        </div>

        <policy-field
            v-for="field in fields"
            :key="field.id"
            :field="field"
            :policy="policy"
            class=""
        ></policy-field>

        <new-policy-field
            v-if="fieldFormShown"
            :policy="policy"
            class="flex mb-5 p-5 rounded space-x-4 bg-blue-100 border border-blue-200 shadow-lg"
        />
        <button
            @click="fieldFormShown = true"
            type="button"
            class="flex items-center"
        >
            <icon name="plus-circle" class="h-5 w-5 mr-2" /> Field
        </button>
    </div>
</template>
<script>
import NewPolicyField from "@/Shared/Fields/NewPolicyField";
import PolicyField from "@/Shared/Fields/PolicyField";
import Icon from "@/Shared/Icon";

export default {
    props: { fields: Array, policy: Object },
    components: { NewPolicyField, PolicyField, Icon },
    data() {
        return {
            fieldFormShown: false,
        };
    },
};
</script>
