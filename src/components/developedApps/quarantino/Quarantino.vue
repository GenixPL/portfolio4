<template>
    <div>
        <NavBar />
        <ArticleBanner id="banner" />
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    export default {
        name: "Quarantino",
        components: {ArticleBanner, NavBar}
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/quarantino/quarantino-banner.jpg");
    }
</style>