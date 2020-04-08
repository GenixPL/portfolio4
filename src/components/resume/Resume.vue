<template>
    <div>
        <NavBar :enlarged-position="2"/>
        <div id="wip-text">WORK IN PROGRESS</div>
        <div id="second-text">You can download pdf version for now</div>

        <a class="download-button"
           href="https://genixpl.github.io/download/lukasz-niedzialek-cv.pdf"
           download
        >
            DOWNLOAD
        </a>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "Resume",
        components: {
            NavBar,
        },
    }
</script>

<style scoped>

    #wip-text {
        font-family: cp-mono, serif;
        font-size: 16pt;
        margin-top: 32pt;
    }

    #second-text {
        font-family: prime, serif;
        text-transform: uppercase;
        margin-top: 8pt;
        margin-bottom: 8pt;
    }

    .download-button {
        background: #ffb300;
        display: inline;
        align-self: center;

        color: black;
        text-decoration: none;
        font-size: 16pt;
        font-family: cp-mono, serif;

        padding: 4pt 8pt 3pt 8pt;

        transition: background 0.5s ease;
    }

    .download-button:hover {
        background: #9e7700;
    }

</style>