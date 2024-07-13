<template>
  <div class="art-container mb-4">
    <img :src="imagePath" alt="Art image" class="w-full h-auto object-cover rounded" />
    <h3 class="text-xl font-bold mt-2">{{ name }}</h3>
    <p class="text-gray-600">{{ description }}</p>
    <p class="text-sm text-gray-400">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Art',
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.art-container {
  transition: transform 0.2s;
}
.art-container:hover {
  transform: scale(1.02);
}
</style>
