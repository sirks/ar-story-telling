<template>
  <div class='home'>
    <div class='container'>
      <img class='background' src='./background.png'>
      <div class='video-container' :class="{ visible: videoVisible }">
        <div @click="videoVisible = false" class='overlay'></div>
        <Video src='https://www.youtube.com/embed/2S2qtGisT34'></Video>
      </div>
      <div @click="videoVisible=true">
        <Dot></Dot>
      </div>
    </div>
    <div class='footer'>
      <div class='nav'>
        <router-link :to="'home'"><img src='../../assets/return.png'></router-link>
        <a @click="$router.back()"><img src='../../assets/left-arrow.png'></a>
      </div>
      <div class='option-cointeiner'>
        <router-link class='option big' to="/e2">PROTEST</router-link>
        <router-link class='option big' to="/e3">JUMP THE BOAT</router-link>
      </div>
    </div>
    <TextSlide
      story='The militants take your money and let you go. When you arrive at
the port, the boat is already full with people. Smugglers ensure that
further in the international waters another, bigger boat awaits.
When your reach the bigger boat, you can see that it is very crowded
as well. The smuggler tells everybody on your boat that you need to
jump over to the other boat. It is very windy, the waves are big and it
makes it very hard for you and your family to jump over. Some
people start to protest towards smugglers saying, that they will stay
on the small boat. They ask for your support to do the same.'
      question='Do you protest or do you jump over to the bigger boat?'></TextSlide>
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
    animation-delay: 2s;
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
    width: 50%;
    height: 25%;
    top: 59%;
    left: 37%;
  }
</style>