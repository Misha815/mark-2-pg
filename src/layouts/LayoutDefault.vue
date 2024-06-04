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
              <label for="">
                <input type="text">
                <button class="submit-btn">SUBMIT</button>
              </label>
            </div>
          </div>
          <div class="sale__lable">
            <img src="../assets/images/LogoSM.svg" alt="KICKS">
          </div>
        </div>
        <div class="footer__inner">
          <div class="container">
            <div class="about">
              <div class="about__inner">
                <h5>About us</h5>
                <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections
                  and latest drops.</p>
              </div>
            </div>
            <div class="categories">
              <div class="categories__inner">
                <h5>Categories</h5>
                <ul>
                  <li><a href="#">Runners</a></li>
                  <li> <a href="#">Sneakers</a></li>
                  <li> <a href="#">Basketball</a></li>
                  <li> <a href="#">Outdoor</a></li>
                  <li> <a href="#">Golf</a></li>
                  <li> <a href="#">Hiking</a></li>
                </ul>

              </div>
            </div>
            <div class="categories">
              <div class="categories__inner">
                <h5>Company</h5>
                <ul>
                  <li><a href="#">About</a></li>
                  <li> <a href="#">Contact</a></li>
                  <li> <a href="#">Blogs</a></li>
                </ul>

              </div>
            </div>
            <div class="categories">
              <div class="categories__inner">
                <h5>Follow us</h5>
                <ul>
                  <ul class="icon-ul">
                    <li> <a href="#"> <img src="../assets/images/facebook.svg" alt="KICKS"></a></li>
                    <li><a href="#"> <img src="../assets/images/instagram.svg" alt="KICKS"></a></li>
                    <li> <a href="#"> <img src="../assets/images/twitter.svg" alt="KICKS"></a></li>
                    <li> <a href="#"> <img src="../assets/images/tiktok.svg" alt="KICKS"></a></li>
                  </ul>

                </ul>

              </div>
            </div>
          </div>
          <div class="footer-logo"><img src="../assets/images/footer-logo.png" alt=""></div>
        </div>
      </div>
      <div class="rights-bar"><span>© All rights reserved | Made with ❤️ by Junior developer Mikhail Stepnov</span>
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

      .sale__form {

        width: 510px;

        .Join {
          font-size: 48px;
          color: #ffffff;
          font-weight: 500;
        }

        p {
          font-size: 20px;
          color: #ffffff;
        }

        .join-form {
          input {

            width: 342px;
            height: 48px;
            border: 2px solid #ffffff;
            color: #fff;
            border-radius: 8px;
            font-size: 20px;
            background-color: #4A69E2;
            outline: none;
          }

          .submit-btn {
            color: #ffffff;
            background-color: #232321;
            width: 102px;
            height: 48px;
            border-radius: 8px;
            text-align: center;

            font-weight: 500;

            margin-left: 4px;

            &:hover {
              background-color: #ffffff;
              color: #232321;
              outline: 2px solid #232321;

            }
          }

        }

        .sale_lable {
          img {}
        }
      }
    }
  }

  .footer__inner {
    max-width: 1320px;
    height: 591px;
    background-color: #232321;
    border-radius: 48px;
    position: relative;

    color: #fff;

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 30px 30px;


      display: flex;
      justify-content: space-between;
      padding: 40px;


      .about {
        .about__inner {
          max-width: 446px;

          h5 {
            font-size: 36px;
            color: #FFA52F;
          }

          p {
            font-size: 20px;

          }
        }
      }

      .categories {
        .categories__inner {


          h5 {
            font-size: 24px;
            color: #FFA52F;
          }

          ul {
            all: unset;

            list-style-type: none;

            a {
              font-weight: 400;
              color: #fff;

              img {}
            }

            .icon-ul {
              display: flex;
              justify-content: space-between;

              li {}
            }




          }
        }
      }


    }

    .footer-logo {
      display: flex;
      justify-content: center;
      z-index: 66;

      img {
        position: absolute;
        bottom: 0;
        max-width: 80%;
        object-fit: cover;
      }
    }
  }
}

.rights-bar {
  display: flex;
  justify-content: center;

  span {
    font-size: 24px;
  }
}

@media (max-width:800px) {
  .footer__sale {
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 1320px;
    height: 340px;
    background-color: #4A69E2;
    border-radius: 48px 48px 0 0;
  }

}
</style>