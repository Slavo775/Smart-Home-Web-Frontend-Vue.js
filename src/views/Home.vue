<template>
  <div class="home">
    <div class = "content">
      <button-for-hue
                      v-bind:button-text="this.On"
                      v-bind:state="true"
                      ></button-for-hue>
      <button-for-hue
                      v-bind:state="false"
                      v-bind:button-text=this.Off ></button-for-hue>
    </div>
    <layout-footer></layout-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonForHue from '@/components/inputs/button-for-hue.vue';

@Component({
  components: {
    ButtonForHue,
  },
})
export default class Home extends Vue {
  public data() {
    return{
      On: 'Zapni',
      Off: 'Vypni',
    };
  }
}


</script>

<style lang="less">
  .home {
    background: url("../assets/Comcast_Event-Feature-1600.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .content{
      height: 200rem;
      padding: 5rem;
    }
  }

</style>
