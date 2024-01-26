<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" :alt="product.title" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="my-4 font-bold text-2xl">{{ product.title }}</h2>
        <p class="text-gray-500 my-4">{{ product.description }}</p>
        <p class="text-gray-500 my-4">{{ product.category }}</p>
        <p class="text-gray-500 my-4">Price - ${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<style scoped>
    img {
        max-width: 16rem;
    }
</style>