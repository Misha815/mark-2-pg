<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="catalog">
          <router-link to="/NewDrop">New Drop🔥</router-link>
          <router-link to="/Men">Men</router-link>
          <router-link to="/Women">Women</router-link>
        </div>
        <div class="logo"><router-link to="/"><img src="../assets/images/Logo.svg" alt="KICKS"></router-link></div>
        <div class="user-bar">
          <button><img src="../assets/images/Search.svg" alt="serch"></button>
          <button><img src="../assets/images/UserAccount.svg" alt="user"></button>
          <span class="calc-trash">0</span>
        </div>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <div class="footer__contaier">
        <div class="footer__sale">
          <div class="sale__form">
            <p class="Join">Join our KicksPlus Club & get 15% off</p>
          <p>Sign up for free! Join the community.</p>
          <div class="join-form">
            <input type="text">
            <button class="submit-btn">SUBMIT</button>
          </div>


          </div>
          <div class="sale__lable">
              <img src="../assets/images/LogoSM.svg" alt="KICKS">
            </div>
        </div>
        <div class="footer__inner"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {


}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 20px;
  .nav {
    background-color: #ffffff;
    border-radius: 24px;
    max-width: 1320px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .catalog {
      width: 301px;
      display: flex;
      justify-content: space-evenly;
    }

    .logo {
      width: 128px;
    }

    .user-bar {
      width: 301px;
      display: flex;
      justify-content: space-evenly;

      .calc-trash {
        background-color: #FFA52F;
        height: 32px;
        width: 32px;
        border-radius: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;

      }
    }
  }
}

footer {
  margin-top: 128px;

  .footer__contaier {
    max-width: 1320px;

    background-color: #4A69E2;
    border-radius: 48px;

    .footer__sale {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      max-width: 1320px;
      height: 340px;
      background-color: #4A69E2;
      border-radius: 48px 48px 0 0;

      .sale__form{

        width: 510px;
        .Join{
          font-size: 48px;
          color: #ffffff;
          font-weight: 500;
        }
        p{
          font-size: 20px;
color: #ffffff;
        }
        .join-form{
          input{
            width: 342px;
            height: 48px;
            border: none;
            border-radius: 8px;

          }
          .submit-btn{
            color: #ffffff;
            background-color: #232321;
            width: 102px;
            height: 48px;
            border-radius: 8px;
            text-align: center;
            border: 2px solid #4A69E2;
            font-weight: 500;
            &:hover{
              background-color: #ffffff;
              color: #232321;
              border: 2px solid #232321;


            }
          }

        }
        .sale_lable{
          img{

          }
        }
      }
    }

    .footer__inner {
      max-width: 1320px;
      height: 591px;
      background-color: #232321;
      border-radius: 48px;
    }
  }
}
</style>