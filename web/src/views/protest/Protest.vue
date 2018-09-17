<template>
  <div class='home'>
    <div class='container'>
      <div class='cover'>
        <img class='side' src='./background.png'>
        <span class='side text'>
          You and your family end up in the refugee camp. Now you will need to apply for asylum.
        </span>
      </div>
      <Slider class='solid-font' audioSrc='/audio/protest.mp3' side='bottom'>
        <h1>What is a Refugee Camp?</h1>
        <img class='story-img' src='./story.png'/>
        A refugee camp is intended as a temporary accommodation for people who have been forced to flee their home
        because of violence and persecution. They are constructed while crises unfold for people fleeing for their
        lives. These hastily built shelters provide immediate protection and safety for the world’s most vulnerable
        people. Camps allow
        <a target='_blank'
           href='https://www.unrefugees.org/refugee-facts/camps'>
          <b>UNHCR</b>
        </a> to deliver lifesaving aid like food,
        water and medical attention during an emergency. Currently 2.6m refugees live in camps. Millions more live in
        urban areas and informal dwellings.
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