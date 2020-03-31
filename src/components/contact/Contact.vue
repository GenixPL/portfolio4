<template>
    <div style="height: 100vh; min-height: 360pt; display: flex; flex-direction: column;">
        <NavBar :enlarged-position="4" ref="navBar"/>
        <div id="contact-container">
            <div style="
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;">
                <div id="contact-me-text">CONTACT ME</div>
                <div class="contact-info-text">If you have any questions or offers, please feel free to write.</div>
                <div id="email-text">lhniedzialek@gmail.com</div>
            </div>
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

<!-- TODO possibly add emailing form-->

<style scoped>
    #contact-container {
        width: 100vw;

        height: 100%;
        align-self: stretch;

        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("../../assets/contact/mailbox.jpg");
        background-size: cover;
        background-position: center;
    }

    #contact-me-text {
        color: white;
        font-family: cp-mono, serif;
        font-size: 32pt;
        font-weight: bold;
        letter-spacing: 4pt;
        margin-right: -4pt;
    }

    .contact-info-text {
        max-width: 280pt;
        align-self: center;
        padding-top: 12pt;
        padding-bottom: 24pt;
        text-align: center;
        color: white;
        font-family: prime, serif;
        font-size: 16pt;
        font-weight: bold;
    }

    #email-text {
        align-self: center;
        background-color: #ffc107;
        padding: 12pt 16pt;
        font-family: prime, serif;
        font-size: 16pt;
        font-weight: bold;
        letter-spacing: 2pt;
    }


</style>