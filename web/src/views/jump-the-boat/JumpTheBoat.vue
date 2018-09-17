<template>
  <div class='home'>
    <div class='container'>
      <div class='cover'>
        <img class='side' src='./background.png'>
        <span class='side text'>
          The boat you jumped on is not very good quality but you are not very far from the shore. Local fisherman on the shore notice you struggle and go to rescue. They bring you to the shore and you are able to apply for asylum there.
        </span>
      </div>
      <Slider class='solid-font' audioSrc='/audio/jump-the-boat.mp3' side='bottom'>
        <h1>Local fishermen are saving refugee lives</h1>
        <img class='story-img' src='./story.png'/>
        In the peak of the refugee crisis there were so many operations taking place at the same time that in many cases
        the Europe's coastguards were forced to call the local fishermen asking them to go to the sea to find a sinking
        refugee boat until one of the coastguard boats could come to the rescue, reported in
        <a target='_blank'
           href='https://www.aljazeera.com/indepth/features/2016/08/greece-fishermen-lesbos-saving-refugee-lives-160804091028172.html'>
          <b>Al Jazeera</b>
        </a>. Sometimes even for months fishermen couldn't work because they were preoccupied with rescue missions.
      </Slider>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Slider from '@/components/Slider.vue';
  import Footer from '@/components/Footer.vue';

  @Component({
    components: {
      Slider,
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
    overflow: scroll;
  }

  .cover {
    display: flex;
    height: 100%;
  }

  .side {
    width: 50%;
  }

  .side.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 2.5vw;
    font-size: 2.5vw;
  }

  .story-img {
    display: block;
    width: 640px;
    max-width: 100%;
    padding: 1vw 0;
  }
</style>