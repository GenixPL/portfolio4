<template>
    <div>
        <NavBar/>
        <div class="header-text">FLUTTER STUFF</div>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "FlutterStuff",
        components: {
            NavBar,
        },
    }
</script>

<style scoped>
    .header-text {
        font-family: cp-mono, serif;
        font-size: 16pt;

        margin-top: 16pt;
    }
</style>