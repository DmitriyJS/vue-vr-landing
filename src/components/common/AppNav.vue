<template>
  <nav class="nav">
    <slot></slot>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 80px;
}

@media (max-width: 700px) {
  .nav {
    grid-template-columns: 1fr 2fr 1fr;
  }
}
</style>
