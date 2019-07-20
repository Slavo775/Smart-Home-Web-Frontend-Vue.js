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
      color: #ffffff;
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
      &--toggle {}
    }
    &__icon {
      margin: 0 !important;
    }
  }
  .open .dropdown-menu {
    display: block;
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
}
</style>
<script>
  import LayoutFooter from './components/layout-footer';
  export default {
    components: {LayoutFooter},
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
      };
    },

    methods: {
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
