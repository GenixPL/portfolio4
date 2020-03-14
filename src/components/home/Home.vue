<template>
    <div>
        <HomeHeader/>
        <HomeInnerButton />
    </div>
</template>

<script>
    import HomeHeader from "@/components/home/HomeHeader";
    import HomeInnerButton from "@/components/home/HomeInnerButton";

    export default {
        name: "Home",
        components: {HomeInnerButton, HomeHeader}
    }
</script>

<style scoped>

</style>