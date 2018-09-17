<template>
  <div class='start fill'>
    <router-link class='button' :to="'home'">START</router-link>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Start extends Vue {

  }
</script>

<style scoped>

  .start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button {
    padding: 0 5% 1%;
    font-size: 3.5vw;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    border-bottom: 0.3vw solid #555;
  }

</style>