<template>
   <div class="Town">
      <LongTitle text="Navaluenga" />
      <div class="Wrapper">
         <div class="LeftSection">
            <div class="TextWrapper">
               <p>Navaluenga es un pueblo con mucho encanto, ideal para pasear, y disfrutar del entorno.</p>
               <p>La finca se encuentra muy cerca de las piscinas naturales del río Alberche, a los pies de la Sierra de
                  Gredos.</p>
            </div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2516390317824!2d-4.710614887078281!3d40.403275871322755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd405d6db1e065a1%3A0x8799a13e9dbbf4c6!2sFINCA%20%22El%20VENERO%22!5e0!3m2!1ses!2ses!4v1793480040060!5m2!1ses!2ses"
               width="50%" height="210px" style="border:0" allowfullscreen="" loading="lazy"
               referrerpolicy="no-referrer-when-downgrade" />
            <img class="Illustration" :src="require('@/assets/imgs/icons/sign.webp')" />
         </div>
         <div class="VerticalGalleryWrapper">
            <div class="VerticalGallery">
               <img class="Photo" :src="require('@/assets/imgs/town/1.webp')" />
               <img class="Photo" :src="require('@/assets/imgs/town/2.webp')" />
               <img class="Photo" :src="require('@/assets/imgs/town/3.webp')" />
               <img class="Photo" :src="require('@/assets/imgs/town/4.webp')" />
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

      // .LeftSection {

      // }

      p {
         line-height: 1.6rem;
      }

      p+p {
         margin-top: 1rem;
      }

      iframe {
         border-radius: 1rem;
         margin-left: 10rem;
         transform: translateY(-2rem);
      }

      .Illustration {
         height: 180px;
         transform: translateX(-1rem) translateY(-2rem);
      }

      .TextWrapper {
         background: #faf7f2;
         padding: 2rem;
         height: fit-content;
      }

      .VerticalGalleryWrapper {
         // width: 10rem;
         // position: relative;

         .VerticalGallery {
            background: $white;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 10rem;
            transform: translateY(-2rem);
            // position: absolute;
            // right: 0;
            // top: -2rem;
         }
      }
   }


}
</style>
