<template>
    <header>
        <a href="#"><img id="logo" title="HahaDICKBUTTCHUrcade" src="../assets/dickbuttchu.jpg"></a>
        <Nav></Nav>
    </header>
</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'Header',
  components: {
    Nav,
  },
};
</script>

<style>
    header {
        background: #bb0000;
        width: 100vw;
        height: 150px;
    }

    #logo {
        position: absolute;
        top: 0px;
        left: calc(50% - 75px);
        width: 150px;
    }
</style>
