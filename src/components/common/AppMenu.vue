<template>
  <ul class="menu">
    <li v-for="menuItem in menuItems" :key="menuItem" class="menu__list">
      <a href="#" class="menu__link">{{ menuItem }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  gap: 0 20px;
}
</style>
