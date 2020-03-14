<template>
    <div>
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
        div {
            display: flex;
        }
    }

    div {
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>