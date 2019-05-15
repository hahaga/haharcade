<template>
  
</template>


<script lang="ts">

  export default {
    mounted() {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      if (ctx === null) { return; }

      const cWidth = document.getElementById('canvas-wrapper').scrollWidth || 800;
      const cHeight = document.getElementById('canvas-wrapper').scrollHeight || 500;

      ctx.canvas.width = cWidth;
      ctx.canvas.height = cHeight;

      ctx.fillStyle = 'orange';
      ctx.fillRect(0, 0, 300, 300);

      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 100, 100);
    },
  };
</script>
