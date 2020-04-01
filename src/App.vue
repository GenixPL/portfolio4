<template>
        <div id="app">
            <router-view></router-view>
        </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    * {
        margin: 0;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    /* this removes underline from each of them links in app */
    .routerLink {
        text-decoration: none;
        color: black;
    }

    @font-face {
        font-family: 'cp-mono';
        src: url(fonts/CPMono.otf);
    }

    @font-face {
        font-family: 'kontanter';
        src: url(fonts/Kontanter.otf);
    }

    @font-face {
        font-family: 'prime';
        src: url(fonts/Prime.otf);
    }
</style>
