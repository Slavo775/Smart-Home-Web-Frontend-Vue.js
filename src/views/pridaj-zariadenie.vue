<template>
  <div class="about">
    <div class="add-device-container">
    <h1 class="header">Pridaj zariadenie</h1>
    <div class="input-div">
      <label for="meno-zariadenia"></label>
      <input type="text" name="meno-zariadenia" id="meno-zariadenia" class="input" placeholder="Meno zariadenia">
      <span class="input-span"></span>
    </div>
    <div class="input-div">
      <label for="typ-zariadenia"></label>
      <input type="text" name="typ-zariadenia" id="typ-zariadenia" class="input" placeholder="Typ zariadenia">
    </div>
    <div class="input-div">
      <label for="uloha-zariadenia"></label>
      <input type="text" name="uloha-zariadenia" id="uloha-zariadenia" class="input" placeholder="Uloha zariadenia">
    </div>
    <div class="input-div">
      <label for="pozicia-zariadenia"></label>
      <input type="text" name="pozicia-zariadenia" id="pozicia-zariadenia" class="input" placeholder="Pozicia zariadenia">
    </div>
    <div class="input-div">
      <label for="ip-zariadenia"></label>
      <input type="text" name="ip-zariadenia" id="ip-zariadenia" class="input" placeholder="IP adresa">
    </div>
      <div class="buttons">
        <button class="button-add">Pridaj</button>
        <button class="button-add">Test</button>
        <div class="message">Ok!</div>
      </div>
  </div>
    <layout-footer></layout-footer>
  </div>
</template>


<style lang="less">
  .about{
    background: url("../assets/wp2163554.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .header{
    display: block;
    font-family: Montserrat-ExtraBold;
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
  .add-device-container{
    width: 37rem;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 70px 70px 70px 60px;
    margin-top: 4rem;
    margin-bottom: 4rem;
    .input-div{
      width: 100%;
      z-index: 1;
      margin-bottom: 20px;
      .input{
        display: block;
        width: 100%;
        background: #e6e6e6;
        font-family: Montserrat-Bold;
        font-size: 15px;
        line-height: 1.5;
        color: #666666;
        border-radius: 25px;
        border: none;
        padding: 1rem;
      }
    }
  }
  .buttons{
    display: flex;

  .button-add{
    margin-right: 1rem;
    min-width: 193px;
    height: 50px;
    border-radius: 25px;
    background: #18A0A3;
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }
  .message{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }

  @font-face {
    font-family: Montserrat-Regular;
    src: url('../assets/fonts/montserrat/Montserrat-Regular.ttf');
  }

  @font-face {
    font-family: Montserrat-Bold;
    src: url('../assets/fonts/montserrat/Montserrat-Bold.ttf');
  }

  @font-face {
    font-family: Montserrat-ExtraBold;
    src: url('../assets/fonts/montserrat/Montserrat-ExtraBold.ttf');
  }

  @font-face {
    font-family: Montserrat-Medium;
    src: url('../assets/fonts/montserrat/Montserrat-Medium.ttf');
  }



</style>
<script>
  import LayoutFooter from "../components/layout-footer";
  export default {
    components: {LayoutFooter}
  }
</script>
