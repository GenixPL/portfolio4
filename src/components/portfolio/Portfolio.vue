<template>
    <div>

        <NavBar :enlarged-position="3"
                style="position: sticky; top: 0;"/>

        <div id="groups-container">
            <div class="group-container" id="group-1">
                <div class="group-header">DEVELOPED APPS</div>
                <router-link class="routerLink" to='/developed-apps'>
                    <div class="download-button">SEE MORE</div>
                </router-link>
            </div>
            <div class="group-container" id="group-2">
                <div class="group-header">ALGORITHMS</div>
                <router-link class="routerLink" to='/algorithms'>
                    <div class="download-button">SEE MORE</div>
                </router-link>
            </div>
            <div class="group-container" id="group-3">
                <div class="group-header">HACKATHONS</div>
                <router-link class="routerLink" to='/hackathons'>
                    <div class="download-button">SEE MORE</div>
                </router-link>
            </div>
            <div class="group-container" id="group-4">
                <div class="group-header">FLUTTER STUFF</div>
                <router-link class="routerLink" to='/flutter-stuff'>
                    <div class="download-button">SEE MORE</div>
                </router-link>

            </div>
            <div class="group-container" id="group-5">
                <div class="group-header">OTHER</div>
                <router-link class="routerLink" to='/other-articles'>
                    <div class="download-button">SEE MORE</div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";

    export default {
        name: "Portfolio",
        components: {
            NavBar,
        },
    }
</script>

<style scoped>

    @media (max-width: 444px) {
        .group-container {
            border-bottom: 2pt solid #ffc107;
        }
    }

    @media (min-width: 732pt) {
        .group-container {
            width: 340pt;
            border: 2pt solid #ffc107;
            margin: 8pt;
        }

        #groups-container {
            max-width: 1080pt;
            margin: 10pt auto;

            display: flex;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
        }
    }

    .group-container {
        height: 240pt;

        display: flex;
        flex-direction: column;
        justify-content: center;

        background-size: cover;
        background-position: center;
    }

    .group-header {
        font-size: 32pt;
        font-family: cp-mono, serif;
        color: white;

        margin-bottom: 12pt;
    }

    .download-button {
        background: #ffc107;
        display: inline;
        align-self: center;

        font-size: 16pt;
        font-family: cp-mono, serif;

        padding: 4pt 8pt 3pt 8pt;

        transition: background 0.5s ease;
    }

    .download-button:hover {
        background: #9e7700;
    }

    #groups-container {

    }

    #group-1 {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/portfolio/apps.jpeg");
    }

    #group-2 {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/portfolio/algorithm.jpg");
    }

    #group-3 {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/portfolio/hackathon.jpeg");
    }

    #group-4 {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/portfolio/flutter.jpg");
    }

    #group-5 {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/home/background.jpg");
    }

</style>