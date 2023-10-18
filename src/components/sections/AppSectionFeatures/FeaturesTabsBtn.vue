<template>
  <div class="tabs__btn">
    <button
      v-for="(btnText, i) in $store.state.tabsBtnsText"
      :key="btnText"
      class="tabs__btn-item"
      :class="{ 'tabs__btn-item--active': i === activeBtn }"
      @click="setActiveTab(i)"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 0
    }
  },
  methods: {
    setActiveTab(num) {
      this.activeBtn = num
      this.$emit('changeTab', num)
    }
  }
}
</script>

<style scoped>
.tabs__btn {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.tabs__btn-item {
  font-weight: 700;
  margin-bottom: 20px;
}

.tabs__btn-item--active {
  color: #070707;
}

@media (max-width: 992px) {
  .tabs__btn {
    display: block;
    column-count: 2;
  }

  .tabs__btn-item {
    display: block;
  }
}

@media (max-width: 420px) {
  .tabs__btn {
    display: block;
    column-count: 1;
  }
}
</style>
