<template>
    <div>
        <NavBar :enlarged-position="4"/>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "Contact",
        components: {
            NavBar,
        },
    }
</script>

<style scoped>

</style>