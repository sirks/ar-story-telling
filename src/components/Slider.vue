<template>
  <div class='slider' :class="{ open: isOpen }">
    <div @click="isOpen=!isOpen" class='open-bar'>
      <div class='overlay'></div>
      <img class="slide" src='../assets/left-arrow-slide.png'>
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

    mounted() {
      if (this.$store.state.audioPlaying) {
        const audioRef: any = this.$refs.audioRef;
        audioRef.play();
      }
    }

    private toggleAudio() {
      const audioRef: any = this.$refs.audioRef;
      if (this.$store.state.audioPlaying) {
        audioRef.pause();
        this.$store.state.audioPlaying = false;
      }
      else {
        audioRef.play();
        this.$store.state.audioPlaying = true;
      }
    }
  }
</script>

<style scoped>
  .slider {
    position: absolute;
    display: flex;
    top: 0;
    left: 95vw;
    height: 100%;
    width: 65vw;
    transition: left 1s;
  }

  .slider.open {
    left: 35vw;
  }

  .open-bar img.slide {
    position: absolute;
    width: 180%;
    top: 40%;
    left: -40%;
    opacity: 0.7;
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
    width: 100%;
    height: 100%;
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