<template>
  <div class='audio icon' @click.stop='toggleAudio'>
    <img class='icon' v-if="$store.state.audioPlaying" src='../assets/pause.png'>
    <img class='icon' v-else src='../assets/play.png'>
    <audio ref="audioRef">
      <source :src='audioSrc' type="audio/mpeg">
    </audio>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Audio extends Vue {
    @Prop() private audioSrc!: string;

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

  .audio {
    position: absolute;
    text-align: center;
    margin: 0.5vw;
    bottom: 0;
    right: 0;
  }
</style>