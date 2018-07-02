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
      <!--<div class='text-container'>-->
      <!--<Typer-->
      <!--txt='The truck you are travelling in gets stopped at the check point. You-->
      <!--show them your passports, but the militants demand money from-->
      <!--you. If you give the money, the total sum would be almost all of your-->
      <!--savings. By giving your savings to the militants it could cause you a-->
      <!--lot of trouble further on the road as you would not be able to pay-->
      <!--anything to nobody if necessary.'>-->
      <!--</Typer>-->
      <!--</div>-->
      <div @click="videoVisible=true">
        <Dot></Dot>
      </div>
      <TextSlide
        story='The truck you are travelling in gets stopped at the check point. You show them your passports, but the militants demand money from you. If you give the money, the total sum would be almost all of your savings. By giving your savings to the militants it could cause you a lot of trouble further on the road as you would not be able to pay anything to nobody if necessary.'
        question='Do you give them the money or do you try to negotiate with them?'></TextSlide>
    </div>
    <div class='footer'>
      <div class='nav'>
        <router-link :to="'home'"><img src='../../assets/return.png'></router-link>
        <a><img src='../../assets/left-arrow.png'></a>
      </div>
      <div class='option-cointeiner'>
        <router-link class='option big' to="/e2">GIVE</router-link>
        <router-link class='option big' to="/e3">NEGOTIATE</router-link>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Video from '@/components/Video.vue';
  import Dot from '@/components/Dot.vue';
  import Typer from '@/components/Typer.vue';
  import TextSlide from '@/components/TextSlide.vue';

  @Component({
    components: {
      Video,
      Dot,
      Typer,
      TextSlide,
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
    height: 85%;
  }

  .background {
    width: 100%;
    height: 100%;
  }

  .footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 13%;
    justify-content: stretch;
  }

  .nav {
    display: flex;
    width: 10%;
    align-items: center;
    padding: 0 2%;
  }

  .nav img {
    width: 80%;
    height: 80%;
    padding-right: 20%;
  }

  .option-cointeiner {
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-around;
  }

  .option {
    display: flex;
    padding: 0 5%;
    flex-direction: column;
    font-size: 3vw;
    color: inherit;
    justify-content: center;
    text-align: center;
    text-decoration: none;
  }

  .option.big {
    max-width: 250px;
    border-bottom: 0.3vw solid #555;
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
    left: -74%;
    height: 70%;
    animation: drive 10s forwards;
    animation-delay: 2s;
  }

  @keyframes drive {
    to {
      left: -20%;
    }
  }

  .smoke {
    position: absolute;
    top: 53%;
    left: 78%;
    height: 22%;
  }

  .text-container {
    position: absolute;
    width: 50%;
    height: 25%;
    top: 59%;
    left: 37%;
  }
</style>