<template>
  <div id="app">
    <div id="nav">
      <div class="title">Smart Home</div>
      <ul class="menu">
        <li class="menu-item"><router-link to="/">Domov</router-link></li>
        <li class="menu-item"><router-link to="/ovladace">Ovladace</router-link></li>
        <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking')" v-bind:class="{'open' : dropDowns.ranking.open}">
          <a class="menu__link menu__link--toggle" href="#">
            <span>Pridaj</span>
            <i class="menu__icon fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-menu__item">
              <router-link to="/pridaj-zariadenie">Pridaj Zariadenie</router-link>
            </li>
            <li class="dropdown-menu__item">
              <router-link to="/pridaj-izbu">Pridaj Izbu</router-link>
            </li>
            <li class="dropdown-menu__item">
              <router-link to="/pridaj-zariadenie">Pridaj Hue Zariadenie</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <ul class ="mobile-menu">
        <li class="mobile-menu__item menu__item--dropdown" v-on:click="mobileToggle('rankingMobile')" v-bind:class="{'openMobile' : dropDownsMobile.rankingMobile.openMobile}">
          <a class="mobile-menu__link menu__link--toggle" href="#">
            <span><font-awesome-icon icon='bars'></font-awesome-icon></span>
          </a>
          <ul class="dropdown-menu-mobile">
            <li class="dropdown-menu__item__mobile">
              <router-link class="text-mobile" to="/">Domov</router-link>
            </li>
            <li class="dropdown-menu__item__mobile">
              <router-link class="text-mobile" to="/ovladace">Ovladace</router-link>
            </li>
            <li class="dropdown-menu__item__mobile">
              <router-link class="text-mobile" to="/pridaj-izbu">Pridaj Izbu</router-link>
            </li>
            <li class="dropdown-menu__item__mobile">
              <router-link class="text-mobile" to="/pridaj-zariadenie">Pridaj Zariadenie</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>


    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style: none;
}
body{
  margin: 0 !important;
}
#nav {
  display: flex;
  position: absolute;
  top: 0;
  /*background: white;*/
  width: 100%;
  height: 10%;
  background: transparent;
  justify-content: space-between;
  text-align: center;
  padding-top: 1rem;
  .title{
    color: white;
    font-weight: bold;
    margin-left: 1rem;
    font-size: 2rem;
  }
  a {
    margin-right: 1rem;
    color: #ffffff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #aeaeae;

    }
  }
  .menu {
    display: flex;

    &__item {
      position: relative;
      padding-right: 3rem;

      &--dropdown {}
    }

    &__link {

      &:hover {
      }
      &--toggle { }
    }
    &__icon {
      margin: 0 !important;
    }
  }
  .open .dropdown-menu {
    display: block;
  }
  .openMobile .dropdown-menu-mobile {
    display: block;
  }
  .dropdown-menu-mobile {
    background: white;
    color: #aeaeae !important;
    padding-left: 0;
    z-index: 2;
    font-size: 1.5rem;
    position: absolute;
    min-width: 100%;
    top: 2.2rem;
    right: 0;
    display: none;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  .dropdown-menu {
    background: black;
    font-size: 0.9rem;
    position: absolute;
    min-width: 10rem;
    top: 2.2rem;
    right: 4rem;
    display: none;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .text-mobile{
    color: #aeaeae;
  }

  .dropdown-menu__item__mobile{
    padding: 1rem 1rem 1rem 1rem;
    height: 3rem;
    width: 18rem;
    color: #aeaeae !important;
  }


  .dropdown-menu__item:first-child .dropdown-menu__link {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .dropdown-menu__item:last-child .dropdown-menu__link {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .dropdown-menu__item:first-child .dropdown-menu__link {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .dropdown-menu__item:last-child .dropdown-menu__link {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .dropdown-menu__link {
    display: block;

    padding: 1rem;
    color: blue;
    background-color: #fafafa;

    &:hover {
      color: green;
      background-color: #ccc;
    }
  }

  .mobile-menu{
    display: none;
    margin-top: 0;
    &__item {
      position: relative;
      padding-right: 0;

      &--dropdown {}
    }

    &__link {
      font-size: 2rem;
      &:hover {
      }
      &--toggle {}
    }
    &__icon {
      margin: 0 !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .menu {
      display: none;
    }
    .mobile-menu{
      display: flex;
    }
  }
}
</style>
<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import {faBars} from '@fortawesome/free-solid-svg-icons';

  library.add(faBars);

  export default {
    components: { FontAwesomeIcon},
    ready() {
      const self = this;
      window.addEventListener('click', (e) => {
        if (! e.target.parentNode.classList.contains('menu__link--toggle')) {
          self.close();
        }
      }, false);
    },
    data() {
      return{
        dropDowns: {
          ranking: {
            open: false},
        },
        dropDownsMobile: {
          rankingMobile: {
            openMobile: false},
        },
      };
    },

    methods: {
      mobileToggle(dropdownName) {
        this.dropDownsMobile[dropdownName].openMobile = !this.dropDownsMobile[dropdownName].openMobile;
      },
      toggle(dropdownName) {
        this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
      },
      close() {
        for (const dd of this.dropDowns) {
          this.dropDowns[dd].open = false;
        }
      },
    },
  };
</script>
