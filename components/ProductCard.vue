
import productsVue from '~/layouts/products.vue';
<template>
    <div class="card text-center">
        <div class="thumb"><img :src="product.image" :alt="product.title"/></div>
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
    height: 6rem;
    max-width: 70%;
    margin: 0 auto;
}
img {
    height: 100%;
    width: 100%;
    object-fit:contain;
}
</style>