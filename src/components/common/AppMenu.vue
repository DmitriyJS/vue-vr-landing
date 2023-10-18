<template>
  <div>
    <button class="menu-btn" @click="menuOpened = !menuOpened">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="menu" :class="{ 'sliding-menu': menuOpened }" @click="menuOpened = false">
      <li v-for="menuItem in menuItems" :key="menuItem" class="menu__item">
        <a href="#" class="menu__link">{{ menuItem }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      menuOpened: false
    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  gap: 0 20px;
}

.menu-btn {
  display: none;
  flex-direction: column;
  height: 25px;
  width: 40px;
  justify-content: space-between;
}
.menu-btn span {
  display: block;
  height: 2px;
  width: 100%;
  background: black;
}

.menu__item:hover {
  color: black;
  font-weight: 700;
}

.sliding-menu {
  display: flex !important;

  top: 80px;
  left: 0 !important;
}

@media (max-width: 920px) {
  .menu-btn {
    display: flex;
  }

  .menu {
    gap: 20px;
    padding: 20px;
    font-size: 25px;
    flex-direction: column;
    background: lightgrey;
    transition: 0.3s;
    position: absolute;
    top: 80px;
    left: -100%;
    min-height: 180px;
    width: 100%;
  }
}
</style>
