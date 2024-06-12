<template>
  <layout-default>
    <div class="NewDrop-container">
      <listing-page />
      <home-up-filter />
      <div class="shop">
        <listing-filter />
        <shop-area />
      </div>

    </div>
  </layout-default>

</template>

<script>
import ListingPage from '@/components/ListingPage.vue'
import LayoutDefault from '../layouts/LayoutDefault.vue'
import HomeUpFilter from '@/components/HomeUpFilter.vue'
import ListingFilter from '@/components/ListingFilter.vue'
import ShopArea from '@/components/ShopArea.vue'

export default {
  components: { LayoutDefault, ListingPage, HomeUpFilter, ListingFilter, ShopArea },

}
</script>

<style lang="scss" scoped>
.NewDrop-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.shop {
  margin-top: 32px;
  display: flex;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>