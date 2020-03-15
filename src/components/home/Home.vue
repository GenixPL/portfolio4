<template>
    <div id="home-container">
        <HomeHeader/>
        <HomeInnerButtons/>
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
    @media (max-height: 520pt) {
        #home-container {
            height: 520pt;
        }
    }

    @media (min-height: 520pt) {
        #home-container {
            height: 100vh;
        }
    }

    #home-container {
        width: 100vw;

        display: grid;
        grid-template-rows: 72pt auto 72pt;

        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/home/background.jpg");
        background-size: cover;
        background-position: center;
    }
</style>