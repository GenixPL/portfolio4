<template>
    <div>
        <router-link class="routerLink" :to=path>
            <h3>{{title}}</h3>
        </router-link>
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
        margin: 16pt;
        background: black;
        width: 104pt;
        justify-content: center;
    }

    h3 {
        font-family: etna, sans-serif;
        letter-spacing: 2pt;
        margin-right: -2pt;
        padding: 8pt;

        color: white;
    }

    .routerLink{
        text-decoration: none;
    }
</style>