<template>
  <div class="tabs__content">
    <div
      :key="text.h3"
      v-for="(text, i) in $store.state.tabsText"
      class="tabs__content-item"
      :class="{ 'tabs__content-item--active': i === tabNum }"
    >
      <img class="tabs__content-img" src="@/components/assets/content.jpg" alt="" />
      <div class="tabs__content-box">
        <h3>{{ text.h3 }}</h3>
        <p>
          {{ text.p }}
        </p>
      </div>
      <div class="video">
        <button class="video__btn">
          <img src="@/components/assets/play.svg" alt="" />
        </button>
        <span>Watch the video</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabNum: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style scoped>
.tabs__content {
  position: relative;
  min-height: 300px;
}
.tabs__content-item {
  display: grid;
  grid-template-columns: auto 280px;
  grid-template-rows: auto 150px;
  gap: 40px;
  opacity: 0;
  position: absolute;
  transition: 0.3s;
}

.tabs__content-item--active {
  opacity: 1;
}

.tabs__content-img {
  grid-row: 1/-1;
  align-self: stretch;
}

.tabs__content-box h3 {
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 5px;
}

.video {
  grid-column: 2/3;
  width: 280px;
  height: 150px;
  background-image: url(../../assets/content-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  padding: 9px 10px;
}

.video__btn {
  margin-left: 22px;
}

.video span {
  font-size: 13px;
  color: #f6f4f5;
}
</style>
