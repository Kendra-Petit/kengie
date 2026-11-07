<template>
   <div class="Gift">
      <Title text="Regalos" />
      numero de cuenta
   </div>
</template>

<script>
import { Title } from '@/components'

export default {
   name: 'Gift',
   components: {
      Title,
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Gift {}
</style>
