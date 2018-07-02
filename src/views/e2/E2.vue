<template>
    <div class='home'>
        <div class='video-container' :class="{ visible: videoVisible }">
            <div @click="videoVisible = false" class='overlay'></div>
            <Video src='https://www.youtube.com/embed/2S2qtGisT34'></Video>
        </div>
        <img class='background' src='./background.png'>
        <div class='text-container'>
            <Txt
              txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'>
            </Txt>
        </div>
        <div @click="videoVisible=true">
            <Dot></Dot>
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
  export default class E2 extends Vue {
    private videoVisible = false;

  }
</script>

<style scoped>

    .background {
        position: absolute;
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
        top: 55%;
        left: 67%;
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
        top: 10%;
        left: 45%;
    }
</style>