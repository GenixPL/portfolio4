<template>
    <div>
        <NavBar/>
        <ArticleBanner id="banner"/>
        <CenteredHeader text="Placelytics"/>

        <DisabledRepoLink text="Link to the repository available on request"/>
        <DisabledGooglePlayLink text="Link to the app available on request (if backend still works)"/>

        <LeftHeader text="Coauthors" />
        <ArticleSmallPaddingText text="Karol Kłosowski"/>
        <ArticleSmallPaddingText text="Piotr Pilis"/>

        <LeftHeader text="Technologies" />
        <ArticleSmallPaddingText text="Flutter"/>
        <ArticleSmallPaddingText text="Firebase Auth"/>
        <ArticleSmallPaddingText text="Firestore"/>
        <ArticleSmallPaddingText text="Google Maps"/>
        <ArticleSmallPaddingText text="Rive"/>

        <LeftHeader text="Lines of code"/>
        <ArticleSmallPaddingText text="Dart: 17897"/>


        <LeftHeader text="Description" />
        <ArticleText v-bind:text=getPlacelyticsText() />

        <LeftHeader text="My part" />
        <ArticleText text="I was responsible for the full development of the mobile applications (iOS and Android) implemented in Flutter. These were my first steps in Flutter and during the hundreds of hours I spent writing the whole app I learned a lot. Many things I would do differently now (architectural and widget), many things I used wrongly (e.g. Provider), but I've also managed to create components that I already copied to many other projects. One of them is my Navigator override, which I put from the beginning to 'every' new project (maybe one day there will be an article about it)."/>

        <ArticleList
                header="Finally, the following functionalities were implemented:"
                :children="[
                    'user account management',
                    'user file management',
                    'searching for places through: name, categories and location',
                    'depicting places on the map (using the map plugin was the biggest nightmare)',
                    'displaying details of the selected location and its reviews',
                    'possibility to compare selected places through a special list and customisable table (unfortunately heatmaps could not be added)',
                    'possibility to save selected places in your collection through your own tags',
                    'possibility to attach simple notes to any place',
                ]"
        />

        <LeftHeader text="Video" />
        <ArticleText text="(Unfortunately, I didn't find the time to improve it)"/>
        <YtPlayer url="https://www.youtube.com/embed/h5CSd-B2x0w"/>

    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import YtPlayer from "@/components/common/articles/YtPlayer";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";
    import ArticleText from "@/components/common/articles/ArticleText";
    import ArticleList from "@/components/common/articles/ArticleList";
    import LeftHeader from "@/components/common/articles/LeftHeader";
    import articles from '@/articles/articles';
    import DisabledRepoLink from "@/components/common/articles/DisabledRepoLink";
    import ArticleSmallPaddingText from "@/components/common/articles/ArticleSmallPaddingText";
    import DisabledGooglePlayLink from "@/components/common/articles/DisabledGooglePlayLink";

    export default {
        name: "Placelytics",
        components: {
            DisabledGooglePlayLink,
            DisabledRepoLink,
            ArticleSmallPaddingText,
            LeftHeader,
            ArticleList,
            ArticleText,
            CenteredHeader,
            ArticleBanner,
            YtPlayer,
            NavBar,
        },
        methods: {
            getPlacelyticsText() {
                return articles.placelytics.text;
            },
        }
    }
</script>

<style scoped>

    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/placelytics/placelytics-banner.jpg");
    }

</style>