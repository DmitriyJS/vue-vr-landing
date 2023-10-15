<template>
  <footer class="footer">
    <app-container class="container">
      <app-nav class="nav">
        <app-menu :menuItems="menuItems" />
        <app-logo class="logo" />
        <img src="./assets/social.png" alt="" class="social" />
      </app-nav>
    </app-container>
  </footer>
</template>
<script>
import AppLogo from './common/AppLogo.vue'
import AppMenu from './common/AppMenu.vue'
import AppNav from './common/AppNav.vue'

export default {
  components: { AppLogo, AppMenu, AppNav },
  data() {
    return {
      menuItems: ['SHOP', 'GAMES', 'METAVERSE', 'CONTACT US']
    }
  }
}
</script>

<style scoped>
.footer {
  border: 1px solid #cacad6;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  margin-bottom: 40px;
}

.logo {
  justify-self: center;
}

.social {
  justify-self: end;
  cursor: pointer;
}
</style>
