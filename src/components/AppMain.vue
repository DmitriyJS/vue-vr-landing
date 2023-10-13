<template>
  <main class="main">
    <app-section-top></app-section-top>
    <app-section-features></app-section-features>
    <app-section-games></app-section-games>
    <app-section-buy></app-section-buy>
  </main>
</template>

<script>
import AppSectionBuy from './sections/AppSectionBuy.vue'
import AppSectionFeatures from './sections/AppSectionFeatures/AppSectionFeatures.vue'
import AppSectionGames from './sections/AppSectionGames.vue'
import AppSectionTop from './sections/AppSectionTop.vue'
export default {
  components: {
    AppSectionTop,
    AppSectionFeatures,
    AppSectionGames,
    AppSectionBuy
  },
}
</script>

<style scoped>
.top {
  min-height: calc(100vh - 81px);
  background-image: url(./assets/top-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
}

.title {
  padding-top: 15%;
  font-size: 96px;
  margin-bottom: 10px;
}

.subtitle {
  font-family: Helvetica;
  font-size: 36px;
  margin-bottom: 5px;
}

.top__text {
  font-size: 13px;
  margin-bottom: 50px;
}
</style>
