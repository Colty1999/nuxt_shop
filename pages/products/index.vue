<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Product from "~/types/Product";
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);

// const products = ref<Product[]>([]);
// onMounted(async () => {
//   const { data } = await useFetch<Product[]>(
//     "https://fakestoreapi.com/products"
//   );
//   products.value = data;
// });
// console.log(products);
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
p {
  margin: 1rem 0;
}
</style>
