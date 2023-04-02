<template>
    <div class="flex gap-6">
        <NuxtLink
            to="/"
            class="text-blue-8 font-medium text-xl transition-all"
            >Продажа</NuxtLink
        >
        <NuxtLink
            to="/buy"
            class="text-blue-8 font-medium text-xl transition-all"
            >Покупка</NuxtLink
        >
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-exact-active {
    @apply border-b-4 border-b-blue-8;
}
</style>
