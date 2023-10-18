<template>
  <section class="accessories">
    <app-container>
      <h2 class="section-title accessories__title">ACCESSORIES</h2>
      <p class="accessories__subtitle gradient-big-subtitle">Personalize every experience</p>
      <div class="accessories__items">
        <app-card
          v-for="(item, i) in $store.state.acessoriesItemsContent"
          class="card__item"
          :key="i"
          :content="item"
          :withPrice="true"
          :withtitleMinHeight="true"
        ></app-card>
      </div>
    </app-container>
  </section>
</template>

<script>
import AppCard from '../common/AppCard.vue'
export default {
  components: { AppCard }
}
</script>

<style scoped>
.accessories {
  margin-bottom: 100px;
}
.accessories__title {
  margin-bottom: 30px;
}

.accessories__subtitle {
  max-width: unset;
  margin-bottom: 30px;
}

.accessories__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 940px) {
  .accessories__items {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 540px) {
  .accessories__items {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
}
</style>
