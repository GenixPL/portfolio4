<template>
    <div style="max-width: 600pt; margin: auto">
        <div id="description-text">
            {{text}}
        </div>

        <div id="url-text">
            <a v-bind:href=url target="_blank">
                {{url}}
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "LinkWithDescription",
        props: {
            text: String,
            url: String,
        }
    }
</script>

<style scoped>
    #description-text {
        padding: 8pt 8pt 0;

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

    #url-text {
        margin-left: 8pt;
        margin-right: 8pt;
        margin-bottom: 8pt;

        font-family: prime, serif;
        text-align: left;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; /* number of lines to show */
    }
</style>