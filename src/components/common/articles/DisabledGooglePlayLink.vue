<template>
    <div style="max-width: 600pt; margin: auto;">
        <div id="disabled-store-container">
            <div id="image-div"/>

            <div id="repo-text">
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DisabledGooglePlayLink",
        props: {
            text: String,
        },
    }
</script>

<style scoped>
    #disabled-store-container {
        display: flex;
        align-content: center;

        padding: 16pt 8pt;
    }

    #image-div {
        height: 32pt;
        width: 32pt;

        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("../../../assets/articles/google_play_icon.svg");
    }

    #repo-text {
        margin: auto 16pt;

        font-family: prime, serif;
        text-align: left;
    }
</style>