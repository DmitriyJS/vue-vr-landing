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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
</style>
