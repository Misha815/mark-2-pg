<template>

  <div class="conteiner-header">
    <h1>DO IT <span>RIGHT</span></h1>
    <div class="container-header__content">
      <div class="shop-now">
        <h2 class="title-span">NIKE AIR MAX</h2>
        <p>Nike introducing the new air max for everyone's comfort</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conteiner-header {
  h1 {
    font-size: clamp(3.75rem, -1.6855rem + 17.3936vw, 13.96875rem);
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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
        color: #FFF;
        font-size: clamp(1.5rem, -0.1622rem + 5.3191vw, 4.625rem);
      }

      p {
        color: #FFF;
        font-size: clamp(0.875rem, 0.5426rem + 1.0638vw, 1.5rem);
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