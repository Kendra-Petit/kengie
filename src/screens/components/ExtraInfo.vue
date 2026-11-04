<template>
   <div class="ExtraInfo">
      <LongTitle text="Información Util" />
      <div class="Wrapper">
         <Note :hideTape="true">
            <template>
               <div class="NotesWrapper">
                  <img class="Illustration hat" :src="require('@/assets/imgs/icons/hat.webp')" />
                  <p class="Title">Dress Code</p>
                  <ul class="Calendar">
                     <li>
                        <span>Viernes</span>
                        <div>
                           <p><b>Preboda</b></p>
                           <p>Informal</p>
                        </div>
                     </li>
                     <li>
                        <span>Sábado</span>
                        <div>
                           <p><b>Ceremonia y fiesta</b></p>
                           <p>Tipo cóctel</p>
                        </div>
                     </li>
                     <li>
                        <span>Domingo</span>
                        <div>
                           <p>Ropa cómoda y deportiva.</p>
                           <p>Traje de baño</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </template>
         </Note>
         <Note :hideTape="true">
            <template>
               <div class="NotesWrapper">
                  <img class="Illustration bag" :src="require('@/assets/imgs/icons/bag.webp')" />
                  <p class="Title">Qué llevar</p>
                  <ul class="List">
                     <li>
                        <p>traje de baño, toalla, cholas, protector solar</p>
                     </li>
                     <li>
                        <p>Algo de abrigo para la noche.</p>
                     </li>
                     <li>
                        <p>Espejos y luces para maquillaje.</p>
                     </li>
                  </ul>
               </div>
            </template>
         </Note>

      </div>
   </div>
</template>

<script>
import { LongTitle, Note } from '@/components'
export default {
   name: 'ExtraInfo',
   components: {
      LongTitle,
      Note,
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.ExtraInfo {
   .Wrapper {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;

      @media (max-width: $lg) {
         grid-template-columns: 1fr;
         row-gap: 3rem;
      }


      .Note {
         &::v-deep .Paper {
            background-position-y: top;
            padding: 20px;
            display: flex;
            // align-items: flex-start;
         }

         .NotesWrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            position: relative;
            width: 100%;

            .Illustration {
               height: 5rem;
               width: auto;
               flex: 1;

               &.hat {
                  position: absolute;
                  top: -27px;
                  right: -27px;
               }

               &.bag {
                  position: absolute;
                  bottom: -40px;
                  right: 0px;
                  height: 6rem;
               }

            }

            .Calendar {
               margin-top: 10px;
               margin-bottom: 10px;

               li {
                  display: flex;
                  list-style: none;

                  &+li {
                     margin-top: 1.3rem;
                  }

                  span {
                     width: 7rem;
                     padding-right: 20px;
                     border-right: 1px solid $primary;
                     margin-right: 20px;
                     font-weight: bold;
                     text-transform: uppercase;

                  }

                  p+p {
                     margin-top: 8px;
                  }
               }
            }

            .List {
               li {
                  list-style: none;

                  &+li {
                     margin-top: 1rem;
                  }
               }
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
