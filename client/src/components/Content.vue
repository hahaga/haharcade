<template>
    <div id="content">
        <h1>Haharcade</h1>
        <!-- These are the custom components we'll create -->
        <!-- Values for `my-box` are percentages of the width of the canvas. -->
        <!-- Each bar will take up an equal space of the canvas. -->
        <my-canvas>
            <test>
            </test>
        </my-canvas>
    </div>
</template>


<script>
import MyCanvas from './MyCanvas.vue';
import Test from './Test.vue';

export default {
  name: 'content',
  components: {
    MyCanvas,
    Test,
  },
};
</script>

<style>
    #content {
        width: 100vw;
        height: 100vh;

        background-color:cornflowerblue;
        padding: 20px;
    }
</style>
