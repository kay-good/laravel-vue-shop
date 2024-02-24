import { defineStore } from 'pinia'
import axios from 'axios'

export const useItemStore = defineStore('ItemStore', {
    state: () => ({ items: [] }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        async fill() {
            const data = (await axios.get("/items")).data
            this.items = data[0].map(it => {
                return {...it, count: 1}
            })
        },
        plusCount(id) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].id === id) {
                    this.items[i].count += 1
                }
            }
        },
        minusCount(id) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].id === id) {
                    this.items[i].count !== 1 ? this.items[i].count -= 1 : 1
                }
            }
        },
    },
})
