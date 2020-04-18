<template>
    <div>
        <NavBar/>
        <ArticleBanner id="banner"/>
        <CenteredHeader text="Home buttons layout"/>

        <EnabledRepoLink url="https://github.com/GenixPL/tutorials/tree/master/menu-buttons-layout"/>

        <ArticleText :text='getText()'/>

        <div id="placelytics-img"/>

        <ArticleText
                text="Most of the process is shown in the video. The math used is at a very basic level and all the 'more' advanced flutter things I've tried to explain briefly on video or in code. "/>
        <ArticleText
                text="If you have any additional questions, you can write them in the comments underneath the video or to me by email, I will try to help you as soon as I can."/>

        <LeftHeader text="Tutorial video"/>
                <YtPlayer url="https://www.youtube.com/embed/0bibUxiA0UY"/>

        <LeftHeader text="Additional shadow"/>
        <ArticleText
                text="If you want to add a shadow to these buttons, unfortunately, a regular BoxShadow will not work here. One way to achieve an elevation effect is to add another Container in SingleButton, the same one as the one creating the button (but a little bit bigger), place it below the Container building the button, and adjust it to resemble a shadow (using gradient or an extra blurring layer)."/>

<!-- TODO finish that-->
<!--        <LeftHeader text="How to add moving world map"/>-->
<!--        <LinkWithDescription text="1. Take a world map,e.g. from this site:"-->
<!--                             url="https://simplemaps.com/resources/svg-world"/>-->


<!--        <ArticleSmallPaddingText text="Color it if you want"/>-->


<!--        <ArticleSmallPaddingText text="Animate it"/>-->
<!--        <ArticleSmallPaddingText-->
<!--                text="You can use Rive or (e.g.) Adobe AA, export it as JSON, put into Rive and then generate .flr"/>-->


<!--        <ArticleText-->
<!--                text="(extra tip ;) ) animate it in Adobe AA, export as JSON, put that JSON into Rive and then generate .flr"/>-->


<!--        <ArticleText text="Add animation to your app"/>-->


    </div>
</template>

<script>
    import EnabledRepoLink from "@/components/common/articles/EnabledRepoLink";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    import articles from "@/articles/articles";
    import ArticleText from "@/components/common/articles/ArticleText";
    import LeftHeader from "@/components/common/articles/LeftHeader";
    import YtPlayer from "@/components/common/articles/YtPlayer";

    export default {
        name: "ButtonsLayout",
        components: {
            YtPlayer,
            LeftHeader,
            ArticleText,
            ArticleBanner,
            NavBar,
            CenteredHeader,
            EnabledRepoLink,
        },
        methods: {
            getText() {
                return articles.homeButtonsLayout.text;
            }
        },
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/buttonsLayout/buttons-layout-banner.png");
    }

    #placelytics-img {
        width: 100%;
        max-width: 560pt;
        margin: 20px auto;
        height: 500px;

        background-image: url("../../../assets/articles/placelytics/2.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    ol {
        width: 100%;
        max-width: 600pt;
        margin: 0 auto;
        padding-right: 8pt;
        padding-left: 8pt;
    }

</style>