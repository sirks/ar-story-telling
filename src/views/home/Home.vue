<template>
  <div class='home'>
    <div class='container'>
      <img class='fill' src='./background.png'>
      <img class='guards' src='./guards.png'>
      <!--<img class='smoke' src='./smoke.gif'>-->
      <img src='../../assets/video.png' class='video-icon icon' @click="videoToggle">
      <Info :visible='videoVisible' :toggle='videoToggle'>
        <iframe width="640" height="360" id="video" src='https://www.youtube.com/embed/2S2qtGisT34'
                allow="autoplay; encrypted-media" frameborder="0" webkitallowfullscreen mozallowfullscreen
                allowfullscreen></iframe>
      </Info>
      <img src='../../assets/info.png' class='info-text icon' @click="infoTextToggle">
      <Info :visible='infoTextVisible' :toggle='infoTextToggle'>
        <img class='info-graph' src='../../assets/info-graph-price.png'>
      </Info>
      <div class='text-container'>
        Do you give the money or do you try to negotiate?
      </div>
      <Slider audioSrc='/audio/home.mp3' side='right'>
        The truck you are travelling in gets stopped at the check point. You show them your passports, but the militants
        demand money from you. If you give the money, the total sum would be almost all of your savings. By giving your
        savings to the militants it could cause you a lot of trouble further on the road as you would not be able to pay
        anything to nobody if necessary.
      </Slider>
    </div>
    <Footer :buttons='buttons' :backDisabled='true'></Footer>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Info from '@/components/Info.vue';
  import Typer from '@/components/Typer.vue';
  import Slider from '@/components/Slider.vue';
  import Footer, {Button} from '@/components/Footer.vue';
  // import {JQuery} from 'fancybox';

  @Component({
    components: {
      Info,
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

    private videoToggle() {
      this.videoVisible = !this.videoVisible;
    }

    private infoTextVisible: boolean = false;

    private infoTextToggle() {
      this.infoTextVisible = !this.infoTextVisible;
    }
  }
</script>

<style scoped>

  .container {
    position: relative;
    width: 100%;
    height: 86%;
    overflow: hidden;
  }

  .guards {
    position: absolute;
    top: 35%;
    left: 65%;
    height: 24vw;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 2s;
  }

  .video-icon {
    position: absolute;
    top: 13%;
    left: 32%;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 3s;
  }

  .info-text {
    position: absolute;
    top: 13%;
    left: 69%;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 4s;
  }

  .text-container {
    position: absolute;
    width: 31%;
    height: 24%;
    top: 76%;
    left: 35%;
    font-size: 2.5vw;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 5s;
  }

  @keyframes appear {
    to {
      opacity: 1;
    }
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
  }

  .info-graph {
    width: 696px;
    height: 780px;
    max-width: 80.31vh;
    max-height: 90vh;
  }

  #video {
    max-width: 90vw;
    max-height: 50.625vw;
  }

  @media (min-aspect-ratio: 16/9) {
    #video {
      max-width: 160vh;
      max-height: 90vh;
    }
  }

  .info-graph {
    max-width: 82.54vh;
    max-height: 90vh;
  }

  @media (max-aspect-ratio: 940/1025) {
    .info-graph {
      max-width: 90vw;
      max-height: 98.14vw;
    }
  }
</style>