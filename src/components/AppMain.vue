<template>
  <main class="main">
    <app-section-top></app-section-top>
    <app-section-features></app-section-features>
    <app-section-games></app-section-games>
    <app-section-buy></app-section-buy>
    <app-section-equipment></app-section-equipment>
    <app-section-promo></app-section-promo>
    <app-section-accessories></app-section-accessories>
    <app-section-contacts></app-section-contacts>
  </main>
</template>

<script>
import AppSectionAccessories from './sections/AppSectionAccessories.vue'
import AppSectionBuy from './sections/AppSectionBuy.vue'
import AppSectionContacts from './sections/AppSectionContacts.vue'
import AppSectionEquipment from './sections/AppSectionEquipment.vue'
import AppSectionFeatures from './sections/AppSectionFeatures/AppSectionFeatures.vue'
import AppSectionGames from './sections/AppSectionGames.vue'
import AppSectionPromo from './sections/AppSectionPromo.vue'
import AppSectionTop from './sections/AppSectionTop.vue'
export default {
  components: {
    AppSectionTop,
    AppSectionFeatures,
    AppSectionGames,
    AppSectionBuy,
    AppSectionEquipment,
    AppSectionPromo,
    AppSectionAccessories,
    AppSectionContacts
  }
}
</script>
