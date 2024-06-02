<template>
  <layout-default>
    <div class="NewDrop-container">
    <h1>This is an New drop page</h1>
  </div>
  </layout-default>

</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue'
  export default {
  components: { LayoutDefault },

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