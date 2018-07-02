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
  #video{
    width: 640px;
    height: 360px;
  }
  @media (max-width:639px){
    #video{
      width: 100vw;
      height: 56.25vw;
    }
  }

</style>