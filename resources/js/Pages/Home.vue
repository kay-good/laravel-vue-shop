<template>
    <div class="flex flex-col mx-auto gap-4 container">
        <ItemCard v-for="item in itemStore.items" :key="item.id" :item="item"/>
    </div>
</template>
<script setup>
import ItemCard from '../Components/ItemCard.vue'
import { ref, onMounted } from 'vue';
import { useItemStore } from '../Stores/ItemStore'

const itemStore = useItemStore()

onMounted(() => {
    itemStore.fill()
});
</script>
