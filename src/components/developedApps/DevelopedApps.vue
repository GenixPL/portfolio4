<template>
    <div>
        <NavBar/>
        <div class="header-text">DEVELOPED APPS</div>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "DevelopedApps",
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