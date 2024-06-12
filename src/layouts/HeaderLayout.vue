<template>

  <header class="header">
    <nav class="nav">
      <div class="catalog">
        <router-link class="pin-btn" to="/NewDrop">New Drop🔥</router-link>
        <router-link class="pin-btn" to="/Men">Men</router-link>
        <router-link class="pin-btn" to="/Women">Women</router-link>
      </div>
      <div class="catalog-mb"><img src="../assets/images/catalog-mb.svg" alt="catalog"></div>
      <div class="logo"><router-link to="/"><img src="../assets/images/Logo.svg" alt="KICKS"></router-link></div>
      <div class="user-bar">
        <button class="seacrh"><img src="../assets/images/Search.svg" alt="serch"></button>
        <button><img src="../assets/images/UserAccount.svg" alt="user"></button>
        <span class="calc-trash">0</span>
      </div>
    </nav>
  </header>

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



      .router-link-exact-active {
        color: #4A69E2;


      }

      .pin-btn {
        &:hover {
          color: #4A69E2;

        }
      }
    }

    .catalog-mb {
      display: none;
    }

    .logo {
      width: 128px;
    }

    .user-bar {
      width: 301px;
      max-height: 32px;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;

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

@media (max-width: 1200px) {}

@media (max-width: 800px) {
  .header {
    position: relative;
    top: 0px;

    .nav {
      background-color: #ffffff;
      border-radius: 24px;
      max-width: 1320px;

      height: 96px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .catalog {
        width: 301px;
        display: none;
        justify-content: space-evenly;
      }

      .catalog-mb {
        display: flex;

      }

      .logo {
        width: 128px;
      }

      .user-bar {
        width: auto;


        .seacrh {
          display: none;
        }

        .calc-trash {
          margin-left: 5px;
        }
      }
    }
  }


}

@media (max-width: 500px) {
  .header {
    position: relative;
    top: 0px;

    .nav {
      background-color: #ffffff;
      border-radius: 24px;
      max-width: 1320px;

      height: 96px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .catalog {
        width: 301px;
        display: none;
        justify-content: space-evenly;
      }

      .catalog-mb {
        display: flex;

      }

      .logo {
        width: 128px;
      }

      .user-bar {
        width: auto;


        .seacrh {
          display: none;
        }

        .calc-trash {
          margin-left: 5px;
        }
      }
    }
  }


}
</style>