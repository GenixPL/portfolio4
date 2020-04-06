<template>
    <div style="max-width: 600pt; margin: auto">
        <div id="coauthor">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleSmallPaddingText",
        props: {
            text: String,
        },
    }
</script>

<style scoped>
    #coauthor {
        padding-left: 8pt;

        font-family: prime, serif;
        text-align: justify;
        line-height: 16pt;
    }
</style>