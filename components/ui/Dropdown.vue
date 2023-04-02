<template>
    <div
        class="dropdown relative"
        ref="dropdown">
        <p class="text-xs pl-2 text-blue-6 mb-1">{{ label }}</p>
        <div
            @click="isDropdownShown = !isDropdownShown"
            class="flex items-center justify-between px-4 py-1.5 border border-blue-6 text-blue-6 cursor-pointer"
            :class="
                isDropdownShown
                    ? 'rounded-tl-lg rounded-tr-lg border-b-transparent'
                    : 'rounded-lg'
            ">
            <div class="flext items-center gap-2">
                <Icon :name="`twemoji:flag-${options[1].name}`" />
                {{ options[1].id }}
            </div>
            <Icon
                name="ic:outline-keyboard-arrow-down"
                class="w-8 h-8 transition-transform"
                :class="{ 'rotate-180': isDropdownShown }" />
        </div>
        <div
            v-if="isDropdownShown"
            class="w-full py-1.5 border z-20 border-blue-6 rounded-br-lg rounded-bl-lg text-blue-6 cursor-pointer absolute top-full left-0 transition-all bg-white">
            <p
                v-for="option in options"
                class="px-4 hover:bg-gray-100 flex items-center gap-2">
                <Icon :name="`twemoji:flag-${option.name}`" />
                {{ option.id }}</p
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const options = [
    { name: 'russia', id: 'RU' },
    { name: 'ukraine', id: 'UA' },
    { name: 'united-kingdom', id: 'EN' },
]
let isDropdownShown = ref(false)
const dropdown = ref(null)

defineProps<{ label?: string }>()

onClickOutside(dropdown, (event: any) => (isDropdownShown.value = false))
</script>

<style scoped></style>
