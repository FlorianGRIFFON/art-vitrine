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

import fortuneImage from '~/assets/digital-drawings/fortune.jpg';
import exilivianImage from '~/assets/digital-drawings/exilivian.png';
import kataraImage from '~/assets/digital-drawings/katara.png';
import kostarttImage from '~/assets/digital-drawings/kostartt.jpg';
import secretsantaImage from '~/assets/digital-drawings/secretsanta.png';
import leesinImage from '~/assets/digital-drawings/leesin.jpg';
import patchouliImage from '~/assets/digital-drawings/patchouli.png';
import splatoonImage from '~/assets/digital-drawings/splatoon.jpg';
import originalcharacterImage from '~/assets/digital-drawings/originalcharacter.jpg';

export default defineComponent({
  name: 'ArtPortfolio',
  components: {
    Art,
  },
  data() {
    return {
      artworks: [
        {
          imagePath: fortuneImage,
          name: 'Fortune',
          description: 'A depiction of fate and chance.',
          date: '2024-01-01',
        },
        {
          imagePath: exilivianImage,
          name: 'Exilivian',
          description: 'Do it in your style!',
          date: '2024-02-01',
        },
        {
          imagePath: kataraImage,
          name: 'Katara',
          description: 'Fan art of Katara disguised as the Painted Lady --> Character belonging to the Avatar, the Last Airbender license.',
          date: '2024-03-01',
        },
        {
          imagePath: kostarttImage,
          name: 'Kostartt',
          description: 'Do it in your style!',
          date: '2024-04-01',
        },
        {
          imagePath: secretsantaImage,
          name: 'Secret Santa',
          description: 'Illustration for a secret Santa, the goal being to have the themes "Japan" and "Christmas" combined (The illustration must be to the taste of the person to whom it is offered). 1st place 🏆',
          date: '2024-05-01',
        },
        {
          imagePath: leesinImage,
          name: 'Leesin',
          description: 'Fan art of Lee Sin --> Character belonging to the League of Legends license',
          date: '2024-06-01',
        },
        {
          imagePath: patchouliImage,
          name: 'Patchouli',
          description: 'Illustration for a telephone art = challenge in which a first artist creates a drawing and then gives it to the next artist who does the same. As the drawing is passed down and redrawn, it is interpreted and changes naturally with different artistic styles.',
          date: '2024-07-01',
        },
        {
          imagePath: splatoonImage,
          name: 'Splatoon',
          description: 'Fan art of Number 3 --> Character belonging to the Splatoon license.',
          date: '2024-08-01',
        },
        {
          imagePath: originalcharacterImage,
          name: 'Original Character',
          description: 'An original character design concept.',
          date: '2024-09-01',
        },
      ],
    };
  },
});
</script>
