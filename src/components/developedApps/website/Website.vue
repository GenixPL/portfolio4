<template>
    <div>
        <NavBar />
        <ArticleBanner id="banner"/>
        <CenteredHeader text="This website" />

        <LeftHeader text="Description" />
        <ArticleText v-bind:text=getText() />
        <ArticleText text="Since my web programming has so far been limited to one .Net course and not quite a successful attempt to use NativeScript, it can definitely be said that I had zero experience with web technologies. But! Flutter (which I knew) allows you to write web applications... What could go wrong?" />

        <LeftHeader text="First version"/>
        <EnabledRepoLink url="https://github.com/GenixPL/portfolio" />
        <ArticleText text="So I started to write this page in Flutter, at the beginning I was doing the design too similar to mobile apps, so I didn't like it all the time. Additionally, I started to have problems with performance, but life would be too easy if I combined it with the shortcomings of Flutter Web at this stage." />


        <LeftHeader text="Second version" />
        <EnabledRepoLink url="https://github.com/GenixPL/portfolio2" />
        <ArticleText text="I liked the second version much more. I had no problem writing more advanced views, because I already knew Flutter well. However, because I've been writing the second version only on my stronger computer, after firing it on a weaker computer and phone, I quickly came to the conclusion that Flutter Web still has a long way to go (and it is possible that the end will not be the happiest one :( ). So the decision was made to rewrite it in a proper web framework." />

        <LeftHeader text="Third version" />
        <ArticleText text="I chose React because I thought it might come in handy in the form of React Native. However, I quickly realized (after 2 days) that this is definitely not the technology for me and decided to move, at the persuasion of a colleague and after a short research, to..." />

        <LeftHeader text="Fourth version" />
        <EnabledRepoLink url="https://github.com/GenixPL/portfolio4"/>
<!--        TODO add here special link-->
        <ArticleText text="…to Vue and it was a good decision. However my lack of experience in web technologies (js, html, css) is definitely not helpful when it comes to writing nice webpages. So my torments have no end, as do the hours of debugging and trying to write a simple button the way I want it. However, step by step, somehow I'm moving forward, although not fast, because I still have some other projects." />
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";
    import LeftHeader from "@/components/common/articles/LeftHeader";
    import articles from "@/articles/articles";
    import ArticleText from "@/components/common/articles/ArticleText";
    import EnabledRepoLink from "@/components/common/articles/EnabledRepoLink";

    export default {
        name: "Website",
        components: {
            EnabledRepoLink,
            ArticleText,
            LeftHeader,
            CenteredHeader,
            ArticleBanner,
            NavBar,
        },
        methods: {
            getText() {
                return articles.website.text;
            }
        }
    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/website/website-banner.jpg");
    }
</style>