<template>
  <div id="app">
    <div id="nav">
      <div class="title">Smart Home</div>
      <div>
        <router-link to="/">Domov</router-link>
        <router-link to="/pridaj-zariadenie">Pridaj Zariadenie</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
}
</style>
<script>
  import LayoutFooter from "./components/layout-footer";
  export default {
    components: {LayoutFooter}
  }
</script>
