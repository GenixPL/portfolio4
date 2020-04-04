<template>
    <div>
        <NavBar/>

        <div class="header-text">DEVELOPED APPS</div>

        <ArticleHeader id="placelytics"
                       title="Placelytics"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       navigateTo="/developed-apps/placelytics"
        />

        <ArticleHeader id="pictile"
                       title="Pictile"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       navigateTo="/developed-apps/pictile"
        />

        <ArticleHeader id="thg"
                       title="The Hardest Game"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       navigateTo="/developed-apps/the-hardest-game"
        />

        <ArticleHeader id="quarantino"
                       title="Quarantino"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       navigateTo="/developed-apps/quarantino"
        />

        <ArticleHeader id="website"
                       title="This website"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       navigateTo="/developed-apps/website"
        />

        <ArticleHeader id="my-word"
                       title="MyWord"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       navigateTo="/developed-apps/my-word"
        />

        <!--   TODO: add   -->
        <!--        <ArticleHeader title="My first app"/>-->

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleHeader from "@/components/portfolio/ArticleHeader";

    export default {
        name: "DevelopedApps",
        components: {
            ArticleHeader,
            NavBar,
        },
    }
</script>

<style scoped>
    .header-text {
        font-family: cp-mono, serif;
        font-size: 20pt;

        margin-top: 16pt;
    }

    #placelytics {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/articles/placelytics/placelytics-banner.jpg");
    }

    #pictile {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/articles/pictile/pictile-banner.jpg");
    }

    #thg {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/articles/thg/thg-banner.jpg");
    }

    #quarantino {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/articles/quarantino/quarantino-banner.jpg");
    }

    #website {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/articles/website/website-banner.jpg");
    }

    #my-word {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/articles/myWord/myword-banner.jpg");
    }

</style>