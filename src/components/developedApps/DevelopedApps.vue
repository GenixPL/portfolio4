<template>
    <div>
        <NavBar/>
        <div class="header-text">DEVELOPED APPS</div>
        <div class="article-header">Placelytics</div>
        <div class="article-header">Pictile</div>
        <div class="article-header">The Hardest Game</div>
        <div class="article-header">Quarantino</div>
        <div class="article-header">MyWord</div>
        <div class="article-header">My first app</div>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "DevelopedApps",
        components: {
            NavBar,
        },
    }
</script>

<style scoped>
    .header-text {
        font-family: cp-mono, serif;
        font-size: 20pt;

        margin-top: 16pt;
    }

    .article-header {
        font-family: cp-mono, serif;
        font-size: 16pt;

        margin-top: 16pt;
    }

</style>