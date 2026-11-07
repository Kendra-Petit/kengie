<template>
   <div class="SplidePollaroid">
      <Splide :options="sliderOptions">
         <SplideSlide v-for="({ image, ext, path, isVertical }, itemIndex) in items || []" :key="`image-${itemIndex}`">
            <Pollaroid :img="`${path}/${image}${ext ? ext : '.webp'}`" :class="{ isVertical }"
               @click.native="openModal = `${path}/${image}.webp`" />
         </SplideSlide>
      </Splide>
      <Modal v-if="openModal !== null" @close="openModal = null">
         <template #body>
            <img class="ModalPhoto" :src="require(`@/assets/imgs/${openModal}`)" />
         </template>

      </Modal>

   </div>
</template>

<script>
import VueTypes from 'vue-types'
import { Pollaroid, Modal } from '@/components'
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
   name: 'SplidePollaroid',
   components: {
      Splide,
      SplideSlide,
      Pollaroid,
      Modal,
   },
   data() {
      return {
         openModal: null,
      };
   },
   props: {
      items: VueTypes.array,
      heightAuto: VueTypes.bool,
      useArrows: VueTypes.bool,
      autoWidthProp: VueTypes.bool,
      customSpliderOptions: VueTypes.object,
   },
   computed: {
      sliderOptions() {
         return {
            perMove: 1,
            width: "100%",
            gap: "1rem",
            perPage: 3,
            pagination: false,
            autoplay: true,
            interval: 8000,
            type: "loop",
            start: 2,
            arrows: this.useArrows,
            focus: 'center',
            autoWidth: this.autoWidthProp,
            ...this.customSpliderOptions,
         };
      },
   },
}
</script>

<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.SplidePollaroid {
   width: 100%;

   .Modal {
      .ModalPhoto {
         width: 100%;
         margin-top: 40px;
         border-radius: 20px;

         @media (max-width: $md) {
            margin-top: 20px;
         }
      }
   }

   .Pollaroid {
      width: 100%;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      margin-bottom: 1rem;

      @media (max-width: $sm) {
         padding: 8px;
         padding-bottom: 20px;
      }
   }

   &::v-deep .splide {
      width: 100%
   }

   &::v-deep .splide__track {
      padding: 0;

      .splide__list {
         align-items: center;
         margin-bottom: 4px !important;
      }

      .splide__slide {
         height: 15rem;
         width: 15rem !important;
         transition: all 0.5s;

         @media (max-width: $sm) {
            height: 10rem;
            width: 10rem !important;
            margin-right: 12px !important;
         }
      }
   }
}
</style>
<style lang="postcss">
.splide__track {
   padding: 20px 0;
}

.splide__arrows {

   button {
      background: none !important;

      svg {
         width: 60px !important;
         height: 60px !important;
         fill: white !important;
      }
   }
}

.splide__pagination {
   bottom: -40px;
   width: 100%;
   z-index: 99;

   .splide__pagination__page {
      width: 10px !important;
      height: 10px !important;
   }
}
</style>
