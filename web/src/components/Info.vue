<template>
  <div @click='toggle' class='info-container fill' :class="{ visible: visible}">
    <slot @click=''></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Info extends Vue {
    @Prop() private visible!: boolean;
    @Prop() private toggle!: () => void;
  }
</script>

<style scoped>
  .info-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    background: rgba(0,0,0,0.85);
  }

  .info-container.visible {
    visibility: visible;
  }

</style>