<template>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>
<style scoped></style>
