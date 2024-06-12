<template>
  <div class="container">
    <header-layout />
    <main>
      <slot></slot>
    </main>
    <footer-layout />
  </div>
</template>

<script>
import FooterLayout from './FooterLayout.vue'
import HeaderLayout from './HeaderLayout.vue'
export default {
  components: { HeaderLayout, FooterLayout },


}
</script>

<style lang="scss" scoped>
.container {}
</style>