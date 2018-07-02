<template>
  <div class='dot'></div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Dot extends Vue {
    constructor() {
      super();
    }
  }
</script>

<style scoped>
  .dot {
    height: 2vw;
    width: 2vw;
    background-color: #8e8;
    border-radius: 50%;
    border: 0.15vw solid #555;
    display: inline-block;
  }
</style>