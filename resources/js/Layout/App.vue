<template>
    <h1 class="text-3xl font-bold p-8 text-center">Mamma Mia Delivery</h1>
    <div class="bg-amber-100 font-bold flex gap-10 justify-center py-2 mb-4 text-gray-700">
        <router-link to="/" active-class="text-amber-500">Home</router-link>
        <router-link to="/cart" active-class="text-amber-500">Your Cart</router-link>
        <router-link to="/order" active-class="text-amber-500">Order</router-link>
    </div>
    <router-view />
</template>
<script setup>

</script>
