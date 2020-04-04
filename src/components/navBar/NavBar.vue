<template>
    <div id="navBar-container">
        <router-link class="routerLink" to="/">
            <div class="page-text" v-bind:class="[ enlargedPosition === 1 ? 'enlarged-text' : '']">HOME</div>
        </router-link>

        <router-link class="routerLink" to="/resume">
            <div class="page-text" v-bind:class="[ enlargedPosition === 2 ? 'enlarged-text' : '']">RESUME</div>
        </router-link>

        <router-link class="routerLink" to="/portfolio">
            <div class="page-text" v-bind:class="[ enlargedPosition === 3 ? 'enlarged-text' : '']">PORTFOLIO</div>
        </router-link>

        <router-link class="routerLink" to="/contact">
            <div class="page-text" v-bind:class="[ enlargedPosition === 4 ? 'enlarged-text' : '']">CONTACT</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            enlargedPosition: Number,
        },
    }
</script>

<style scoped>
    #navBar-container {
        background-color: #ffc107;

        width: 100%;
        position: sticky;
        top: 0;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        padding-top: 8pt;
        padding-bottom: 8pt;
    }

    .page-text {
        font-family: cp-mono, serif;
        color: black;

        margin: 4pt;

        width: 100pt;
        height: 22pt;

        transition: color 0.5s ease;

        text-align: center;
        vertical-align: middle;
        line-height: 22pt;
    }

    .page-text:hover {
        color: #404040;
    }

    .enlarged-text {
        font-size: 16pt;
    }

</style>