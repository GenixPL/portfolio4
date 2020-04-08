<template>
    <div>
        <NavBar/>

        <div class="header-text">DEVELOPED APPS</div>

        <ArticleHeader id="placelytics"
                       title="Placelytics"
                       v-bind:text=getPlacelyticsText()
                       navigateTo="/developed-apps/placelytics"
        />

        <ArticleHeader id="quarantino"
                       title="Quarantino"
                       v-bind:text=getQuarantinoText()
                       navigateTo="/developed-apps/quarantino"
        />

        <ArticleHeader id="thg"
                       title="The Hardest Game"
                       v-bind:text=getThgText()
                       navigateTo="/developed-apps/the-hardest-game"
        />

        <ArticleHeader id="pictile"
                       title="Pictile"
                       v-bind:text=getPictileText()
                       navigateTo="/developed-apps/pictile"
        />

        <ArticleHeader id="website"
                       title="This website"
                       v-bind:text=getWebisteText()
                       navigateTo="/developed-apps/website"
        />

        <ArticleHeader id="my-word"
                       title="MyWord"
                       v-bind:text=getMyWordText()
                       navigateTo="/developed-apps/my-word"
        />

        <!--   TODO: add   -->
        <!--        <ArticleHeader title="My first app"/>-->

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleHeader from "@/components/portfolio/ArticleHeader";
    import articles from '@/articles/articles';

    export default {
        name: "DevelopedApps",
        components: {
            ArticleHeader,
            NavBar,
        },
        methods: {
            getPlacelyticsText() {
                return articles.placelytics.text;
            },
            getPictileText() {
                return articles.pictile.text;
            },
            getThgText() {
                return articles.thg.text;
            },
            getQuarantinoText() {
                return articles.quarantino.text;
            },
            getWebisteText() {
                return articles.website.text;
            },
            getMyWordText() {
                return articles.myWord.text;
            },
        }
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