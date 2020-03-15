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

    /* good width & good height-> min h can be smaller */
    @media (min-height: 328pt) and (min-width: 412pt) {
        #home-container {
            height: 100vh;
        }
    }

    /* bad width & bad height */
    @media (max-height: 520pt) and (max-width: 412pt) {
        #home-container {
            height: 520pt;
        }
    }

    /* good width, but bad height*/
    @media (max-height: 328pt) and (min-width: 412pt) {
        #home-container {
            height: 328pt;
        }
    }

    /* good height, but bad width */
    @media (min-height: 520pt) and (max-width: 412pt){
        #home-container {
            height: 100vh;
        }
    }

    #home-container {
        width: 100vw;

        display: grid;
        grid-template-rows: 108pt auto 108pt;

        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/home/background.jpg");
        background-size: cover;
        background-position: center;
    }
</style>