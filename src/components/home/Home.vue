<template>
    <div>
        <div id="div-top">
            <HomeHeader/>
        </div>
        <div id="div-center">
            <HomeInnerButtons/>
        </div>
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
    #div-top {
        position: absolute;
        display: flex;
        width: 100vw;
        justify-content: center;
    }

    #div-center {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
</style>