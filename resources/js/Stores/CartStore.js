import { defineStore } from 'pinia'
import { useItemStore } from './ItemStore'

export const useCartStore = defineStore('CartStore', {
    state: () => ({ cart: [] }),
    getters: {
        totalCount() {
            return this.cart.reduce((acc, rec) => {
                return acc + (rec.count * rec.price)
            }, 0)
        }
    },
    actions: {
        addToCart(id) {
            const itemStore = useItemStore()
            const itemToAdd = { ...itemStore.items.find(it => it.id === id) }
            const indexInCart = this.cart.findIndex(it => it.id === id)

            if (indexInCart < 0) {
                this.cart.push(itemToAdd)
            } else {
                this.cart[indexInCart].count = this.cart[indexInCart].count + itemToAdd.count
            }
        },
        deleteFromCart(id) {
            this.cart = this.cart.filter(it => it.id !== id)
        },
        plusCount(id) {
            const index = this.cart.findIndex(it => it.id === id)
            this.cart[index].count += 1
        },
        minusCount(id) {
            const index = this.cart.findIndex(it => it.id === id)
            this.cart[index].count !== 1 ? this.cart[index].count -= 1 : 1
        },
    },
})
