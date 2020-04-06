<template>
    <div style="max-width: 600pt; margin: auto">
        <div id="article-text">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleText",
        props: {
            text: String,
        },
    }
</script>

<style scoped>
    #article-text {
        padding: 8pt;

        font-family: prime, serif;
        text-align: justify;
        line-height: 14pt;

        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }
</style>