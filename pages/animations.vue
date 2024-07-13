<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Art
        v-for="(art, index) in artworks"
        :key="index"
        :imagePath="art.imagePath"
        :name="art.name"
        :description="art.description"
        :date="art.date"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Art from '@/components/Art.vue';

import frogImage from '~/assets/animations/frog.gif';

export default defineComponent({
  name: 'ArtPortfolio',
  components: {
    Art,
  },
  data() {
    return {
      artworks: [
        {
          imagePath: frogImage,
          name: 'Frog',
          description: 'My first animation, a frog!',
          date: '2023-03-08',
        }
      ],
    };
  },
});
</script>
