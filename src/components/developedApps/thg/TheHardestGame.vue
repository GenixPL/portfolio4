<template>
    <div>
        <NavBar />
        <ArticleBanner id="banner"/>

        <CenteredHeader text="The Hardest Game"/>

        <EnabledGooglePlayLink url="https://play.google.com/store/apps/details?id=com.appvinio.logicgame1&fbclid=IwAR0Lct0Xf3Gl6JKOTI_vHCvjveOyAqr20aRH59420pcQR0MLv6T2W1-PYEg"/>

        <LeftHeader text="Coauthor" />
        <ArticleSmallPaddingText text="Rafał Dziuryk (main author)" />

        <LeftHeader text="Technologies" />
        <ArticleSmallPaddingText text="Flutter"/>
        <ArticleSmallPaddingText text="Rive"/>

        <LeftHeader text="Description"/>
        <ArticleText v-bind:text=getText() />

        <div style="width:100%; max-width: 500pt; margin: 16pt auto;">
            <vueper-slides class="no-shadow" style="width: calc(100% - 112px); margin: 0 auto;" fixed-height="500px" :infinite="false"
                           :touchable="false" arrows-outside :bullets="false">
                <vueper-slide
                        v-for="(slide, i) in slides"
                        :key="i"
                        :image='slide.image'
                        style="background-size: contain; background-repeat: no-repeat;"
                />
            </vueper-slides>
        </div>

        <LeftHeader text="My part"/>
        <ArticleText text="My only interference in the project was graphic improvements. Rafał published a post on the forum about his project and I found the game so cool that I couldn't leave it in the same graphic state as it was - very simple elements and lack of support for: different sizes of screens and horizontal game."/>


        <LeftHeader text="Video"/>
        <ArticleText text="This video presents UI changes made by me."/>
        <YtPlayer url="https://www.youtube.com/embed/KSW5koz3zkU"/>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    import YtPlayer from "@/components/common/articles/YtPlayer";
    import ArticleText from "@/components/common/articles/ArticleText";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";
    import LeftHeader from "@/components/common/articles/LeftHeader";
    import articles from "@/articles/articles";
    import ArticleSmallPaddingText from "@/components/common/articles/ArticleSmallPaddingText";
    import EnabledGooglePlayLink from "@/components/common/articles/EnabledGooglePlayLink";

    import {VueperSlides, VueperSlide} from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        name: "TheHardestGame",
        components: {
            EnabledGooglePlayLink,
            ArticleSmallPaddingText,
            LeftHeader,
            CenteredHeader,
            ArticleText,
            YtPlayer,
            ArticleBanner,
            NavBar,
            VueperSlides,
            VueperSlide,
        },
        methods: {
            getText() {
                return articles.thg.text;
            }
        },
        data: function () {
            return {
                slides: [
                    {image: require('@/assets/articles/thg/1.jpg'),},
                    {image: require('@/assets/articles/thg/2.jpg'),},
                    {image: require('@/assets/articles/thg/3.jpg'),},
                    {image: require('@/assets/articles/thg/4.jpg'),},
                    {image: require('@/assets/articles/thg/5.jpg'),},
                    {image: require('@/assets/articles/thg/6.jpg'),},
                ],
            }
        },
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/thg/thg-banner.jpg");
    }
</style>