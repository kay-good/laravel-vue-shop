import { defineStore } from 'pinia'
import axios from 'axios'

export const useItemStore = defineStore('ItemStore', {
    state: () => ({ items: [] }),
    actions: {
        async fill() {
            const data = (await axios.get("/items")).data
            this.items = data[0].map(it => {
                return {...it, count: 1}
            })
        },
        plusCount(id) {
            const index = this.items.findIndex(it => it.id === id)
            this.items[index].count += 1
        },
        minusCount(id) {
            const index = this.items.findIndex(it => it.id === id)
            this.items[index].count !== 1 ? this.items[index].count -= 1 : 1
        },
    },
})
