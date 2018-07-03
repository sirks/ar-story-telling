<template>
  <div class='home'>
    <div class='container'>
      <img class='background' src='./background.png'>
      <div class='video-container' :class="{ visible: videoVisible }">
        <div @click="videoVisible = false" class='overlay'></div>
        <Video src='https://www.youtube.com/embed/2S2qtGisT34'></Video>
      </div>
      <div class='text-container'>
        <Typer
          txt='Do you give them the money or do you try to negotiate with them?'>
        </Typer>
      </div>
      <div @click="videoVisible=true">
        <Dot></Dot>
      </div>
      <TextSlide
        story='The truck you are travelling in gets stopped at the check point. You show them your passports, but the militants demand money from you. If you give the money, the total sum would be almost all of your savings. By giving your savings to the militants it could cause you a lot of trouble further on the road as you would not be able to pay anything to nobody if necessary.'
      ></TextSlide>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Video from '@/components/Video.vue';
  import Dot from '@/components/Dot.vue';
  import Typer from '@/components/Typer.vue';
  import TextSlide from '@/components/TextSlide.vue';
  import Footer from '@/components/Footer.vue';

  @Component({
    components: {
      Video,
      Dot,
      Typer,
      TextSlide,
      Footer,
    },
  })
  export default class Home extends Vue {

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

  .car {
    position: absolute;
    top: 35%;
    left: -55%;
    height: 64%;
    animation: drive 8s forwards;
    animation-delay: 2s;
  }

  @keyframes drive {
    to {
      left: -21%;
    }
  }

  .car-click {
    position: absolute;
    width: 34%;
    height: 42%;
    top: 46%;
    border-radius: 0 100% 20% 0;
    opacity: 0;
  }

  .smoke {
    position: absolute;
    top: 53%;
    left: 78%;
    height: 22%;
  }

  .text-container {
    position: absolute;
    width: 39%;
    height: 16%;
    top: 76%;
    left: 36%;
    font-size: 2.5vw;
    font-weight: bold;
  }
</style>