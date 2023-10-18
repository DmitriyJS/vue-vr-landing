<template>
  <header class="header">
    <app-container class="container">
      <app-nav class="nav">
        <app-menu class="app__menu" :menuItems="menuItems" />
        <app-logo class="logo" />
        <app-basket :quantity="basketQuantity" class="basket" />
      </app-nav>
    </app-container>
  </header>
</template>
<script>
import AppBasket from './common/AppBasket.vue'
import AppLogo from './common/AppLogo.vue'
import AppMenu from './common/AppMenu.vue'
import AppNav from './common/AppNav.vue'

export default {
  components: { AppLogo, AppMenu, AppBasket, AppNav },
  data() {
    return {
      menuItems: ['SHOP', 'GAMES', 'METAVERSE'],
      basketQuantity: 1
    }
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #cacad6;
  background: #f6f4f5;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

.basket {
  justify-self: end;
}

.logo {
  justify-self: center;
}
</style>
