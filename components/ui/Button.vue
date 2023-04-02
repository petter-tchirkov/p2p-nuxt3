<template>
    <button class="px-4 py-1.5 border-2 border-blue-6 rounded-lg text-blue-6">{{
        label
    }}</button>
</template>

<script setup lang="ts">
import { stringLiteral } from '@babel/types'

defineProps({ label: String })
</script>

<style scoped></style>
