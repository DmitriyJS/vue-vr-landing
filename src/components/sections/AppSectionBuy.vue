<template>
  <div class="buy">
    <p class="buy__bg">OCULUS</p>
    <img src="../assets/oculus.png" class="buy__img" alt="" />
    <app-button class="buy-btn" :text="btnTxt" :price="btnPrice"></app-button>
    <p class="buy__text">Meta Quest 2 is for ages 13+</p>
  </div>
</template>

<script>
import AppButton from '../common/AppButton.vue'

export default {
  components: {
    AppButton
  },
  data() {
    return {
      btnTxt: 'BUY NOW',
      btnPrice: '399,99 USD'
    }
  }
}
</script>

<style scoped>
.buy {
  margin-bottom: 110px;
  text-align-last: center;
  position: relative;
  overflow-x: hidden;
  padding: 0 5px;
}

.buy__img {
  margin-bottom: 30px;
}

.buy .buy-btn {
  margin: 0 auto;
}

.buy__bg {
  opacity: 0.1;
  background: var(--gradient, linear-gradient(180deg, #bc10d8 0%, rgba(80, 0, 250, 0.93) 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 400px;
  font-weight: 700;
  line-height: 380px;

  position: absolute;
  z-index: -1;

  animation: line-text 4s linear infinite;
}

@keyframes line-text {
  from {
    transform: translateX(120%);
  }
  to {
    transform: translateX(-120%);
  }
}
</style>
