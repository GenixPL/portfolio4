<template>
    <div style="max-width: 600pt; margin: auto;">
        <div id="disabled-repo-container">
            <div style="width: 32pt; height: 32pt;">
                <div id="image-div"/>
            </div>

            <div id="repo-text">
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DisabledRepoLink",
        props: {
            text: String,
        },
    }
</script>

<style scoped>
    #disabled-repo-container {
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
        background-image: url("../../../assets/home/github_icon.svg");
    }

    #repo-text {
        margin: auto 8pt;

        font-family: prime, serif;
        text-align: left;
    }
</style>