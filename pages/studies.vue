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

import exo1Image from '~/assets/studies/exo1.jpg';
import exo2Image from '~/assets/studies/exo2.jpg';
import exo3Image from '~/assets/studies/exo3.png';
import exo4Image from '~/assets/studies/exo4.jpg';

export default defineComponent({
  name: 'ArtPortfolio',
  components: {
    Art,
  },
  data() {
    return {
      artworks: [
        {
          imagePath: exo2Image,
          name: 'Exo2',
          description: 'Exercising.',
          date: '2024-02-04',
        },
        {
          imagePath: exo3Image,
          name: 'Exo3',
          description: 'Exercising',
          date: '2024-02-01',
        },
        {
          imagePath: exo4Image,
          name: 'Exo4',
          description: 'Exercising?',
          date: '2024-03-01',
        },
        {
          imagePath: exo1Image,
          name: 'Exo1',
          description: 'Exercising!',
          date: '2023-08-30',
        },
      ],
    };
  },
});
</script>
