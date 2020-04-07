<template>
    <div>
        <NavBar/>
        <CenteredHeader text="WORK IN PROGRESS" />
        <div class="header-text">ALGORITHMS</div>
        <div class="article-header">Array slices with dynamic programming</div>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";

    export default {
        name: "Algorithms",
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