<template>
  <section class="games">
    <app-container>
      <h2 class="section-title game__title">GAMES</h2>
      <div class="game__inner">
        <div class="game__descr">
          <p class="game__descr-title gradient-big-subtitle">It’s all fun and games</p>
          <p class="game__descr-text">
            Discover new adventures, master epic challenges or revisit classic moments in your
            favourite games and experiences
          </p>
          <a href="#" class="game__link">SEE ALL GAMES</a>
        </div>
        <app-card :content="$store.state.gamesItemsContent" ></app-card>
      </div>
    </app-container>
  </section>
</template>

<script>
import AppCard from '../common/AppCard.vue'
export default {
  components: {AppCard},
}
</script>

<style scoped>
.game {
  margin-bottom: 20px;
}

.game__title {
  margin-bottom: 50px;
}

.game__inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.game__descr {
  padding-right: 10px;
}

.game__descr-title {
  margin-bottom: 10px;
}

.game__descr-text {
  margin-bottom: 24px;
}

.game__link {
  display: inline-block;
  font-weight: 700;
  background: linear-gradient(180deg, #bc10d8 0%, rgba(80, 0, 250, 0.93) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 16px 12px 15px;
  border: 1px solid #bc10d8;
  width: 225px;
  text-align: center;
}
</style>
