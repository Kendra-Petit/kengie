<template>
   <div class="Venue">
      <div class="SectionWrapper">
         <LongTitle text="La Finca" />
         <Pollaroid img="venue.webp" />
      </div>
      <SplidePollaroid :items="venueImages" :autoWidthProp="true" />
   </div>
</template>

<script>
import { LongTitle, Pollaroid, SplidePollaroid } from '@/components'
const pathMain = "venue";
const ext = ".webp";

export default {
   name: 'Venue',
   components: {
      LongTitle,
      Pollaroid,
      SplidePollaroid
   },
   data() {
      return {
         venueImages: [
            { image: "finca", path: pathMain, ext, label: 'Finca', },
            { image: "coctail", path: pathMain, ext, isVertical: true },
            { image: "party", path: pathMain, ext, label: 'Salón de fiesta' },
            { image: "pool", path: pathMain, ext, label: 'Piscina', },
            { image: "garden", path: pathMain, ext },
            { image: "place", path: pathMain, ext },
         ]
      }
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Venue {
   .Pollaroid {
      width: 100%;
      padding-bottom: 12px;
      margin-bottom: 1rem;
   }
}
</style>
