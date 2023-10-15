<template>
  <section class="equipment">
    <app-container>
      <h2 class="section-title equipment__title">IN THE BOX</h2>
      <div class="equipment__box">
        <div class="equipment__box-item equipment__box-item__no-img">
          <p class="equipment__box-title gradient-big-subtitle">What's included</p>
        </div>
        <div
          class="equipment__box-item"
          :class="{ 'equipment__box-item-active': i === activeItem }"
          v-for="(item, i) in $store.state.equipmentItemsContent"
          :key="item.title"
          @click="setActiveItem(i)"
        >
          <img :src="item.img" class="equipment__box-img" alt="" />
          <p class="equipment__box-text">{{ item.title }}</p>
        </div>
      </div>
    </app-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 0
    }
  },
  methods: {
    setActiveItem(ind) {
      this.activeItem = ind;
    }
  }
}
</script>

<style scoped>
.equipment {
  margin-bottom: 100px;
}

.equipment__title {
  margin-bottom: 50px;
}

.equipment__box {
  display: grid;
  grid-template-rows: repeat(2, 270px);
  grid-template-columns: 2fr 280px 280px;
  gap: 20px;
}

.equipment__box-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.equipment__box-item__no-img {
  grid-row-start: 1;
  grid-column-start: 3;
}

.equipment__box-img {
  margin-bottom: 10px;
  max-height: 220px;
}

.equipment__box-item-active {
  grid-row: 1/-1;
}

.equipment__box-item-active .equipment__box-img {
  object-fit: cover;
  width: 100%;
  max-height: unset;
}
</style>
