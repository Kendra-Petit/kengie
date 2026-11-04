<template>
   <div class="Divider">
      <div class="Diamond" />
      <div class="Diamond" />
   </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
   name: 'Divider',
   props: {
      extraDiamond: VueTypes.bool.def(false),
   },
}
</script>

<style scoped lang="scss">
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Divider {
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   margin: 40px 0;

   &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: 1px;
      background-color: $primary;
   }

   .Diamond {
      position: relative;
      z-index: 1;
      background-color: $primary;
      width: 7px;
      height: 7px;
      transform: rotate(45deg);
   }
}
</style>
