<template>
    <div id="inner-buttons-div">
        <HomeInnerButton title="RESUME" path="/resume"/>
        <HomeInnerButton title="PORTFOLIO" path="/portfolio"/>
        <HomeInnerButton title="CONTACT" path="/contact"/>
    </div>
</template>

<script>
    import HomeInnerButton from "@/components/home/HomeInnerButton";

    export default {
        name: "HomeInnerButtons",
        components: {
            HomeInnerButton,
        }
    }
</script>

<style scoped>
    @media (min-width: 412pt) {
        #inner-buttons-div {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media (max-width: 412pt) {
        #inner-buttons-div {
            grid-template-rows: 1fr 1fr 1fr;
        }
    }

    #inner-buttons-div {
        padding: 16pt;
        display: grid;
        margin: auto;
        grid-gap: 16pt;
    }
</style>