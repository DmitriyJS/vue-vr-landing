<template>
  <a href="#" class="basket basket--on"
    ><img src="@/components/assets/basket.svg" alt="" />
    <span v-if="quantity">{{ quantity }}</span></a
  >
</template>

<script>
export default {
  props: ['quantity']
}
</script>

<style scoped>
.basket {
  position: relative;
}
.basket > span {
  width: 15px;
  height: 15px;
  background-color: black;
  font-size: 12px;
  position: absolute;
  right: -2px;
  bottom: 0;
  color: white;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
