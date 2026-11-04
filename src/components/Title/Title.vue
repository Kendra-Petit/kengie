<template>
   <h3 class="Title">
      {{ text }}
   </h3>
</template>

<script>
import VueTypes from 'vue-types'
export default {
   name: 'Title',
   props: {
      text: VueTypes.string,
   },
}
</script>

<style scoped lang="scss">
@import '@/theme/_breakpoints.scss';
@import "@/theme/_variables.scss";

.Title {
   // font-size: 2.2rem;
   // line-height: 2.5rem;
   margin-bottom: .5rem;

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
