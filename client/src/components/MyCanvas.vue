<template>
  <div id="canvas-wrapper">
    <canvas ref="my-canvas" id="canvas"></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Get the canvas context and store it in the Global store.
    this.$store.commit('setContext', this.$refs['my-canvas'].getContext('2d'));
  },
};
</script>

<style>
  #canvas-wrapper {
    width: 800px;
    height: 500px;
    margin: auto;
  }
</style>
