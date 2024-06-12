<template>
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
          <img width="200" height="61" viewBox="0 0 400 200" src="../assets/images/LogoSM.svg" alt="KICKS">
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
                  <li><a href="#"> <img src="../assets/images/facebook.svg" alt="KICKS"></a></li>
                  <li><a href="#"> <img src="../assets/images/instagram.svg" alt="KICKS"></a></li>
                  <li><a href="#"> <img src="../assets/images/twitter.svg" alt="KICKS"></a></li>
                  <li><a href="#"> <img src="../assets/images/tiktok.svg" alt="KICKS"></a></li>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
          font-size: clamp(2rem, 1.4681rem + 1.7021vw, 3rem);
          color: #ffffff;
          font-weight: 500;
        }

        p {
          font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);
          color: #ffffff;
        }

        .join-form {

          input {

            max-width: 342px;
            width: 100%;

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

        .sale__lable {}
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
      display: flex;
      justify-content: space-around;


      padding: 40px;

      .about {
        .about__inner {
          max-width: 446px;

          h5 {
            font-size: clamp(1.5625rem, 1.1968rem + 1.1702vw, 2.25rem);
            font-weight: 600;
            color: #FFA52F;
          }

          p {
            font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);

          }
        }
      }

      .categories {
        .categories__inner {
          h5 {
            font-weight: 600;
            font-size: clamp(1.25rem, 1.117rem + 0.4255vw, 1.5rem);
            color: #FFA52F;
          }

          ul {
            all: unset;

            list-style-type: none;

            a {
              font-weight: 400;
              color: #fff;
              font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);

              &:hover {
                color: #FFA52F;
              }

              img {}
            }

            .icon-ul {


              display: flex;
              justify-content: space-between;

              li {
                margin: 3px;
              }
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
    font-size: clamp(0.875rem, 0.5426rem + 1.0638vw, 1.5rem);
  }
}

@media (max-width: 1200px) {}

@media (max-width: 800px) {


  footer {
    margin-top: 128px;

    .footer__contaier {
      max-width: 1320px;

      background-color: #4A69E2;
      border-radius: 48px;

      .footer__sale {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        max-width: 1320px;
        height: 340px;
        background-color: #4A69E2;
        border-radius: 48px 48px 0 0;

        .sale__form {

          width: 326px;
          display: flex;
          flex-direction: column;



          .Join {
            font-size: clamp(2rem, 1.4681rem + 1.7021vw, 3rem);
            color: #ffffff;
            font-weight: 500;

          }

          p {
            font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);
            color: #ffffff;
          }

          .join-form {
            input {

              max-width: 342px;
              width: 100%;

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

          .sale__lable {}
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
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        padding: 40px;

        .about {
          .about__inner {
            max-width: 446px;

            h5 {
              font-size: clamp(1.5625rem, 1.1968rem + 1.1702vw, 2.25rem);
              font-weight: 600;
              color: #FFA52F;
            }

            p {
              font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);

            }
          }
        }

        .categories {
          .categories__inner {
            h5 {
              font-weight: 600;
              font-size: clamp(1.25rem, 1.117rem + 0.4255vw, 1.5rem);
              color: #FFA52F;
            }

            ul {
              all: unset;

              list-style-type: none;

              a {
                font-weight: 400;
                color: #fff;
                font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);

                &:hover {
                  color: #FFA52F;
                }

                img {}
              }

              .icon-ul {


                display: flex;
                justify-content: start;

                li {
                  margin: 3px;
                }
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
      font-size: clamp(0.875rem, 0.5426rem + 1.0638vw, 1.5rem);
    }
  }
}

@media (max-width: 500px) {


  footer {
    margin-top: 128px;

    .footer__contaier {
      max-width: 1320px;

      background-color: #4A69E2;
      border-radius: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .footer__sale {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        max-width: 1320px;
        height: 340px;
        background-color: #4A69E2;
        border-radius: 48px 48px 0 0;


        .sale__form {

          max-width: 326px;
          width: 100%;




          .Join {
            font-size: clamp(2rem, 1.4681rem + 1.7021vw, 3rem);
            color: #ffffff;
            font-weight: 500;

          }

          p {
            font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);
            color: #ffffff;
          }

          .join-form {

            input {

              max-width: 236px;
              width: 100%;

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
              width: 86px;
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

          .sale__lable {
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
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        padding: 40px;

        .about {
          .about__inner {
            max-width: 446px;

            h5 {
              font-size: clamp(1.5625rem, 1.1968rem + 1.1702vw, 2.25rem);
              font-weight: 600;
              color: #FFA52F;
            }

            p {
              font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);

            }
          }
        }

        .categories {
          .categories__inner {
            h5 {
              font-weight: 600;
              font-size: clamp(1.25rem, 1.117rem + 0.4255vw, 1.5rem);
              color: #FFA52F;
            }

            ul {
              all: unset;

              list-style-type: none;

              a {
                font-weight: 400;
                color: #fff;
                font-size: clamp(1rem, 0.867rem + 0.4255vw, 1.25rem);

                &:hover {
                  color: #FFA52F;
                }

                img {}
              }

              .icon-ul {


                display: flex;
                justify-content: start;

                li {
                  margin: 3px;
                }
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
      font-size: clamp(0.875rem, 0.5426rem + 1.0638vw, 1.5rem);
    }
  }
}
</style>