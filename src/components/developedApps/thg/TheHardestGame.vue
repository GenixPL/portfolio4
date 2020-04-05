<template>
    <div>
        <NavBar />
        <ArticleBanner id="banner"/>
        <YtPlayer url="https://www.youtube.com/embed/KSW5koz3zkU"/>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    import YtPlayer from "@/components/common/articles/YtPlayer";
    export default {
        name: "TheHardestGame",
        components: {YtPlayer, ArticleBanner, NavBar}
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/thg/thg-banner.jpg");
    }
</style>