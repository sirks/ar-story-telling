<template>
  <div class='home'>
    <div class='container'>
      <img class='background' src='./background.png'>
      <div class='video-container' :class="{ visible: videoVisible }">
        <div @click="videoVisible = false" class='overlay'></div>
        <Video src='https://www.youtube.com/embed/2S2qtGisT34'></Video>
      </div>
      <div class='text-container'>
        <Txt
          txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'>
        </Txt>
      </div>
      <div @click="videoVisible=true">
        <Dot></Dot>
      </div>
    </div>
    <div class='option-cointainer'>
      <router-link class='option' to="/e2">Bribe border guards</router-link>
      <router-link class='option' to="/e3">Chose a different route</router-link>
    </div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Video from '@/components/Video.vue';
  import Dot from '@/components/Dot.vue';
  import Txt from '@/components/Txt.vue';

  @Component({
    components: {
      Video,
      Dot,
      Txt
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

  .option-cointainer {
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: space-around;
  }

  .option{
    display: flex;
    width: 300px;
    font-size: 2vw;
    color:inherit;
    /*border-radius: 0 0 3vw 3vw;*/
    border-bottom: 0.3vw solid #555;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
  }

  .option:hover{
    color: #ff765d;
    font-weight: 700;
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