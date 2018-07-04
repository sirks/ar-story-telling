<template>
  <div class='slider' :class="{ open: isOpen }">
    <div @click="isOpen=!isOpen" class='open-bar'>
      <div class='overlay fill'></div>
      <img class="slide icon" src='../assets/left-arrow-slide.png'>
      <Audio :audioSrc='audioSrc'></Audio>
    </div>
    <div class='content'>
      <div class='story'>
        {{story}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Audio from '@/components/Audio.vue';

  @Component({
    components: {
      Audio,
    },
  })
  export default class Slider extends Vue {
    @Prop() private story!: string;
    @Prop() private audioSrc!: string;

    private isOpen: boolean = false;
  }
</script>

<style scoped>
  .slider {
    position: absolute;
    display: flex;
    top: 0;
    left: 95vw;
    height: 100%;
    width: 70vw;
    transition: left 1s;
  }

  .slider.open {
    left: 35vw;
  }

  .open-bar img.slide {
    position: absolute;
    top: 40%;
    transition: transform 1s;
  }

  .slider.open .open-bar img.slide {
    transform: rotate(180deg);
  }

  .open-bar {
    position: relative;
    width: 5vw;
  }

  .open-bar .overlay {
    background-color: white;
    opacity: 0.4;
  }

  .content {
    width: 65vw;
    background-color: white;
    opacity: 0.9;
  }

  .content * {
    padding: 2%;
  }
</style>