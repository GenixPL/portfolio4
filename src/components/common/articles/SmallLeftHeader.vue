<template>
    <div style="max-width: 600pt; margin: auto">
        <div id="small-left-header">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "SmallLeftHeader",
        props: {
            text: String,
        },
    }
</script>

<style scoped>
    #small-left-header {
        padding-left: 8pt;
        padding-top: 16pt;

        font-family: cp-mono, serif;
        font-size: 14pt;
        text-align: left;

        overflow-wrap: break-word;
        word-wrap: break-word;
    }
</style>