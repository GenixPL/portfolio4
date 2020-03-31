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
    @media (min-width: 360pt) {
        #navBar-container {
            display: flex;
        }
    }

    #navBar-container {
        background-color: #ffc107;

        width: 100vw;

        align-items: center;
        justify-content: center;

        padding-top: 8pt;
        padding-bottom: 8pt;
    }

    .page-text {
        font-family: cp-mono, serif;
        color: black;
        padding: 4pt 16pt;
    }

    .enlarged-text {
        font-size: 16pt;
    }

</style>