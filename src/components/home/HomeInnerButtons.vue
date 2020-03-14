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
    @media (min-width: 408pt) {
        #inner-buttons-div {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    #inner-buttons-div {
        margin: auto;
        background: #ffc107;
    }
</style>