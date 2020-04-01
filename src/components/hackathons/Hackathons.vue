<template>
    <div>
        <NavBar/>
        <div class="header-text">HACKATHONS</div>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "Hackathons",
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