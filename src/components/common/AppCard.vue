<template>
  <div v-for="(item, i) in content" class="card__item" :key="i">
    <img class="card__item-img" :src="item.img" alt="" />
    <h3 class="card__item-title">{{ item.title }}</h3>
    <p class="card__item-text">{{ item.text }}</p>
    <a class="card__item-link" v-if="!withPrice" :href="item.link">see more</a>
    <div class="price__block" v-else>
      <div class="card__item-price">{{ item.price }}</div>
      <button class="card__item-btn" >BUY NOW</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withPrice: {
      type: Boolean,
      default: false
    },
    content: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card__item {
  border: 1px solid #bc10d8;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.card__item-img {
  margin-bottom: 10px;
}

.card__item-title {
  font-size: 21px;
  margin-bottom: 10px;
}

.card__item-text {
  margin-bottom: 30px;
}

.card__item-link {
  background: linear-gradient(180deg, #bc10d8 0%, rgba(80, 0, 250, 0.93) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: auto;
}

.price__block {
  margin-top: auto;
  width: 100%;
}

.card__item-price {
  font-weight: 700;
  margin-bottom: 20px;
}

.card__item-btn {
  background: linear-gradient(180deg, #bc10d8 0%, rgba(80, 0, 250, 0.93) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  border: 1px solid #bc10d8;
  width: 100%;
  padding: 5px 10px;
}
</style>
