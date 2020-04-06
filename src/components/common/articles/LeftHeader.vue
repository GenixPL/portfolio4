<template>
    <div style="max-width: 600pt; margin: auto">
        <div id="left-header">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftHeader",
        props: {
            text: String,
        },
    }
</script>

<style scoped>
    #left-header {
        padding-left: 8pt;
        padding-top: 16pt;

        font-family: cp-mono, serif;
        font-size: 18pt;
        text-align: left;

        overflow-wrap: break-word;
        word-wrap: break-word;
    }
</style>