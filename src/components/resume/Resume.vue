<template>
    <div>
        <NavBar :enlarged-position="2"/>
        <div id="wip-text">WORK IN PROGRESS</div>
        <div id="second-text">You can download pdf version for now</div>
        <div class="group-button" v-on:click="downloadCv">DOWNLOAD</div>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "Resume",
        components: {
            NavBar,
        },
        methods: {
            downloadCv() {
                console.log('download');
            }
        }
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

    .group-button {
        background: #ffc107;
        display: inline;
        align-self: center;

        font-size: 16pt;
        font-family: cp-mono, serif;

        padding: 4pt 8pt 3pt 8pt;

        transition: background 0.5s ease;
    }

    .group-button:hover {
        background: #9e7700;
    }

</style>