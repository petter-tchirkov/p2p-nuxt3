<template>
    <ui-table-base-table
        class="table-fixed"
        :table-data="clientsStore.clients"
        :table-heads="clientsTableHeads"
        :template-columns="clientsTemplateColumns">
        <ui-table-row
            v-for="row in clientsStore.clients"
            :key="row.id"
            :template-columns="clientsTemplateColumns">
            <ui-table-column>{{ row.id }}</ui-table-column>
            <ui-table-column class="text-center">{{
                row.email
            }}</ui-table-column>
            <ui-table-column class="text-center">{{
                row.created
            }}</ui-table-column>
            <ui-table-column class="text-center">{{
                row.last_login
            }}</ui-table-column>
            <ui-table-column class="text-center">{{
                row.login_ip
            }}</ui-table-column>
            <ui-table-column class="text-center">{{
                row.status
            }}</ui-table-column>
            <ui-table-column class="pl-2">{{ row.comment }}</ui-table-column>
        </ui-table-row>
    </ui-table-base-table>
</template>

<script setup lang="ts">
import { useClientsStore } from '~~/store/clients'
definePageMeta({
    layout: 'default',
})

const clientsStore = useClientsStore()
await clientsStore.fetchClients()

const clientsTemplateColumns = '1fr 2fr 3fr 3fr 1fr 1fr 2fr'
const clientsTableHeads = [
    'Id',
    'Email',
    'Created',
    'Last Login',
    'Last Ip',
    'Status',
    'Comment',
]
</script>

<style scoped lang="scss"></style>
