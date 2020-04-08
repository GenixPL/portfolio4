<template>
    <div>
        <router-link class="routerLink" :to=navigateTo>
            <div class="nav-button">SEE MORE</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavigateButton",
        props: {
            navigateTo: String,
        },
    }
</script>

<style scoped>
    .nav-button {
        display: inline-block;

        font-size: 16pt;
        font-family: cp-mono, serif;

        padding: 4pt 8pt 3pt 8pt;

        transition: 0.3s ease;

        color: #494949 !important;
        background: #ffffff;
        border: 4px solid #494949 !important;
    }

    .nav-button:hover {
        color: #ffffff !important;
        background: #ffb300;
        border-color: #ffb300 !important;
    }
</style>