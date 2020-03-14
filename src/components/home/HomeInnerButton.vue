<template>
    <router-link class="routerLink" :to=path>
        <h3 id="inner-button-text">
            {{title}}
        </h3>
    </router-link>
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
    #inner-button-text {
        font-family: cp-mono, sans-serif;
        letter-spacing: 2pt;
        padding: 8pt 6pt 8pt 8pt; /* -2pt to compensate letter-spacing */
        margin: 16pt;

        color: white;
        background-color: black;
    }


</style>