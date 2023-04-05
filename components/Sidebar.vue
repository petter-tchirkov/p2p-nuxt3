<template>
    <aside class="sidebar bg-blue-8 w-60 min-h-screen p-7">
        <NuxtLink
            to="/"
            class="block mb-7">
            <icons-logo />
        </NuxtLink>
        <!-- <h3 class="sidebar__menu-heading text-white font-bold text-lg mb-5"
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
        </div> -->
        <h3 class="text-gray-300 text-lg mb-5">Аккаунт</h3>
        <div class="sidebar__menu flex flex-col gap-3">
            <NuxtLink
                v-for="menu in menuItems"
                :key="menu.name"
                :to="menu.to"
                class="flex items-center gap-2 pl-2 py-1 rounded-tr-lg rounded-br-lg">
                <Icon
                    :name="menu.icon"
                    class="text-white w-5 h-5" />
                <span class="text-white">{{ menu.name }}</span>
            </NuxtLink>
        </div>

        <footer class="sidebar__footer"> </footer>
    </aside>
</template>

<script setup lang="ts">
const menuItems = [
    { name: 'Счета', icon: 'ant-design:bank-outlined', to: '/accounts' },
    {
        name: 'Настройки',
        icon: 'material-symbols:settings-outline',
        to: '/settings',
    },
    {
        name: 'Партнерам',
        icon: 'mdi:card-account-details-outline',
        to: '/partners',
    },
]
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    background: #7a7fcb;
}
</style>
