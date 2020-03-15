<template>
    <div id="header-container">
        <h1 id="name-header">
            łukASZ<br/>
            NieDZiAłek
        </h1>
        <div id="icons-container">
            <div id="github-icon" class="outer-button-icon"></div>
            <div id="yt-icon" class="outer-button-icon"></div>
            <div id="rive-icon" class="outer-button-icon"></div>
            <div id="gg-icon" class="outer-button-icon"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
    #header-container {
        width: 100vw;
        height: 108pt;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: #ffc107;
    }

    #name-header {
        color: black;
        letter-spacing: 4pt;
        padding-left: 4pt; /* to compensate for letter spacing */
        font-family: kontanter, sans-serif;
    }

    #icons-container {
        height: 32pt;
        display: grid;
        grid-template-columns: repeat(4, 32pt);
        grid-gap: 8pt;
        justify-content: center;
    }

    .outer-button-icon {
        width: 32pt;
        height: 32pt;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    #yt-icon {
        background-image: url("../../assets/home/yt_icon.svg");
    }

    #github-icon {
        background-image: url("../../assets/home/github_icon.svg");
    }

    #gg-icon {
        background-image: url("../../assets/home/gg_icon.svg");
    }

    #rive-icon {
        background-image: url("../../assets/home/rive_icon.svg");
    }
</style>