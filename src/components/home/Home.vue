<template>
    <div id="home-container">
        <HomeHeader />
        <HomeInnerButtons />
    </div>
</template>

<script>
    import HomeHeader from "@/components/home/HomeHeader";
    import HomeInnerButtons from "@/components/home/HomeInnerButtons";

    export default {
        name: "Home",
        components: {
            HomeInnerButtons,
            HomeHeader
        },
    }
</script>

<style scoped>
    #home-container {
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-rows: 72pt auto 72pt;

        background-image: url("../../assets/background.jpg");
        background-size: cover;
        background-position: center;
    }
</style>