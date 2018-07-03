<template>
  <div class='home'>
    <div class='container'>
      <img class='background' src='./background.png'>
      <img class='car' src='./car.png'>
      <img class='smoke' src='./smoke.gif'>
      <div class='video-container' :class="{ visible: videoVisible }">
        <div @click="videoVisible = false" class='overlay'></div>
        <Video src='https://www.youtube.com/embed/2S2qtGisT34'></Video>
      </div>
      <InfoText html='<b>The truck you are travelling in gets stopped at the check point. You show them your passports, but the militants demand money from you. If you give the money, the total sum would be almost all of your savings. By giving your savings to the militants it could cause you a lot of trouble further on the road as you would not be able to pay anything to nobody if necessary.</b>'></InfoText>
      <div class='text-container'>
        Do you give them the money or do you try to negotiate with them?
      </div>
      <div class='video-dot' @click="videoVisible=true">
        <Dot></Dot>
      </div>
      <div class='info-text-dot' @click="infoTextVisible = !infoTextVisible">
        <Dot></Dot>
      </div>
      <Slider
        story='The truck you are travelling in gets stopped at the check point. You show them your passports, but the militants demand money from you. If you give the money, the total sum would be almost all of your savings. By giving your savings to the militants it could cause you a lot of trouble further on the road as you would not be able to pay anything to nobody if necessary.'
        audioSrc='/audio/home.mp3'
      >
      </Slider>
    </div>
    <Footer :buttons='buttons' :backDisabled='true'></Footer>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Video from '@/components/Video.vue';
  import InfoText from '@/components/InfoText.vue';
  import Dot from '@/components/Dot.vue';
  import Typer from '@/components/Typer.vue';
  import Slider from '@/components/Slider.vue';
  import Footer, {Button} from '@/components/Footer.vue';

  @Component({
    components: {
      Video,
      InfoText,
      Dot,
      Typer,
      Slider,
      Footer,
    },
  })
  export default class Home extends Vue {
    private readonly buttons: Button[] = [
      {name: 'GIVE', link: '/give'},
      {name: 'NEGOTIATE', link: '/negotiate'},
    ];
    private videoVisible: boolean = false;

    //TODO: this variable is used in child component
    private infoTextVisible: boolean = false;
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

  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.85;
    background-color: black;
  }

  .video-dot {
    position: absolute;
    top: 26%;
    left: 51%;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 1s;
  }

  .info-text-dot {
    position: absolute;
    top: 36%;
    left: 61%;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 3s;
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
  }

  @keyframes drive {
    to {
      left: -21%;
    }
  }

  .smoke {
    position: absolute;
    top: 53%;
    left: 78%;
    height: 22%;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 4s;
  }

  .text-container {
    position: absolute;
    width: 45%;
    height: 24%;
    top: 76%;
    left: 36%;
    font-size: 2.5vw;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 5s;
  }
</style>