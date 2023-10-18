<template>
  <div class="promo">
    <app-container>
      <div class="promo__inner">
        <button class="promo__button">GO</button>
      </div>
    </app-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.promo {
  margin-bottom: 100px;
}

.promo__inner {
  margin-bottom: 100px;
  background: url(../assets/promo.jpg);
  background-position: top;
  height: 500px;
  background-repeat: no-repeat;
  margin: 0 auto;
  position: relative;
}
.promo__button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(180deg, #bc10d8 0%, rgba(80, 0, 250, 0.93) 100%);
  color: #fff;
  background-size: cover;
  font-weight: 700;
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>
