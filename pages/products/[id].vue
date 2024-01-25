<template>
  <div>
    <p>Product: {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
    const { id } = useRoute().params;
</script>
