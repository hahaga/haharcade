<template>
    <div id="header">
        <h1>Header</h1>
        <Nav></Nav>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss">
#header {
  background-color: green;
}</style>