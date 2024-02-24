<template>
    <div class="p-6 flex space-x-2 bg-amber-50 rounded-md ">
        <img :src="item.photo" class="w-48 h-48" />
        <div class="flex-1 flex flex-col justify-between ml-2">
            <span class="text-gray-800 font-bold">{{ item.name }}</span>
            <div class="">
                <small class="text-sm text-gray-600">{{ item.description }}</small>
            </div>
            <p class="mt-4 text-lg text-gray-900">{{ item.price }} руб.</p>
            <div class="flex justify-between">
                <div class="flex bg-white">
                    <div class="p-2">{{ item.count }}</div>
                    <button type="button" class="p-2" @click="itemStore.minusCount(item.id)">-</button>
                    <button type="button" class="p-2" @click="itemStore.plusCount(item.id)">+</button>
                </div>
                <button type="button" class="p-2">Добавить</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useItemStore } from '../Stores/ItemStore'

defineProps(['item'])

const itemStore = useItemStore()
</script>
