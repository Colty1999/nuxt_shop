<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
import Product from '~/types/Product';

    const { id } : {id?: string} = useRoute().params;
    const uri = `https://fakestoreapi.com/products/${id}`;
    const { data: product } = await useFetch<Product>(uri, {key: id});
    definePageMeta({
      layout: "products",
    });
</script>
