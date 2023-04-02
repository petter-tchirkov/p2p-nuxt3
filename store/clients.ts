import { defineStore } from 'pinia'

export const useClientsStore = defineStore('clients', () => {
    const clients = ref([] as Record<string, any>[])
    const fetchClients = async () => {
        const { data }: any = await useFetch(
            'https://p2ptrading.herokuapp.com/users/clients'
        )
        if (data.value) {
            clients.value = data.value
        }
    }

    return { clients, fetchClients }
})
