<template>
   <div class="Planning">
      <Title text="Tres días para celebrar" />
      <p class="Text">
         Naturaleza, juegos, comida, música, piscina,
         y las personas que queremos.
      </p>
      <div class="Wrapper">
         <div class="BoxContainer">
            <Note>
               <template>
                  <div class="NoteWrapper">
                     <h3 class="Title">
                        Viernes
                     </h3>
                     <img class="Illustration" :src="require('@/assets/imgs/icons/hat.webp')" />
                     <ul class="Calendar">
                        <li>
                           <span>17h</span>
                           <p>check-in & bienvenida</p>
                        </li>
                        <li>
                           <span>19h</span>
                           <p>preboda</p>
                        </li>
                     </ul>
                  </div>
               </template>
            </Note>
         </div>
         <div class="BoxContainer">
            <Note>
               <template>
                  <div class="NoteWrapper">
                     <h3 class="Title">
                        Sábado
                     </h3>
                     <img class="Illustration" :src="require('@/assets/imgs/icons/toast.webp')" />
                     <ul class="Calendar">
                        <li>
                           <span>8h</span>
                           <p>Desayuno</p>
                        </li>
                        <li>
                           <span>12h</span>
                           <p>Picina</p>
                        </li>
                        <li>
                           <span>13h</span>
                           <p>Almuerzo</p>
                        </li>
                        <li class="mt-3">
                           <span>16h</span>
                           <p>Bienvenida</p>
                        </li>
                        <li>
                           <span>17h</span>
                           <p>Ceremonia de matrimonio</p>
                        </li>
                        <li>
                           <span>18h</span>
                           <p>Cóctel</p>
                        </li>
                        <li>
                           <span>19h</span>
                           <p>Comida</p>
                        </li>
                        <li>
                           <span>20h</span>
                           <p>Fiesta</p>
                        </li>
                        <li>
                           <span>1h</span>
                           <p>Fin</p>
                        </li>
                     </ul>
                  </div>
               </template>
            </Note>
         </div>
         <div class="BoxContainer">
            <Note>
               <template>
                  <div class="NoteWrapper">
                     <h3 class="Title">
                        Domingo
                     </h3>
                     <img class="Illustration" :src="require('@/assets/imgs/icons/ball.webp')" />
                     <ul class="Calendar">
                        <li>
                           <span>8h</span>
                           <p>Desayuno</p>
                        </li>
                        <li>
                           <span>12h</span>
                           <p>Kickingball de agua</p>
                        </li>
                        <li>
                           <span>14h</span>
                           <p>Almuerzo</p>
                        </li>
                        <li>
                           <span>16h</span>
                           <p>Check-out</p>
                        </li>
                     </ul>
                  </div>
               </template>
            </Note>
         </div>
      </div>
      <p class="Text">
         <i>El itinerario puede estar sujeto a cambios.</i>
      </p>
      <div class="ExtraNotes">
         <Note :hideTape="true">
            <template>
               <div class="ExtraNotesWrapper">
                  <img class="Illustration" :src="require('@/assets/imgs/icons/coffee.webp')" />
                  <p class="Text">
                     Los <b>desayunos</b> estarán disponibles en la cocina de la casa 2 de 8h a 11h.
                  </p>
               </div>
            </template>
         </Note>
         <Note :hideTape="true">
            <template>
               <div class="ExtraNotesWrapper">
                  <img class="Illustration" :src="require('@/assets/imgs/icons/fire.webp')" />
                  <p class="Text">
                     Siéntete libre de participar en las actividades que te apetezcan
                  </p>
               </div>
            </template>
         </Note>
      </div>
   </div>
</template>

<script>
import { Title, Note } from '@/components'

export default {
   name: 'Planning',
   components: {
      Title,
      Note
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

.Planning {

   .Title {
      text-align: center;
   }

   .Text {
      text-align: center;
      line-height: 1.3rem;
      width: 70%;
      align-self: center;
      margin: 0 auto 20px auto;
   }

   .Wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1.5rem;
      margin-top: 2.5rem;
      margin-bottom: 1rem;

      @media (max-width: $md) {
         grid-template-columns: 1fr;
         row-gap: 1.5rem;
      }

      .Box {
         border: 2px solid $primary;
         height: 280px;
         margin-bottom: 1rem;
         background-size: cover;
         background-position: center;
         transition: all .3s ease-in-out;

         &:hover {
            transform: scale(1.05);
            border: 4px solid $primary;
         }

         @media (max-width: $md) {
            height: 250px;
            margin-bottom: .5rem;
         }
      }

      .NoteWrapper {
         display: flex;
         flex-direction: column;
         align-items: center;

         .Illustration {
            height: 3rem;
            width: auto;
            margin: 0 auto 10px auto;
         }

         .Calendar {
            margin-top: 10px;
            margin-bottom: 10px;

            li {
               display: flex;
               list-style: none;
               margin-bottom: 10px;

               &.mt-3 {
                  margin-top: 30px;
               }

               span {
                  width: 40px;
                  padding-right: 20px;
                  border-right: 1px solid $primary;
                  margin-right: 20px;
               }
            }
         }
      }
   }

   .ExtraNotes {
      display: flex;
      gap: 20px;


      .Note {
         &::v-deep .Paper {
            background-position-y: top;
            padding: 20px;
            display: flex;
            align-items: center;
         }

         .ExtraNotesWrapper {
            display: flex;
            align-items: center;
            gap: 20px;

            .Illustration {
               height: 4rem;
               width: auto;
               flex: 1;
            }

            .Text {
               width: auto;
               margin: 0;
               text-align: left;
            }
         }


      }


   }
}
</style>
