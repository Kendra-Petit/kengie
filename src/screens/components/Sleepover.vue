<template>
   <div class="Sleepover">
      <div class="SectionWrapper">
         <LongTitle text="¿Te quedas a dormir?" />
         <div class="Wrapper">
            <div class="FirstSection">
               <img class="Illustration" :src="require('@/assets/imgs/icons/houses.webp')" />

               <div>

                  <p>La finca que hemos reservado cuenta con <b>tres casas rurales</b> dentro del mismo recinto, para que
                     podamos
                     disfrutar juntos de todo el fin de semana.</p>
                  <p class="repetido">Las casas tienen habitaciones de 3, 4 y 5 personas, y el alojamiento <b>cuesta 80 €
                        por persona por
                        las
                        dos noches</b> (del viernes al domingo).</p>
               </div>

            </div>
            <div>

               <p class="repetido outside">Las casas tienen habitaciones de 3, 4 y 5 personas, y el alojamiento <b>cuesta
                     80
                     € por persona por
                     las
                     dos noches</b> (del viernes al domingo).</p>
               <p>La finca tiene zonas de descanso de sobra para cuando necesites desconectar, recargar la batería social y
                  volver a compartir cuando te apetezca.
               </p>
               <p>Si te gustaría quedarte a dormir en la finca, <b>indícanoslo al confirmar tu asistencia</b>, y más
                  adelante
                  te contaremos cómo quedarán organizadas las habitaciones.</p>
               <p>Y si prefieres buscar alojamiento por tu cuenta o venir únicamente el sábado, ¡no hay ningún problema!
                  Estaremos encantadas de compartir ese día contigo.</p>
            </div>
         </div>
      </div>
      <SplidePollaroid :items="hotelImages" :autoWidthProp="true" />
   </div>
</template>

<script>
import { LongTitle, SplidePollaroid } from '@/components'
const pathMain = "rooms";
const ext = ".webp";

export default {
   name: 'Sleepover',
   components: {
      LongTitle,
      SplidePollaroid,
   },
   data() {
      return {
         hotelImages: [
            { image: "1", path: pathMain, ext, label: 'Habitación triple' },
            { image: "2", path: pathMain, ext, label: 'Habitación' },
            { image: "3", path: pathMain, ext, label: 'Baño' },
            { image: "4", path: pathMain, label: 'Baño' },
            { image: "5", path: pathMain, ext, label: 'Comedor' },
         ]
      }
   }
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Sleepover {
   .Title {
      margin-bottom: 1.5rem;
   }

   .SplidePollaroid {
      margin-top: 1rem;
   }

   .Wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .repetido.outside {
         display: none;

         @media (max-width: $lg) {
            display: block;
         }
      }

      .FirstSection {
         display: flex;
         gap: 20px;

         .repetido {
            @media (max-width: $lg) {
               display: none;
            }
         }
      }

      img {
         height: 4rem;

         width: auto;
         flex: 1;

         // @media (max-width: $md) {
         //    height: 2rem
         // }
      }

      p {
         line-height: 1.6rem;
      }

      p+p {
         margin-top: 1rem;
      }
   }

}
</style>
