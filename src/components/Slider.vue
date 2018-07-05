<template>
  <div class='slider' :class="[side, { open: isOpen }]">
    <div @click="isOpen=!isOpen" class='open-bar'>
      <div class='overlay fill'>
        <img class="slide icon" src='../assets/left-arrow-slide.png'>
        <Audio :audioSrc='audioSrc'></Audio>
      </div>
    </div>
    <div class='content'>
      <div class='story'>
        <slot></slot>
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
    @Prop() private audioSrc!: string;
    @Prop() private side!: 'right' | 'bottom';

    private isOpen: boolean = false;
  }
</script>

<style scoped>
  .slider {
    position: absolute;
    display: flex;
  }

  .slider.right {
    top: 0;
    left: 96vw;
    height: 100%;
    transition: left 1s;
  }

  .slider.right.open {
    left: 35vw;
  }

  .slider.right .content {
    width: 65vw;
  }

  .slider.right.open .open-bar img.slide {
    transform: rotate(180deg);
  }

  .slider.right .open-bar {
    width: 4vw;
  }

  .slider.right .content .story {
    padding: 1vw;
  }

  .slider.bottom {
    top: calc(100% - 4vw);
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    transition: top 1s;
  }

  .slider.bottom.open {
    top: 0;
  }

  /*.slider.bottom .content {*/
    /*height: calc(100% - 4vw);*/
  /*}*/

  .slider.bottom .open-bar img.slide {
    transform: rotate(90deg);
  }

  .slider.bottom.open .open-bar img.slide {
    transform: rotate(270deg);
  }

  .slider.bottom .open-bar {
    height: 4vw;
  }

  .slider.bottom .content .story {
    padding: 0 10vw 10vw;
  }

  .open-bar {
    position: relative;
  }

  .open-bar img.slide {
    position: absolute;
    transition: transform 1s;
  }

  .open-bar .overlay {
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content {
    background-color: white;
  }
</style>