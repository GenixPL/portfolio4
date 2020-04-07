<template>
    <div>

        <NavBar :enlarged-position="3"/>

        <div id="groups-container">

            <div class="group-container" id="group-1">
                <div class="group-header">DEVELOPED APPS</div>
                <NavigateButton navigateTo="/developed-apps"/>
            </div>

            <div class="group-container" id="group-2">
                <div class="group-header">ALGORITHMS</div>
                <NavigateButton navigateTo="/algorithms"/>
            </div>

            <div class="group-container" id="group-3">
                <div class="group-header">HACKATHONS</div>
                <NavigateButton navigateTo="/hackathons"/>
            </div>

            <div class="group-container" id="group-4">
                <div class="group-header">FLUTTER STUFF</div>
                <NavigateButton navigateTo="/flutter-stuff"/>
            </div>

            <!--            <div class="group-container" id="group-5">-->
            <!--                <div class="group-header">OTHER</div>-->
            <!--                <router-link class="routerLink" to='/other-articles'>-->
            <!--                    <div class="download-button">SEE MORE</div>-->
            <!--                </router-link>-->
            <!--            </div>-->

        </div>

    </div>
</template>

<!-- TODO: try to preload images -->

<script>
    import NavBar from "@/components/navBar/NavBar";
    import NavigateButton from "@/components/common/NavigateButton";


    export default {
        name: "Portfolio",
        components: {
            NavBar,
            NavigateButton,
            // NavBar,
        },
    }
</script>

<style scoped>

    @media (max-width: 732pt) {
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