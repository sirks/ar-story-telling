<template>
  <div class='typed' ref="ref"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Typer extends Vue {
    @Prop() private txt!: string;

    private speed: number = 50;

    mounted() {
      console.log(this.txt);
      this.typing();
    }

    private typing(index: number = 0) {
      const ref: any = this.$refs.ref;
      ref.innerHTML += this.txt.charAt(index);
      if (index <= this.txt.length) {
        setTimeout(() => this.typing(index + 1), this.speed);
      }
    }
  }
</script>

<style scoped>
  .typed {
    text-align: center;
  }
</style>