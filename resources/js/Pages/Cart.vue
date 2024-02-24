<template>
    <div class="flex flex-col mx-auto gap-4 container">
        <div v-if="cartStore.totalCount > 0">
            <div class="text-2xl font-bold p-2 text-center">Ваш заказ:</div>
            <ItemCard v-for="item in cartStore.cart" :key="item.id" :item="item" :isForCart="true"/>
            <div class="flex justify-end mt-4 bg-amber-100 font-bold rounded-md p-4">
                <div class="p-2">Всего: {{ cartStore.totalCount }} руб.</div>
                <router-link to="/order" class="p-2 bg-white rounded-md">Оформить заказ</router-link>
            </div>
        </div>
        <div v-else>
            <div class="text-xl font-bold p-2 text-center">Your cart is empty</div>
        </div>
    </div>
</template>

<script setup>
import ItemCard from '../Components/ItemCard.vue'
import { ref, onMounted } from 'vue';
import { useCartStore } from '../Stores/CartStore'

const cartStore = useCartStore()
</script>
