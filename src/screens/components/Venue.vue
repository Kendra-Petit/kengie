<template>
   <div class="Venue">
      <div class="SectionWrapper">
         <LongTitle text="La Finca" />
         <Pollaroid img="venue.webp" @click.native="openModal = true" />
      </div>
      <SplidePollaroid :items="venueImages" :autoWidthProp="true" />
      <Modal v-if="openModal" @close="openModal = false">
         <template #body>
            <img class="ModalPhoto" :src="require(`@/assets/imgs/venue.webp`)" />
         </template>

      </Modal>
   </div>
</template>

<script>
import { LongTitle, Pollaroid, SplidePollaroid, Modal } from '@/components'
const pathMain = "venue";
const ext = ".webp";

export default {
   name: 'Venue',
   components: {
      LongTitle,
      Pollaroid,
      SplidePollaroid,
      Modal
   },
   data() {
      return {
         openModal: false,
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

   .ModalPhoto {
      width: 100%;
      margin-top: 40px;
      border-radius: 20px;

      @media (max-width: $md) {
         margin-top: 20px;
      }
   }
}
</style>
