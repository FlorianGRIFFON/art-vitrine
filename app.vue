<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '#imports';

export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      title: 'Clara Garcia',
      meta: [
        { name: 'description', content: 'Clara\'s portfolio' }
      ]
    });

    return {};
  },
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
