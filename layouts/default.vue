<template>
  <div>
    <header>
      <nav>
        <li><NuxtLink to="/">Nuxt Shop</NuxtLink></li>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b448;
}
</style>
