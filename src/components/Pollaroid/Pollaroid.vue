<template>
   <div class="Pollaroid">
      <img class="Photo" :src="require(`@/assets/imgs/${this.img}`)" />
   </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
   name: 'Pollaroid',
   props: {
      img: VueTypes.string,
   },

}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Pollaroid {
   width: 70%;
   min-height: 350px;
   background: white;
   padding: 12px;
   padding-bottom: 28px;
   display: flex;
   flex-direction: column;
   box-shadow:
      0 2px 5px rgba(0, 0, 0, 0.12),
      0 8px 18px rgba(0, 0, 0, 0.10);

   .Photo {
      width: 100%;
      flex: 1;
      min-height: 0;
      object-fit: cover;
   }
}
</style>
