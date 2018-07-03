<template>
  <div class='home'>
    <div class='container'>
      <img class='background' src='./background.png'>
      <div class='video-container' :class="{ visible: videoVisible }">
        <div @click="videoVisible = false" class='overlay'></div>
        <Video src='https://www.youtube.com/embed/2S2qtGisT34'></Video>
      </div>
      <div class='text-container'>
        Do you protest or do you jump over to the bigger boat?
      </div>
      <div @click="videoVisible=true">
        <Dot></Dot>
      </div>
      <Slider
        story='The militants take your money and let you go. When you arrive at the port, the boat is already full with people. Smugglers ensure that further in the international waters another, bigger boat awaits. When your reach the bigger boat, you can see that it is very crowded as well. The smuggler tells everybody on your boat that you need to jump over to the other boat. It is very windy, the waves are big and it makes it very hard for you and your family to jump over. Some people start to protest towards smugglers saying, that they will stay on the small boat. They ask for your support to do the same.'
        audioSrc='/audio/give.mp3'
      ></Slider>
    </div>
    <Footer :buttons='buttons'></Footer>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Video from '@/components/Video.vue';
  import Dot from '@/components/Dot.vue';
  import Typer from '@/components/Typer.vue';
  import Slider from '@/components/Slider.vue';
  import Footer, {Button} from '@/components/Footer.vue';

  @Component({
    components: {
      Video,
      Dot,
      Typer,
      Slider,
      Footer,
    },
  })
  export default class Give extends Vue {
    private readonly buttons: Button[] = [
      {name: 'PROTEST', link: '/protest'},
      {name: 'JUMP THE BOAT', link: '/jump-the-boat'},
    ];

    private videoVisible = false;

  }
</script>

<style scoped>

  .container {
    position: relative;
    width: 100%;
    height: 86%;
  }

  .background {
    width: 100%;
    height: 100%;
  }

  .video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
  }

  .video-container.visible {
    visibility: visible;
  }

  .video-container #video {
    position: absolute;
  }

  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.85;
    background-color: black;
  }

  .dot {
    position: absolute;
    top: 26%;
    left: 51%;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 1s;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .text-container {
    position: absolute;
    width: 39%;
    height: 16%;
    top: 76%;
    left: 36%;
    font-size: 2.5vw;
    font-weight: bold;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 2s;
  }
</style>