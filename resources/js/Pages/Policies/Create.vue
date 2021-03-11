<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link class="text-indigo-400 hover:text-indigo-600" href="/"
                >Policies</inertia-link
            >
            <span class="text-indigo-400 font-medium">&nbsp;/</span>
            New Policy
        </h1>
        <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
            <div class="p-5">Form</div>
        </div>
    </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
export default {
    layout: AppLayout,
    data() {
        return {
            dataName: "",
        };
    },
};
</script>
