<template>
  <MainScreen />
</template>

<script>
import MainScreen from '@/screens/MainScreen.vue'

export default {
  name: 'App',
  components: {
    MainScreen,
  }
}
</script>

<style lang="scss">
@import "@/theme/theme.scss";

* {
  margin: 0;
  box-sizing: border-box;
}
</style>
