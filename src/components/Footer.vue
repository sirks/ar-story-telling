<template>
  <div class='footer'>
    <div class='nav'>
      <router-link :to="'home'"><img src='../assets/return.png'></router-link>
      <a @click="backDisabled?'':$router.back()"><img src='../assets/left-arrow.png'></a>
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
    justify-content: stretch;
  }

  .nav {
    display: flex;
    width: 10%;
    align-items: flex-end;
    padding: 0 2%;
  }

  .nav img {
    width: 80%;
    height: 80%;
    padding-right: 20%;
  }

  .option-cointeiner {
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-around;
  }

  .option {
    padding: 0 5% 1%;
    font-size: 3.5vw;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
  }

  .option.big {
    max-width: 250px;
    border-bottom: 0.3vw solid #555;
  }
</style>