<template>
    <aside class="sidebar bg-blue-8 w-60 min-h-screen p-7">
        <NuxtLink
            to="/"
            class="block mb-7">
            <icons-logo />
        </NuxtLink>
        <h3 class="sidebar__menu-heading text-white font-bold text-lg mb-5"
            >Я хочу</h3
        >
        <div class="sidebar__menu">
            <NuxtLink to="/">
                <div class="flex items-center gap-3 mb-5">
                    <Icon
                        name="material-symbols:arrow-upward-rounded"
                        class="text-white" />
                    <p class="text-white font-bold text-lg">Продать</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/">
                <div class="flex items-center gap-3">
                    <Icon
                        name="material-symbols:arrow-downward-rounded"
                        class="text-white" />
                    <p class="text-white font-bold text-lg">Купить</p>
                </div>
            </NuxtLink>
        </div>
        <footer class="sidebar__footer"> </footer>
    </aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
