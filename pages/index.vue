<template>
    <div class="sells flex">
        <ui-table-base-table
            :table-data="sellsStore"
            :table-heads="tableHead"
            :template-columns="sellTableColumns">
            <ui-table-row
                class="border-b border-b-blue-2"
                v-for="row in sellsStore.sells"
                :key="row._id"
                :row-data="row"
                :template-columns="sellTableColumns">
                <ui-table-column
                    class="flex items-center justify-between border-r border-r-blue-2 py-2 pr-2">
                    <div class="flex items-center">
                        <Icon
                            name="material-symbols:account-circle-full"
                            class="mr-3" />
                        {{ row.user.firstname }} {{ row.user.lastname }}
                        <icons-verified
                            v-if="row.user.verif_status !== 'not_verified'" />
                    </div>
                    <div class="flex gap-3">
                        <Icon name="cryptocurrency-color:btc" />
                        <Icon name="material-symbols:arrow-right-alt-rounded" />
                        <Icon name="twemoji:dollar-banknote" />
                    </div>
                </ui-table-column>
                <ui-table-column
                    class="border-r border-r-blue-2 py-2 text-right pr-6"
                    >{{ row.from.amount_to_sell }}</ui-table-column
                >
                <ui-table-column
                    class="border-r border-r-blue-2 py-2 flex items-center gap-3 text-xl font-bold pl-6">
                    <Icon name="twemoji:star" />
                    {{ row.rating.total }}</ui-table-column
                >
                <ui-table-column class="border-r border-r-blue-2 py-2 pl-6">
                    <div class="flex items-center gap-5"
                        ><div class="flex items-center gap-1.5">
                            <Icon
                                name="material-symbols:thumb-up-outline-rounded"
                                class="text-green-7" />
                            <span class="text-green-7">{{
                                row.rating.good
                            }}</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <Icon
                                name="material-symbols:thumb-down-outline-rounded"
                                class="text-red-7" />
                            <span class="text-red-7">{{ row.rating.bad }}</span>
                        </div></div
                    >
                </ui-table-column>
            </ui-table-row>
        </ui-table-base-table>
    </div>
</template>

<script setup lang="ts">
import { useSellsStore } from '~~/store/sells'

definePageMeta({
    layout: 'default',
})

const sellsStore = useSellsStore()
await sellsStore.fetchSells()

const sellTableColumns = '769px 1fr 1fr 1fr'
const tableHead = ref([
    'Пользователь',
    'Сумма на продажу',
    'Рейтинг',
    'Репутация',
])
</script>

<style lang="scss" scoped></style>
