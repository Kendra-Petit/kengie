<template>
   <div class="Cover">
      <div class="Wrapper">
         <img class="Desktop" src="imgs/LOGO_color.webp" />
         <img class="Mobile" src="imgs/LOGO_color.webp" />
      </div>
   </div>
</template>

<script>
export default {
   name: 'Cover',
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Cover {
   display: flex;
   justify-content: center;
   align-items: center;

   .Wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      max-width: 80%;
      padding: 4rem 0;

      @media (min-width: $md) {
         max-width: 300px;
      }

      @media (min-width: $lg) {
         max-width: 400px;
         padding: 6rem 0;
      }

      @media (min-width: $xl) {
         max-width: 500px;
         padding: 7rem 0;
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
