<template>
  <div id='app' class='fill'>
    <router-view class='view'></router-view>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class App extends Vue {}
</script>
<style>

  #app {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .view {
    position: absolute;
    width: 100vw;
    height: 45vw;
    color: #111;
  }
</style>