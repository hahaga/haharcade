<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/dickbuttchu.jpg">
    <Content msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/Content.vue'; // @ is an alias to /src

@Component({
  components: {
    Content,
  },
})
export default class Home extends Vue {}
</script>
