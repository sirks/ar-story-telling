<template>
  <div class='home'>
    <div class='container'>
      <div class='cover'>
        <img class='side' src='./background.png'>
        <span class='side text'>
          Militants get angry with you because you tried to negotiate with them. They take you with them and you become their slaves.
        </span>
      </div>
      <Slider class='solid-font' audioSrc='/audio/negotiate.mp3' side='bottom'>
        <h1>Migrant crisis has heightened the risk of slavery</h1>
        <img class='story-img' src='./story.png'/>
        Often refugees are being forced into 'modern slavery' by people traffickers before attempting deadly journey to
        Europe. It’s reported that over 70% of migrants crossing Central Mediterranean are being exploited and abused,
        referring to the
        <a target='_blank'
           href='https://www.independent.co.uk/news/world/africa/refugee-crisis-migrants-libya-europe-eu-italy-abuse-torture-slavery-forced-labour-iom-report-msf-a7366361.html'>
          <b>The Independent</b>
        </a>. Researchers have found that the global migrant crisis has also increased the risk of slavery and forced
        labour
        tainting supply chains in three-quarters of EU countries as well, reported in
        <a target='_blank'
           href='https://www.theguardian.com/global-development/2017/aug/10/migrant-crisis-triggers-heightened-risk-of-slavery-in-eu-supply-chains-say-analysts'>
          <b>The Guardian</b>
        </a>.
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
  export default class Negotiate extends Vue {
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