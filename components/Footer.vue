<template>
    <footer
        class="fixed bottom-0 flex-grow flex justify-between w-[calc(100%-208px)] border-t border-t-blue-2">
        <div class="flex items-center gap-5 py-7 pl-7">
            <nuxt-link
                class="text-blue-6"
                to="/"
                >О нас</nuxt-link
            >
            <nuxt-link
                class="text-blue-6"
                to="/"
                >Пользовательское соглашение</nuxt-link
            >
        </div>
        <div class="flex items-center gap-6 pr-7">
            <nuxt-link
                ><icon
                    name="ic:baseline-facebook"
                    class="text-blue-6 w-5 h-5"
            /></nuxt-link>
            <nuxt-link
                ><icon
                    name="mdi:instagram"
                    class="text-blue-6 w-5 h-5"
            /></nuxt-link>
            <nuxt-link
                ><icon
                    name="mdi:youtube"
                    class="text-blue-6 w-5 h-5"
            /></nuxt-link>
            <nuxt-link
                ><icon
                    name="mdi:twitter"
                    class="text-blue-6 w-5 h-5"
            /></nuxt-link>
            <nuxt-link
                ><icon
                    name="mdi:linkedin"
                    class="text-blue-6 w-5 h-5"
            /></nuxt-link>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
