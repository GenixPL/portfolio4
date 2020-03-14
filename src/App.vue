<template>
    <div id="dimScreen">
        <div id="app">
            <Home/>
        </div>
    </div>
</template>

<script>
    import Home from './components/home/Home'

    export default {
        name: 'App',
        components: {
            Home
        },
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

    #dimScreen {
        position: fixed;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ffc107;
    }

    @font-face {
        font-family: 'etna';
        src: url(fonts/Etna.otf);
    }

    @font-face {
        font-family: 'kontanter';
        src: url(fonts/Kontanter.otf);
    }

    @font-face {
        font-family: 'Prime';
        src: url(fonts/Prime.otf);
    }
</style>
