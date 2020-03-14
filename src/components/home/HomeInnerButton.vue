<template>
    <div>
        <h3>{{title}}</h3>
    </div>
</template>

<script>
    export default {
        name: "HomeInnerButton",
        props: {
            title: String,
            path: String
        }
    }
</script>

<style scoped>
    div {
        padding: 8pt 16pt;
    }

    h3 {
        font-family: etna;
        color: white;
        letter-spacing: 2pt;
    }
</style>