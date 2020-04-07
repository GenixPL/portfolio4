<template>
    <div>
        <NavBar/>
        <CenteredHeader text="WORK IN PROGRESS" />
        <div class="header-text">HACKATHONS</div>
        <div class="article-header">Hack the Crisis (aka Joke)</div>
        <div class="article-header">Facebook</div>
        <div class="article-header">Daftcode / Indoorway</div>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";

    export default {
        name: "Hackathons",
        components: {
            CenteredHeader,
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