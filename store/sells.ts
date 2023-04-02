import { defineStore } from 'pinia'

export const useSellsStore = defineStore('sell-order', () => {
    const sells = ref([] as Record<string, any>[])
    const fetchSells = async () => {
        const { data }: any = await useFetch(
            'https://p2ptrading.herokuapp.com/orders/sell-orders?sell=ETH&buy=USD&page=0'
        )
        if (data.value) {
            sells.value = data.value
        }
    }

    return { sells, fetchSells }
})
