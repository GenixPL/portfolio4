<template>
    <div>
        <NavBar />
        <ArticleBanner id="banner"/>
        <CenteredHeader text="MyWord" />

        <LeftHeader text="Description" />
        <ArticleText v-bind:text=getText() />
        <ArticleText text="The first version of the app was very simple and ugly, but it was the one that started my mobile app programming for good, so I owe a lot to her. While making the second version, I already had some experience (enough to write it), but I chose completely wrong technology - NativeScript, which killed this attempt. At the beginning of my journey with Flutter I wanted to transfer the second version to this technology, but at that time I didn't have enough experience in it and the last semester of my engineering studies came. Mam nadzieję, że uda mi się napisać w końcu satysfakcjonującą mnie wersję I hope that I will finally be able to write a satisfactory version (maybe now that there is more time due to the virus (06.04.2020)?)." />

        <LeftHeader text="First version"/>
        <SmallLeftHeader text="Technologies" />
        <ArticleSmallPaddingText text="Android"/>
        <ArticleSmallPaddingText text="SQLite"/>
        <EnabledRepoLink url="https://github.com/GenixPL/WordMemoriser" />
        <ArticleText text="The first version was created, 1.5 years after the start of the adventure with programming, where additionally those 1.5 years were heavily filled with other non-programming subjects from the studies. In hindsight, you can see very well how I solved the problems I created myself :D and the fact that I didn't quite know how things work (as I mentioned it was my first mobile app)." />

        <div style="width:100%; max-width: 500pt; margin: 16pt auto;">
            <vueper-slides class="no-shadow" style="width: calc(100% - 112px); margin: 0 auto;" fixed-height="500px" :infinite="false"
                           :touchable="false" arrows-outside :bullets="false">
                <vueper-slide
                        v-for="(slide, i) in slides1"
                        :key="i"
                        :image='slide.image'
                        style="background-size: contain; background-repeat: no-repeat;"
                />
            </vueper-slides>
        </div>

        <LeftHeader text="Second version"/>
        <SmallLeftHeader text="Technologies" />
        <ArticleSmallPaddingText text="NativeScript" />
        <ArticleSmallPaddingText text="Firebase Auth"/>
        <ArticleSmallPaddingText text="Firestore"/>
        <EnabledRepoLink url="https://github.com/GenixPL/easyLearn" />
        <ArticleText text="I decided to write the second version in NativeScript because I liked the possibility of writing one code and having mobile and web applications at once. Well, let's not fool ourselves, it was a big mistake :D NativeScript was terrible, had a small community and few plugins. In addition, the fact that it was my first meeting with web technologies (Angular) did not make things any easier. Which ended in a pretty quick defeat." />

        <div style="width:100%; max-width: 500pt; margin: 16pt auto;">
            <vueper-slides class="no-shadow" style="width: calc(100% - 112px); margin: 0 auto;" fixed-height="500px" :infinite="false"
                           :touchable="false" arrows-outside :bullets="false">
                <vueper-slide
                        v-for="(slide, i) in slides2"
                        :key="i"
                        :image='slide.image'
                        style="background-size: contain; background-repeat: no-repeat;"
                />
            </vueper-slides>
        </div>

        <LeftHeader text="Third version" />
        <SmallLeftHeader text="Technologies" />
        <ArticleSmallPaddingText text="Flutter"/>
        <ArticleSmallPaddingText text="Firebase Auth"/>
        <ArticleSmallPaddingText text="Firestore"/>
        <ArticleSmallPaddingText text="Google Translation API"/>
        <EnabledRepoLink url="https://github.com/GenixPL/my-word" />
        <ArticleText text="With the third version I already had some experience (3 years after I started programming), but I decided to write it in Flutter... in which I had no experience (it can't be too easy :/). It took me a long time to play with the Widgets and work out the mechanisms of Flutter. When the first working version was on completion, I had to devote myself fully to the last semester of my studies, so the project was not developed for over six months. During this time, I learned a lot of things about Flutter and other backend stuff related to the production of applications, so before I can finish this application, I have to rewrite it :D. I hope I can finish it before I die.." />

        <div style="width:100%; max-width: 500pt; margin: 16pt auto;">
            <vueper-slides class="no-shadow" style="width: calc(100% - 112px); margin: 0 auto;" fixed-height="500px" :infinite="false"
                           :touchable="false" arrows-outside :bullets="false">
                <vueper-slide
                        v-for="(slide, i) in slides3"
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
    import CenteredHeader from "@/components/common/articles/CenteredHeader";
    import LeftHeader from "@/components/common/articles/LeftHeader";
    import ArticleText from "@/components/common/articles/ArticleText";
    import articles from "@/articles/articles";
    import EnabledRepoLink from "@/components/common/articles/EnabledRepoLink";
    import SmallLeftHeader from "@/components/common/articles/SmallLeftHeader";
    import ArticleSmallPaddingText from "@/components/common/articles/ArticleSmallPaddingText";

    import {VueperSlides, VueperSlide} from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        name: "MyWord",
        components: {
            ArticleSmallPaddingText,
            SmallLeftHeader,
            EnabledRepoLink,
            ArticleText,
            LeftHeader,
            CenteredHeader,
            NavBar,
            ArticleBanner,
            VueperSlides,
            VueperSlide,
        },
        methods: {
            getText() {
                return articles.myWord.text;
            }
        },
        data: function () {
            return {
                slides1: [
                    {image: require('@/assets/articles/myWord/ver1/1.png'),},
                    {image: require('@/assets/articles/myWord/ver1/2.png'),},
                    {image: require('@/assets/articles/myWord/ver1/3.png'),},
                    {image: require('@/assets/articles/myWord/ver1/4.png'),},
                    {image: require('@/assets/articles/myWord/ver1/5.png'),},
                    {image: require('@/assets/articles/myWord/ver1/6.png'),},
                    {image: require('@/assets/articles/myWord/ver1/7.png'),},
                    {image: require('@/assets/articles/myWord/ver1/8.png'),},
                ],
                slides2: [
                    {image: require('@/assets/articles/myWord/ver2/1.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/2.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/3.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/4.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/5.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/6.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/7.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/8.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/9.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/10.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/11.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/12.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/13.jpg'),},
                    {image: require('@/assets/articles/myWord/ver2/14.jpg'),},
                ],
                slides3: [
                    {image: require('@/assets/articles/myWord/ver3/1.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/2.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/3.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/4.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/5.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/6.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/7.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/8.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/9.jpg'),},
                    {image: require('@/assets/articles/myWord/ver3/10.jpg'),},
                ],
            }
        },
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/myWord/myword-banner.jpg");
    }
</style>