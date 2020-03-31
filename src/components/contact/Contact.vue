<template>
    <div style="height: 100vh; display: flex; flex-direction: column;">
        <NavBar :enlarged-position="4" ref="navBar"/>
        <div id="contact-container">
        </div>
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
    #contact-container {
        width: 100vw;

        height: 100%;
        align-self: stretch;

        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/contact/mailbox.jpg");
        background-size: cover;
        background-position: center;
    }
</style>