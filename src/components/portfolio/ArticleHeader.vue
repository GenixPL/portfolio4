<template>
    <div class="main-container">

        <div class="button-container">
            <NavigateButton :navigateTo=navigateTo />
        </div>

        <div class="text-container">
            <div class="article-header">{{title}}</div>
            <div class="article-text">{{text}}</div>
        </div>

    </div>
</template>

<script>
    import NavigateButton from "@/components/common/NavigateButton";

    export default {
        name: "ArticleHeader",
        components: {
            NavigateButton,
        },
        props: {
            title: String,
            text: String,
            navigateTo: String,
        }
    }
</script>

<style scoped>
    .main-container {
        background-color: #ffc107;

        margin-top: 16pt;
        margin-left: auto;
        margin-right: auto;

        height: 220pt;
        max-width: 420pt;

        display: flex;
        flex-direction: column-reverse;

        background-size: cover;
        background-position: center;
    }

    .text-container {
        text-align: left;

        margin: 16pt;

        color: white;
    }

    .article-header {
        font-family: cp-mono, serif;
        font-size: 16pt;

        margin-bottom: 16pt;
    }

    .article-text {
        font-family: prime, serif;
        font-size: 14pt;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* number of lines to show */
    }

    .button-container {
        margin-bottom: 16pt;
        margin-right: 16pt;

        display: flex;
        flex-direction: row-reverse;
    }

</style>