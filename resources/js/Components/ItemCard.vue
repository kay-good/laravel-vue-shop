<template>
    <div class="p-6 flex space-x-6 bg-amber-50 rounded-md ">
        <img :src="item.photo" class="w-48 h-48" />
        <div class="flex-1 flex flex-col justify-between">
            <span class="text-gray-800 font-bold">{{ item.name }}</span>
            <div class="">
                <small class="text-sm text-gray-600">{{ item.description }}</small>
            </div>
            <p class="text-lg text-gray-900">{{ item.price }} руб.</p>
            <div class="flex justify-end">
                <div class="flex bg-white rounded-md">
                    <button type="button" class="p-2" @click="isForCart ? cartStore.minusCount(item.id) : itemStore.minusCount(item.id)">-</button>
                    <div class="p-2">{{ item.count }}</div>
                    <button type="button" class="p-2" @click="isForCart ? cartStore.plusCount(item.id) : itemStore.plusCount(item.id)">+</button>
                </div>
                <button type="button" class="p-2" @click="isForCart ? cartStore.deleteFromCart(item.id) : cartStore.addToCart(item.id)">{{ isForCart ? "Удалить" : "Добавить"}}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useItemStore } from '../Stores/ItemStore'
import { useCartStore } from '../Stores/CartStore'

defineProps(['item', 'isForCart'])

const itemStore = useItemStore()
const cartStore = useCartStore()
</script>
