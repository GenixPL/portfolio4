<template>
    <div style="max-width: 600pt; margin: auto">
        <div id="centered-header">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "CenteredHeader",
        props: {
            text: String,
        },
    }
</script>

<style scoped>
    #centered-header {
        padding-top: 32pt;
        padding-left: 20pt;
        padding-right: 20pt;
        padding-bottom: 24pt;

        font-family: cp-mono, serif;
        font-size: 24pt;

        overflow-wrap: break-word;
        word-wrap: break-word;
    }
</style>