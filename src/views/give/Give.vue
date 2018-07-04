<template>
  <div class='home'>
    <div class='container'>
      <img class='fill' src='./background.png'>
      <div class='text-container'>
        Do you protest or do you jump over to the bigger boat?
      </div>
      <Slider
        story='The militants take your money and let you go. When you arrive at the port, the boat is already full with people. Smugglers ensure that further in the international waters another, bigger boat awaits. When your reach the bigger boat, you can see that it is very crowded as well. The smuggler tells everybody on your boat that you need to jump over to the other boat. It is very windy, the waves are big and it makes it very hard for you and your family to jump over. Some people start to protest towards smugglers saying, that they will stay on the small boat. They ask for your support to do the same.'
        audioSrc='/audio/give.mp3'
      ></Slider>
    </div>
    <Footer :buttons='buttons'></Footer>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Dot from '@/components/Dot.vue';
  import Typer from '@/components/Typer.vue';
  import Slider from '@/components/Slider.vue';
  import Footer, {Button} from '@/components/Footer.vue';

  @Component({
    components: {
      Dot,
      Typer,
      Slider,
      Footer,
    },
  })
  export default class Give extends Vue {
    private readonly buttons: Button[] = [
      {name: 'PROTEST', link: '/protest'},
      {name: 'JUMP THE BOAT', link: '/jump-the-boat'},
    ];

    private videoVisible = false;

  }
</script>

<style scoped>

  .container {
    position: relative;
    width: 100%;
    height: 86%;
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
    width: 39%;
    height: 16%;
    top: 76%;
    left: 36%;
    font-size: 2.5vw;
    font-weight: bold;
    opacity: 0;
    animation: appear 2s forwards;
    animation-delay: 2s;
  }
</style>