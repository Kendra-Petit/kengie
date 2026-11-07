<template>
   <h3 class="LongTitle">
      {{ text }}
   </h3>
</template>

<script>
import VueTypes from 'vue-types'
export default {
   name: 'LongTitle',
   props: {
      text: VueTypes.string,
   },
}
</script>

<style scoped lang="scss">
@import '@/theme/_breakpoints.scss';
@import "@/theme/_variables.scss";

.LongTitle {
   position: relative;
   display: table;
   margin: 0; // Alineado a la izquierda
   padding-bottom: 3px;
   border-bottom: 1px solid $primary;
   margin-bottom: 22px;
   padding-right: 8px;

   &::before {
      content: "";
      position: absolute;
      bottom: 0-1px;
      right: 100%;
      width: calc((100vw - 100%) / 2);
      height: 1px;
      background-color: $primary;
   }

   &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      right: -2px;
      width: 7px;
      height: 7px;
      background-color: $primary;
      transform: rotate(45deg);
   }

   @media (max-width: $sm) {
      // font-size: 1.6rem;
      // line-height: 2.2rem;
   }

   font-size: 2rem;
   font-family: $font-family-title;
   font-weight: $font-weight-normal;
   letter-spacing: 2px;
}
</style>
