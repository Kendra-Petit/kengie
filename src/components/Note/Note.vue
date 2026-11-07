<template>
   <div class="Note">
      <div class="Paper" :style="{ backgroundImage: `url(${require(`@/assets/imgs/paper.webp`)})` }">
         <img v-if="!this.hideTape" class="Tape" :src="require('@/assets/imgs/tape.webp')" />
         <slot />
      </div>
   </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
   name: 'Note',
   props: {
      hideTape: VueTypes.bool.def(false),
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Note {
   display: flex;
   justify-content: flex-end;
   width: 100%;

   .Paper {
      width: 100%;
      background-size: cover;
      background-position-y: bottom;
      padding: 40px 24px;
      position: relative;
      background-color: transparent;

      .Tape {
         z-index: 2;
         position: absolute;
         top: -10px;
         width: 40%;
         left: 30%;

         // @media (min-width: $md) {
         //    width: 200px;
         //    top: -20px;
         //    left: 40%;
         // }
      }

      .TextBlock+.TextBlock {
         margin-top: 26px;
      }

      .Title {
         font-size: 2rem;
         line-height: 2.5rem;
         font-weight: $font-weight-light;
         font-family: $font-family-title;
         letter-spacing: 1px;
         margin-bottom: 0;
      }

      .Text {
         font-size: 1rem;
         line-height: 1.2rem;
         font-weight: $font-weight-light;
      }
   }
}
</style>
