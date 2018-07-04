<template>
  <div class='footer'>
    <div class='nav'>
      <router-link class='icon' :to="'home'"><img src='../assets/return.png'></router-link>
      <a class='icon' @click="backDisabled?'':$router.back()"><img src='../assets/left-arrow.png'></a>
    </div>
    <div class='option-cointeiner'>
      <router-link v-for="button in buttons" class='option big' :to="button.link">{{button.name}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  export interface Button {
    name: string,
    link: string
  }

  @Component
  export default class Footer extends Vue {
    @Prop() private buttons!: Button[];
    @Prop() private backDisabled!: boolean;


  }
</script>

<style scoped>
  .footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 12%;
  }

  .nav {
    display: flex;
    width: 10%;
    height: 100%;
    padding: 0 2%;
    justify-content: space-between;
    align-items: center;
  }

  .nav img{
    width:100%;
  }

  .option-cointeiner {
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-around;
  }

  .option {
    padding: 0 5%;
    font-size: 4vw;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
  }

  .option.big {
    border-bottom: 0.3vw solid #555;
  }
</style>