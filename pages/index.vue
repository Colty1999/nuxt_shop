<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    useSeoMeta({
      title: "Nuxt Shop",
      ogTitle: "Nuxt Shop",
      //   description: "This is my amazing site, let me tell you all about it.",
      //   ogDescription: "This is my amazing site, let me tell you all about it.",
      //   ogImage: "https://example.com/image.png",
      //   twitterCard: "summary_large_image",
    });
    // const state = reactive({
    //   name: "Hello World",
    // });
    // return { ...toRefs(state) };
    const name = ref<string>("Hello World");
    return { name };
  },
  methods: {
    changeName(name: string): string {
      this.name = name;
      return name;
    },
  },
});
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
