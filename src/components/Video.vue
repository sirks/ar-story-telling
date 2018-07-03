<template>
  <iframe id="video" :src='src' allow="autoplay; encrypted-media" frameborder="0"
          webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Video extends Vue {

    @Prop() private src!: string;
  }
</script>

<style>
  #video {
    position: absolute;
    width: 640px;
    height: 360px;
  }

  @media (max-width: 640px) {
    #video {
      width: 80vw;
      height: 40vw;
    }
  }

</style>