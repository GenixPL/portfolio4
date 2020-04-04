<template>
    <div style="display: inline">
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
        background: #ffc107;
        display: inline;
        align-self: center;

        font-size: 16pt;
        font-family: cp-mono, serif;

        padding: 4pt 8pt 3pt 8pt;

        transition: background 0.5s ease;
    }

    .nav-button:hover {
        background: #9e7700;
    }
</style>