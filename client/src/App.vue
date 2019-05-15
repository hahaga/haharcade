<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

#app {
  position: relative;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}
</style>