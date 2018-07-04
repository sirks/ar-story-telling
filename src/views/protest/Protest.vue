<template>
  <div class='home'>
    <div class='container'>
      <img class='fill' src='../protest/background.png'>
      <Audio audioSrc='/audio/protest.mp3'></Audio>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Audio from '@/components/Audio.vue';
  import Footer from '@/components/Footer.vue';

  @Component({
    components: {
      Audio,
      Footer,
    },
  })
  export default class Protest extends Vue {
  }
</script>

<style scoped>

  .container {
    position: relative;
    width: 100%;
    height: 86%;
  }
</style>