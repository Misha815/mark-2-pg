<template>
  <layout-default>
    <div class="conteiner-header">
      <h1>DO IT <span>RIGHT</span></h1>
      <div class="container-header__content">
        <div class="shop-now">
          <span class="title-span">NIKE AIR MAX</span>
          <span>Nike introducing the new air max for everyone's comfort</span>
          <button>SHOP NOW</button>
        </div>
      </div>
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
.conteiner-header {
  h1 {
    font-size: clamp(1rem, -5.8983rem + 22.0745vw, 13.96875rem);
    font-weight: bold;

    span {
      color: #4A69E2;
      font-weight: bold;
    }
  }

  .container-header__content {
    max-width: 1320px;
    height: 750px;
    border-radius: 64px;
    background-color: #70706E;
    background-image: url('../assets/images/Nike Air Max poster.png');
    display: flex;
    flex-direction: column;

    justify-content: end;

    .shop-now {
      margin: 48px;
      display: flex;
      flex-direction: column;
      max-width: 490px;
      justify-content: end;

      .title-span {
        font-size: 74px;
      }

      span {
        color: #FFF;
        font-size: 24px;
      }

      button {
        width: 138px;
        height: 48px;
        border-radius: 8px;
        border: none;
        background-color: #4A69E2;
        color: #FFF;
        text-align: center;

        &:hover {
          background-color: #232321;
        }
      }
    }
  }
}
</style>