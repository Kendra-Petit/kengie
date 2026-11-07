<template>
   <div class="Intro">
      <div class="ContentWrapper">
         <h2>¡Nos casamos!</h2>
         <Pollaroid img="cover.webp" />

         <Note>
            <template>
               <div class="TextBlock">
                  <h3 class="Title">
                     9-11 JULIO 2027
                  </h3>
                  <p class="Text">
                     Todo un fin de semana para celebrar juntos
                  </p>
               </div>
               <div class="TextBlock">
                  <h3 class="Title">
                     NAVALUENGA
                  </h3>
                  <p class="Text">
                     Finca El Venero
                  </p>
               </div>
               <div class="TextBlock">

                  <p class="Text">
                     Una boda muy a nuestro estilo :)
                  </p>
               </div>
            </template>
         </Note>
      </div>
   </div>
</template>

<script>
import { Note, Pollaroid } from '@/components'

export default {
   name: 'Intro',
   components: {
      Note,
      Pollaroid,
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Intro {
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;

   @media (max-width: $md) {
      flex-direction: column;
      padding-top: 1rem !important;
   }

   .ContentWrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 60%;
      margin-right: 5rem;
      position: relative;

      @media (max-width: $lg) {
         margin-right: 2rem;
      }

      @media (max-width: $md) {
         margin-right: 0;
         width: 100%;
         // margin-bottom: 2rem;
      }

      @media (max-width: $sm) {
         margin-bottom: 0;
      }

      h2 {
         font-size: 3rem;
         font-family: $font-family-title;
         font-weight: $font-weight-normal;
         letter-spacing: 3px;

         @media (max-width: $md) {
            text-align: center;
         }
      }

      .Pollaroid {
         @media (max-width: $md) {
            width: 100%;
         }
      }

      .Note {
         width: 40%;
         position: absolute;
         right: 0;
         top: -3rem;

         @media (max-width: $md) {
            width: 70%;
            position: relative;
            left: -1.2rem;
            top: -3rem;
            align-self: flex-end;
         }
      }

   }
}
</style>
