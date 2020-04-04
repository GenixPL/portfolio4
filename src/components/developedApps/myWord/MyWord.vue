<template>
    <div>
        <NavBar />
        <ArticleBanner id="banner"/>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";

    export default {
        name: "MyWord",
        components: {
            NavBar,
            ArticleBanner,
        },
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/myWord/myword-banner.jpg");
    }
</style>