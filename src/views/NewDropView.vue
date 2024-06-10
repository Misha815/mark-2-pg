<template>
  <layout-default>
    <div class="NewDrop-container">
      <listing-page />
    </div>
  </layout-default>

</template>

<script>
import ListingPage from '@/components/ListingPage.vue'
import LayoutDefault from '../layouts/LayoutDefault.vue'
export default {
  components: { LayoutDefault, ListingPage },

}
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>