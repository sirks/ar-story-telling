<template>
  <div id='typed'></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Text extends Vue {
    @Prop() private txt!: string;

    private speed: number = 50;

    mounted() {
      this.typing();
    }

    private typing(index: number = 0) {
      document.getElementById("typed").innerHTML += this.txt.charAt(index);
      if (index <= this.txt.length) {
        setTimeout(() => this.typing(index + 1), this.speed);
      }
    }
  }
</script>

<style scoped>
  #typed {
    text-align: center;
  }
</style>