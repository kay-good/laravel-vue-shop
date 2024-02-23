<template>
    <div>
        <h1>Vue Router Demo App</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/cart">Your Cart</router-link>
        <router-link to="/order">Order</router-link>
        <router-view />
    </div>
</template>
<script>
export default {}
</script>
