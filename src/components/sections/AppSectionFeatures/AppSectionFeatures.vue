<template>
  <section class="features">
    <app-container>
      <div class="features__titles">
        <h2 class="features__title section-title">PRODUCT FEATURES</h2>
        <p class="features__text gradient-big-subtitle">Easy to set up and safe to use</p>
      </div>
      <div class="tabs">
        <features-tabs-btn @changeTab="setActiveTab"></features-tabs-btn>
        <features-tabs-content :tabNum="activeTab"></features-tabs-content>
      </div>
    </app-container>
  </section>
</template>

<script>
import FeaturesTabsBtn from './FeaturesTabsBtn.vue'
import FeaturesTabsContent from './FeaturesTabsContent.vue'
export default {
  components: {
    FeaturesTabsBtn,
    FeaturesTabsContent
  },
  data() {
    return {
      activeTab: 0
    }
  },
  methods: {
    setActiveTab(num) {
      this.activeTab = num
    }
  }
}
</script>

<style scoped>
.features {
  padding: 100px 0;
}

.features__titles {
  display: flex;
}

.features__title {
  flex-basis: 300px;
  padding-right: 20px;
}

.features__text {
  margin-bottom: 20px;
}
.tabs {
  display: grid;
  grid-template-columns: 300px auto;
}

@media (max-width: 992px) {
  .tabs {
    display: block;
  }
}

@media (max-width: 568px) {
  .features__titles {
    display: block;
  }
}

@media (max-width: 420px) {
  .features__text {
    font-size: 30px;
  }
}
</style>
