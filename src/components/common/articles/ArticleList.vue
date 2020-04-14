<template>
    <div style="max-width: 600pt; margin: auto; padding-bottom: 8pt">
        <div id="article-list-header">
            {{header}}
        </div>

        <ul style="list-style-position: outside;">
            <li class="article-list-element" v-for="(child, x) in children" :key="x">
                {{child}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
        props: {
            header: String,
            children: Array,
        }
    }
</script>

<style scoped>
    #article-list-header {
        margin: 8pt 8pt 4pt;

        font-family: prime, serif;
        text-align: left;
        line-height: 14pt;

        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }

    .article-list-element {
        padding: 4pt 16pt 4pt 8pt;

        list-style-type: square;

        text-align: justify;
        font-family: prime, serif;
        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
        line-height: 14pt;
    }
</style>