<template>
   <div class="SplidePollaroid">
      <Splide :options="sliderOptions">
         <SplideSlide v-for="({ image, ext, path, isVertical }, itemIndex) in items || []" :key="`image-${itemIndex}`">
            <Pollaroid :img="`${path}/${image}${ext ? ext : '.webp'}`" :class="{ isVertical }" />
         </SplideSlide>
      </Splide>
   </div>
</template>

<script>
import VueTypes from 'vue-types'
import { Pollaroid } from '@/components'
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
   name: 'SplidePollaroid',
   components: {
      Splide,
      SplideSlide,
      Pollaroid,
   },
   data() {
      return {
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

   .Pollaroid {
      width: 100%;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      margin-bottom: 1rem;

      // &.isVertical {
      //    width: 5rem;
      // }
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
         // height: auto;
         // width: 100%;
         // min-width: 2rem !important;

         // object-fit: cover;
         width: 15rem !important;
         transition: all 0.5s;
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
