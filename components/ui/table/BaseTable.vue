<template>
    <table class="table w-full">
        <thead
            class="table__heads pt-6 pl-7 grid pb-2 border-b border-b-blue-2"
            :style="{ 'grid-template-columns': templateColumns }">
            <th
                class="table__head text-gray-7 text-xs font-light text-left"
                v-for="head in tableHeads"
                :key="head"
                >{{ head }}</th
            >
        </thead>
        <tbody>
            <slot />
        </tbody>
    </table>
</template>

<script setup lang="ts">
defineProps<{
    tableData: Record<string, any>
    tableHeads: string[]
    templateColumns?: string
}>()
</script>

<style scoped></style>
