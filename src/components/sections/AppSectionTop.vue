<template>
  <section class="top">
    <app-container>
      <h1 class="title">Meta Quest 2</h1>
      <p class="subtitle">Get an Elite Strap free</p>
      <p class="top__text">For a limited time only, save $59.99 USD. Offer ends 1/19/23</p>
      <app-button  :text="btnTxt" :price="btnPrice" />
      <p class="buy__text">Meta Quest 2 is for ages 13+</p>
    </app-container>
  </section>
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
.top {
  min-height: calc(100vh - 81px);
  background-image: url(../assets/top-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
}

.title {
  padding-top: 15%;
  font-size: 96px;
  margin-bottom: 10px;
  font-weight: 400;
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

.buy__text {
  padding-top: 6px;
  font-size: 13px;
}

@media (max-width: 768px) {
  .title {
    font-size: 66px;
  }

  .subtitle {
    font-size: 24px;
  }
}

@media (max-width: 568px) {

  .top {
    text-align: center;
  }

  .buy__btn {
    flex-direction: column;
    margin: 0 auto;
  }
}

@media (max-width: 433px) {
  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 20px;
  }
}


</style>
