<template>
  <button class="buy-btn">
    <span class="buy-btn__text">{{ text }}</span>
    <span class="buy-btn__price">{{ price }}</span>
  </button>
</template>

<script>
export default {
  props: ['text', 'price']
}
</script>

<style scoped>
.buy-btn {
  cursor: pointer;
  border: none;
  background: linear-gradient(180deg, #bc10d8 0%, rgba(80, 0, 250, 0.93) 100%);
  display: flex;
  padding: 2px;
  font-weight: 700;
}

.buy-btn__text {
  color: #f6f4f5;
  padding: 19px 110px;
}

.buy-btn__price {
  background-color: #f6f4f5;
  padding: 19px 105px;
}

@media (max-width: 568px) {
  .buy-btn {
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>
