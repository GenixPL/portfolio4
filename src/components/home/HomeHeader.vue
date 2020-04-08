<template>
    <div id="header-container">
        <h1 id="name-header">
            łukASZ<br/>
            NieDZiAłek
        </h1>
        <div id="icons-container">
            <a href="https://github.com/GenixPL" target="_blank">
                <div id="github-icon" class="outer-button-icon"></div>
            </a>
            <a href="https://www.youtube.com/channel/UC8iFSZEpTSbq8ActXXbvyfw?view_as=subscriber" target="_blank">
                <div id="yt-icon" class="outer-button-icon"></div>
            </a>
            <a href="https://rive.app/a/Genix/files/recent/all" target="_blank">
                <div id="rive-icon" class="outer-button-icon"></div>
            </a>
            <a href="https://www.goodreads.com/user/show/86850107-lukasz" target="_blank">
                <div id="gr-icon" class="outer-button-icon">
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
    @media (max-width: 1020px) {
        #header-container {
            margin-top: 32pt;
        }
    }

    #header-container {
        width: 100vw;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    #name-header {
        color: #ffb300;
        letter-spacing: 4pt;
        padding-left: 4pt; /* to compensate for letter spacing */
        font-family: kontanter, sans-serif;
        font-size: 32pt;
    }

    #icons-container {
        margin-top: 12pt;
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

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #yt-icon {
        background-image: url("../../assets/home/yt.svg");
    }

    #github-icon {
        background-image: url("../../assets/home/github.svg");
    }

    #gr-icon {
        background-image: url("../../assets/home/goodreads.svg");
    }

    #rive-icon {
        background-image: url("../../assets/home/rive.svg");
    }
</style>