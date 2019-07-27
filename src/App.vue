<template>
  <div id="app">
    <div id="nav">
      <div class="title"><router-link to="/" class="text">Smart Home</router-link></div>
      <div class = "sidebar-wrapper">
      <ul class="menu">
        <li class="menu-item"><router-link to="/" class="active"><font-awesome-icon icon='home' class="nav-icon"></font-awesome-icon><p>Domov</p></router-link></li>
        <li class="menu-item"><router-link to="/ovladace"><font-awesome-icon icon='tv' class="nav-icon"></font-awesome-icon><p>Ovladace</p></router-link></li>
        <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking')" v-bind:class="{'open' : dropDowns.ranking.open}">
          <a class="menu__link menu__link--toggle" href="#">
            <font-awesome-icon icon='plus' class="nav-icon"></font-awesome-icon><p>Pridaj</p>
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
  background-color: #eee;
}
#nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 260px;
  background: #fff;
  box-shadow: 0 16px 38px -12px rgba(0,0,0,.56), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);

  .title{
    padding: 15px 0;
    margin: 0;
    display: block;
    position: relative;
    z-index: 4;
    ::after{
      content: "";
      position: absolute;
      bottom: 0;
      right: 15px;
      height: 1px;
      width: calc(100% - 30px);
      background-color: hsla(0,0%,71%,.3)
    }
    .text{
      text-transform: uppercase;
      padding: 5px 0;
      display: inline-block;
      font-size: 18px;
      color: #3c4858;
      white-space: nowrap;
      font-weight: 400;
      line-height: 30px;
      overflow: hidden;
      text-align: center;
    }
  }
  .sidebar-wrapper{
    position: relative;
    height: calc(100vh - 75px);
    overflow: auto;
    width: 260px;
    z-index: 4;
    padding-bottom: 30px;
    .menu{
      flex-wrap: wrap;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      li{
        a{
          margin: 10px 15px 0;
          border-radius: 3px;
          color: #3c4858;
          padding-left: 10px;
          padding-right: 10px;
          text-transform: capitalize;
          font-size: 13px;
          padding: 10px 15px;
          display: flex;
          &.router-link-exact-active {
            background-color: #9c27b0;
            box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176);
            color: #fff !important;
            .nav-icon{color: #fff !important;}
            &:hover{
              background-color: #9c27b0;
              box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176);
              color: #fff !important;
            }
          }

          p{
            margin: 0;
            line-height: 30px;
            font-size: 14px;
            position: relative;
            display: block;
            height: auto;
            white-space: nowrap;
          }
          .nav-icon{
            font-size: 24px;
            float: left;
            margin-right: 15px;
            line-height: 30px;
            width: 30px;
            text-align: center;
            color: #a9afbb;
          }
        }
        a:hover{
          background: #EEEFF1;
        }
      }
    }
  }
a {
    margin-right: 1rem;
    color: #ffffff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #aeaeae;

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
  import {faHome} from '@fortawesome/free-solid-svg-icons';
  import {faTv} from '@fortawesome/free-solid-svg-icons';
  import {faPlus} from '@fortawesome/free-solid-svg-icons';

  library.add(faBars);
  library.add(faHome);
  library.add(faTv);
  library.add(faPlus);

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
