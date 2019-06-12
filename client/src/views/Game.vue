<template>
    <div id="game-page">
        <h1>Game Page</h1>
        <div id="iframe-wrapper">
            <iframe id="game-iframe" :src="getGamePath()" :height="iframeHeight" :width="iframeWidth"></iframe>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '@/store';

@Component
export default class Content extends Vue {
    private iframeHeight: number = 600;
    private iframeWidth: number = 900;

    private getGamePath() {
        return '/games/' + Store.state.gameName + '/';
    }
}
</script>

<style>
    iframe {
        border: 0;
    }

    #iframe-wrapper {
        border: solid 1px black;
    }
</style>