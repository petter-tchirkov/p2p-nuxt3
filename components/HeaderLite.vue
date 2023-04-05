<template>
    <header
        class="header pl-8 pr-4 pt-3 flex justify-between w-full h-fit border-b border-b-blue-6">
        <OrderTabs v-if="route.name === 'index'" />
        <span
            class="capitalize text-blue-8 font-medium text-xl transition-all flex items-center"
            >{{ route.name }}</span
        >
        <Auth />
    </header>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
