<template>
    <div>
        <NavBar/>
        <ArticleBanner id="banner"/>
        <YtPlayer url="https://www.youtube.com/embed/h5CSd-B2x0w"/>

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import YtPlayer from "@/components/common/articles/YtPlayer";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";

    export default {
        name: "Placelytics",
        components: {
            ArticleBanner,
            YtPlayer,
            NavBar,
        },
    }
</script>

<style scoped>

    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/placelytics/placelytics-banner.jpg");
    }

</style>