<template>
    <div>
        <NavBar/>
        <CenteredHeader text="WORK IN PROGRESS" />
        <div class="header-text">FLUTTER STUFF</div>
        <div class="header-text">Home page with world map</div>
        <div class="header-text">Animated tiles show up</div>
        <div class="header-text">Slide transition</div>
        <div class="header-text">Clox</div>
<!-- TODO add ui challenges -->

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";

    export default {
        name: "FlutterStuff",
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