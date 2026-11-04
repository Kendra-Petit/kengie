<template>
   <div class="FinalCover">
      <Title text="porque cuando se encuentra la pareja ideal," />
      <Title text="un buen bailarín no la suelta jamás." />
      <div class="Wrapper">
         <img class="Desktop" src="imgs/LOGO_color.webp" />
         <img class="Mobile" src="imgs/LOGO_color.webp" />
      </div>
   </div>
</template>

<script>
import { Title } from '@/components'

export default {
   name: 'FinalCover',
   components: {
      Title,
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.FinalCover {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 4rem;

   .Title {
      text-align: center;
   }

   .Wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      max-width: 80%;
      padding: 3rem 0;

      @media (min-width: $md) {
         max-width: 200px;
      }

      @media (min-width: $lg) {
         max-width: 300px;
         padding: 3rem 0;
      }

      @media (min-width: $xl) {
         max-width: 400px;
         padding: 3rem 0;
      }

      img {
         display: block;
         width: 100%;
      }

      .Desktop {
         @media (max-width: $md) {
            display: none;
         }
      }

      .Mobile {
         display: none;

         @media (max-width: $md) {
            width: 100%;
            display: block;
         }
      }
   }
}
</style>
