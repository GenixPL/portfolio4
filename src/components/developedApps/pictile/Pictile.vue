<template>
    <div>
        <NavBar />
        <ArticleBanner id="banner"/>

        <CenteredHeader text="Pictile"/>

        <EnabledRepoLink url="https://github.com/GenixPL/pictile"/>
        <EnabledGooglePlayLink url="https://play.google.com/store/apps/details?id=com.genix.pictile&gl=PL"/>

        <LeftHeader text="Technologies" />
        <ArticleSmallPaddingText text="Flutter"/>
        <ArticleSmallPaddingText text="sqflite"/>

        <LeftHeader text="Lines of code"/>
        <ArticleSmallPaddingText text="Dart: 2278"/>

        <LeftHeader text="Description" />
        <ArticleText v-bind:text=getText() />
        <ArticleText text="I made it for my sister, who needed such a tool to learn biology, and the existing solutions did not satisfy her. I wanted the application to be 100% free, so I didn't add any possibility to store data except for the phone. However, I implemented data storage in such a way that it would be kept after uninstalling the application, in case of any accidental deletion (user can delete files using a file manager)."/>

        <div style="max-width: 500pt; margin: 16pt auto;">
            <vueper-slides class="no-shadow" style="width: 80%; margin: 0 auto" fixed-height="500px" :infinite="false"
                           :touchable="false" arrows-outside>
                <vueper-slide
                        v-for="(slide, i) in slides"
                        :key="i"
                        :image='slide.image'
                        style="background-size: contain; background-repeat: no-repeat;"
                />
            </vueper-slides>
        </div>

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    import ArticleText from "@/components/common/articles/ArticleText";
    import LeftHeader from "@/components/common/articles/LeftHeader";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";
    import articles from "@/articles/articles";
    import ArticleSmallPaddingText from "@/components/common/articles/ArticleSmallPaddingText";
    import EnabledRepoLink from "@/components/common/articles/EnabledRepoLink";
    import EnabledGooglePlayLink from "@/components/common/articles/EnabledGooglePlayLink";

    import {VueperSlides, VueperSlide} from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        name: "pictile",
        components: {
            EnabledGooglePlayLink,
            EnabledRepoLink,
            ArticleSmallPaddingText,
            CenteredHeader,
            LeftHeader,
            ArticleText,
            ArticleBanner,
            NavBar,
            VueperSlides,
            VueperSlide,
        },
        methods: {
            getText() {
              return articles.pictile.text;
            },
        },
        data: function () {
            return {
                slides: [
                    {image: require('@/assets/articles/pictile/1.jpg'),},
                    {image: require('@/assets/articles/pictile/2.jpg'),},
                    {image: require('@/assets/articles/pictile/3.jpg'),},
                    {image: require('@/assets/articles/pictile/4.jpg'),},
                    {image: require('@/assets/articles/pictile/5.jpg'),},
                    {image: require('@/assets/articles/pictile/6.jpg'),},
                    {image: require('@/assets/articles/pictile/7.jpg'),},
                ],
            }
        },
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/pictile/pictile-banner.jpg");
    }
</style>