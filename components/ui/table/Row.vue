<template>
    <tr
        class="table__row grid border-b border-b-blue-2 pl-7"
        :style="{ 'grid-template-columns': templateColumns }"
        ><slot
    /></tr>
</template>

<script setup lang="ts">
defineProps<{
    rowData?: Record<string, any>
    templateColumns?: string
}>()
</script>

<style lang="scss" scoped></style>
