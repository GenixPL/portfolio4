<template>
    <div id="main-container">
        <NavBar/>
        <div class="header-text">FLUTTER STUFF</div>

        <ArticleCard
                title="Home buttons layout"
                :text='getButtonsLayoutText()'
                path="/flutter-stuff/home-buttons-layout"
                imgPath="articles/buttonsLayout/buttons-layout-banner.png"
        />

<!--        TODO -->
<!--        <div class="header-text">Animated tiles show up</div>-->
<!--        <div class="header-text">Slide transition</div>-->
<!--        <div class="header-text">Clox</div>-->

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleCard from "@/components/common/ArticleCard";
    import articles from "@/articles/articles";

    export default {
        name: "FlutterStuff",
        components: {
            ArticleCard,
            NavBar,
        },
        methods: {
            getButtonsLayoutText() {
                return articles.homeButtonsLayout.text;
            },
        },
    }
</script>

<style scoped>
    #main-container {
        min-height: 100vh;
        padding-bottom: 20px;
        background: #303030;
    }

    .header-text {
        font-family: cp-mono, serif;
        font-size: 24pt;
        color: #ffb300;

        margin-top: 36pt;
    }
</style>