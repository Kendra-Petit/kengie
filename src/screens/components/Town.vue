<template>
   <div class="Town">
      <LongTitle text="Navaluenga" />
      <div class="Wrapper">
         <div class="LeftSection">
            <div class="TextWrapper" :style="{
               '--paper-image': `url(${require('@/assets/imgs/hoja.webp')})`
            }">
               <p>Navaluenga es un pueblo con mucho encanto, ideal para pasear, y disfrutar del entorno.</p>
               <p>La finca está muy cerca de las piscinas naturales del río Alberche, a los pies de la Sierra de
                  Gredos.</p>
            </div>
            <div class="MapWrapper">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2516390317824!2d-4.710614887078281!3d40.403275871322755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd405d6db1e065a1%3A0x8799a13e9dbbf4c6!2sFINCA%20%22El%20VENERO%22!5e0!3m2!1ses!2ses!4v1793480040060!5m2!1ses!2ses"
                  width="50%" height="210px" style="border:0" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" />
               <img class="Illustration" :src="require('@/assets/imgs/icons/sign.webp')" />
            </div>
         </div>
         <div class="VerticalGalleryWrapper">
            <div class="VerticalGallery">
               <img class="Photo" :src="require('@/assets/imgs/town/1.webp')" />
               <img class="Photo" :src="require('@/assets/imgs/town/2.webp')" />
               <img class="Photo" :src="require('@/assets/imgs/town/3.webp')" />
               <img class="Photo" :src="require('@/assets/imgs/town/4.webp')" />
            </div>
            <div class="MapWrapper outside">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2516390317824!2d-4.710614887078281!3d40.403275871322755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd405d6db1e065a1%3A0x8799a13e9dbbf4c6!2sFINCA%20%22El%20VENERO%22!5e0!3m2!1ses!2ses!4v1793480040060!5m2!1ses!2ses"
                  width="50%" height="210px" style="border:0" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" />
               <img class="Illustration" :src="require('@/assets/imgs/icons/sign.webp')" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { LongTitle } from '@/components'

export default {
   name: 'Town',
   components: {
      LongTitle,
   },
   data() {
      return {
         // venueImages: [
         //    { image: "1", path: pathMain, ext },
         //    { image: "2", path: pathMain, ext },
         //    { image: "3", path: pathMain, ext },
         //    { image: "4", path: pathMain, ext },
         // ]
      }
   }
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Town {
   .Title {
      margin-bottom: 1.5rem;
   }

   .Wrapper {
      display: flex;
      position: relative;

      @media (max-width: $md) {
         flex-direction: column;
      }

      .LeftSection {
         .MapWrapper {
            @media (max-width: $md) {
               display: none;
            }
         }

      }

      p {
         line-height: 1.6rem;
      }

      p+p {
         margin-top: 1rem;
      }

      .TextWrapper {
         padding: 2rem;
         padding-bottom: 3rem;
         height: fit-content;

         // background-size: cover;
         // background-position-y: top;
         box-shadow: 0px 3px 20px rgba(#333, 0.2);

         position: relative;
         isolation: isolate;
         background: $white;

         &::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: var(--paper-image);
            background-size: cover;
            background-position: center;
            opacity: 0.7;
            z-index: -1;
         }
      }

      .VerticalGalleryWrapper {
         display: flex;
         align-items: flex-end;


         .VerticalGallery {
            background: $white;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 10rem;
            transform: translateY(-2rem);
            z-index: 7;

            @media (max-width: $md) {
               transform: translateY(-2rem) translateX(1rem);
            }
         }
      }
   }

   .MapWrapper {
      display: flex;
      align-items: flex-end;

      iframe {
         border-radius: 1rem;
         margin-left: 10rem;
         transform: translateY(-2rem);

         @media (max-width: $lg) {
            margin-left: 4rem;
            transform: translateY(-2rem);
         }

         @media (max-width: $md) {
            transform: translateY(0) translateX(0);
            height: 320px;
            width: 98%;
            border-radius: 0 1rem 1rem 0;
            margin: 0;
         }
      }

      .Illustration {
         height: 180px;
         transform: translateX(-1rem) translateY(-2rem);

         @media (max-width: $md) {
            display: none;
         }
      }

      &.outside {
         display: none;

         @media (max-width: $md) {
            transform: translateY(-2rem);
            height: 100%;
            display: block;
         }

         @media (max-width: $sm) {
            transform: translateY(-2rem);
            height: 100%;
         }
      }
   }
}
</style>
