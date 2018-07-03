<template>
  <div class='info-text-container' :class="{ visible: $parent.infoTextVisible }">
    <div @click='$parent.infoTextVisible = !$parent.infoTextVisible' class='overlay'></div>
    <div class='info-text'>
      <div v-html='html'></div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Video extends Vue {
    @Prop() private html!: string;
  }
</script>

<style scoped>
  .info-text-container {
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

  .info-text-container.visible {
    visibility: visible;
  }

  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.85;
    background-color: black;
  }

  .info-text {
    position: absolute;
    width: 640px;
    height: 360px;
    background-color: white;
  }

  @media (max-width: 640px) {
    .info-text {
      width: 80vw;
      height: 40vw;
    }
  }

  .info-text > div {
    padding: 5%;
  }

</style>