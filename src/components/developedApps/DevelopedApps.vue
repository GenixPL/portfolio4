<template>
    <div id="main-container">
        <NavBar/>

        <div class="header-text">DEVELOPED APPS</div>

        <ArticleCard
                title="Placelytics"
                :text='getPlacelyticsText()'
                path="/developed-apps/placelytics"
                imgPath="articles/placelytics/placelytics-banner.jpg"
        />

        <ArticleCard
                title="Quarantino"
                :text='getQuarantinoText()'
                path="/developed-apps/quarantino"
                imgPath="articles/quarantino/quarantino-banner.jpg"
        />

        <ArticleCard
                title="The Hardest Game"
                :text=getThgText()
                path="/developed-apps/the-hardest-game"
                imgPath="articles/thg/thg-banner.jpg"
        />

        <ArticleCard
                title="Pictile"
                :text=getPictileText()
                path="/developed-apps/pictile"
                imgPath="articles/pictile/pictile-banner.jpg"
        />

        <ArticleCard
                title="This website"
                :text=getWebisteText()
                path="/developed-apps/website"
                img-path="articles/website/website-banner.jpg"
        />

        <ArticleCard
                title="MyWord"
                :text=getMyWordText()
                path="/developed-apps/my-word"
                imgPath="articles/myWord/myword-banner.jpg"
        />

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import articles from '@/articles/articles';
    import ArticleCard from "@/components/common/ArticleCard";

    export default {
        name: "DevelopedApps",
        components: {
            ArticleCard,
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
    #main-container {
        min-height: 100vh;
        background: #303030;
    }

    .header-text {
        font-family: cp-mono, serif;
        font-size: 24pt;
        color: #ffb300;

        margin-top: 36pt;
    }

</style>