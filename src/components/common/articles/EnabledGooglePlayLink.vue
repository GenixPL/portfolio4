<template>
    <div style="max-width: 600pt; margin: auto;">
        <div id="enabled-store-container">
            <a v-bind:href=url target="_blank">
                <div style="width: 32pt; height: 32pt;">
                    <div id="image-div"/>
                </div>
            </a>


            <div id="repo-text">
                <a v-bind:href=url target="_blank">
                    {{url}}
                </a>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "EnabledGooglePlayLink",
        props: {
            url: String,
        },
    }
</script>

<style scoped>
    #enabled-store-container {
        display: flex;
        align-content: center;

        padding: 8pt 8pt;
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
        margin: auto 8pt;

        font-family: prime, serif;
        text-align: left;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; /* number of lines to show */
    }
</style>