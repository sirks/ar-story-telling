<template>
  <div class='text-slider' :class="{ open: isOpen }">
    <div @click="isOpen=!isOpen" class='open-bar'>
      <div class='overlay'></div>
      <img src='../assets/left-arrow-slide.png'></div>
    <div class='content'>
      <div class='story'>
        {{story}}
      </div>
      <div class='question'>
        {{question}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class TextSlider extends Vue {
    @Prop() private story!: string;
    @Prop() private question!: string;

    private isOpen: boolean = false;
  }
</script>

<style scoped>
  .text-slider {
    position: absolute;
    display: flex;
    top: 0;
    left: 95vw;
    height: 100%;
    width: 38vw;
    transition: left 1s;
  }

  .text-slider.open {
    left: 62vw;
  }

  .text-slider.open .open-bar img {
    transform: rotate(180deg);
  }

  .open-bar {
    position: relative;
    width: 5vw;
  }

  .open-bar .overlay {
    background-color: white;
    opacity: 0.4;
    width: 100%;
    height: 100%;
  }

  .open-bar img {
    position: absolute;
    width: 180%;
    top: 40%;
    left: -40%;
    opacity: 0.7;
    transition: transform 1s;
  }

  .content {
    width: 33vw;
    background-color: white;
    opacity: 0.9;
  }

  .content * {
    padding: 5%;
  }

  .content .question{
    font-size: 2vw;
    font-weight: bold;
  }
</style>