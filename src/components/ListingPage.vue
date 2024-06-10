<template>
  <div class="container">

    <div class="banner">
      <div class="banner__inner">
        <p class="p-1">Limited time only</p>
        <span class="span-1">Get 30% off</span>
        <p class=" p-2">Sneakers made with your comfort in mind so you can put all of your focus into your next
          session.</p>
      </div>

    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  .banner {
    width: 1320px;
    height: 395px;
    max-width: 100%;
    max-height: 100%;
    margin-top: 80px;
    border-radius: 64px;
    background-color: #b5b5b5;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .banner__inner {
      margin-left: 40px;
      max-width: 490px;
      max-height: 191px;

      .p-1 {
        font-size: 24px;
        color: #FFF;
      }

      .span-1 {
        color: #FFF;
        font-size: 74px;
      }

      .p-2 {
        font-size: 20px;
        color: #FFF;
      }
    }


  }

}
</style>