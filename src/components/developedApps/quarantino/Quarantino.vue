<template>
    <div>
        <NavBar/>
        <ArticleBanner id="banner"/>
        <CenteredHeader text="Quarantino"/>

        <DisabledRepoLink text="Link to the repository available on request"/>
        <DisabledGooglePlayLink text="Link to the app available on request (if backend still works)"/>

        <LeftHeader text="Coauthors"/>
        <ArticleSmallPaddingText text="... (Business Model & User Experience Lead)"/>
        <ArticleSmallPaddingText text="Katarzyna Rode (Project Manager)"/>
        <ArticleSmallPaddingText text="Bartłomiej Margas (Designer)"/>
        <ArticleSmallPaddingText text="Jakub Wyszomierski (Content Manager)"/>
        <ArticleSmallPaddingText text="Piotr Pilis (Backend Developer)"/>
        <ArticleSmallPaddingText text="Wojciech Pyrak (Data Scientist)"/>

        <LeftHeader text="Technologies"/>
        <ArticleSmallPaddingText text="Flutter"/>
        <ArticleSmallPaddingText text="Rive"/>
        <ArticleSmallPaddingText text="Firebase Auth"/>
        <ArticleSmallPaddingText text="Firestore"/>
        <ArticleSmallPaddingText text="Firebase Storage"/>
        <ArticleSmallPaddingText text="Google Cloud Messaging"/>
        <ArticleSmallPaddingText text="Android Jetpack"/>

        <LeftHeader text="Lines of code"/>
        <ArticleSmallPaddingText text="Dart: 4326"/>
        <ArticleSmallPaddingText text="Kotlin: 219"/>

        <LeftHeader text="Description"/>
        <ArticleText v-bind:text='getText()'/>
        <ArticleText
                text="Knowing the situation in other countries, we decided to create an application whose main purpose was to help in checking the people under mandatory quarantine, because as the epidemic worsens, it becomes an unsolvable problem. Unfortunately, during the second day of programming, life reminded us of itself, because it turned out that the Polish government was about to release exactly the same application. Seeing first reactions to the government version and knowing the quality of other government products, we decided to finish our prototype. We were all impressed by how much we were able to create in such a short time (as a group of 7 strangers)."/>

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

        <ArticleText
                text="Of course we all contributed a lot to this system, from management and design to backend and AI. But I will focus here on my problems and solutions."/>
        <LinkWithDescription text="If you want to read more about the backend, here is a link to a colleague's article:"
                             url="https://getindata.com/blog/fighting-COVID-19-Google-Cloud-quarantine-tracking-system"/>

        <LeftHeader text="My part"/>
        <ArticleList
                header="I personally spent about 70 hours during this hackathon to create a working prototype application. The final product had the following functionalities:"
                :children="[
                    'user authentication',
                    'basic operations on users\' files in the database and subscription of changes to these files',
                    'push-up notifications',
                    'integration with the photo database',
                    'integration with cameras',
                    'creation of verification photos',
                    'creation of 5 reference photos for each user',
                    'sending user’s location while taking a photo',
                    'sending user’s location every 15 minutes (in the background)',
                ]"
        />
        <ArticleText
                text="Many things were new to me, such as integration with cameras or firebase storage/cloud messaging. Fortunately, these Google solutions turned out to be easy to use."/>
        <ArticleText
                text="I had a little more problems with integrating cameras, because the Flutter plugin did not allow to use two cameras at the same time, which the application required. Due to lack of time I had to arrange it in such a way that the user could only see the preview from the front camera and after taking the picture, the rear camera was automatically initialized and the second picture was taken. Luckily, the delay wasn't big, so for the prototype it was 100% satisfactory."/>
        <ArticleText
                text="Another 'problem' was sending user’s location every 15 minutes. Flutter does not allow the implementation of such mechanisms directly in it, so I had to write native code. Due to lack of time we left devices running on iOS and continued only on Android. In addition, the problem is that new versions of Android like to save energy, so I had to keep it to a minimum to make this functionality work in such a short time. After previous experience with Android’s JetPack, I decided to use WorkManager and stick to the minimum interval of work in the background (every 15 minutes). I tried to get around it once, but the system was coming back to normal after about 2 hours anyway, so I didn't want to bother with it during hackathon. As far as location is concerned, I decided to stick to downloading the last known location instead of firing gps and looking for a new one. It would have been a good idea to add geofence, but unfortunately there wasn't enough time for that."/>
        <ArticleText
                text="Push-up notifications… Due to lack of experience in using the plugin and inaccurate documentation, I had some problems with their implementation. However, I finally managed to implement a satisfactory version for hackathon (without full FCM token variability support)."/>

        <LeftHeader text="Video"/>
        <YtPlayer url="https://www.youtube.com/embed/JhSBDsFtAM4"/>
    </div>
</template>

<script>
    import NavBar from "@/components/navBar/NavBar";
    import ArticleBanner from "@/components/common/articles/ArticleBanner";
    import YtPlayer from "@/components/common/articles/YtPlayer";
    import DisabledRepoLink from "@/components/common/articles/DisabledRepoLink";
    import DisabledGooglePlayLink from "@/components/common/articles/DisabledGooglePlayLink";
    import CenteredHeader from "@/components/common/articles/CenteredHeader";
    import LeftHeader from "@/components/common/articles/LeftHeader";
    import ArticleSmallPaddingText from "@/components/common/articles/ArticleSmallPaddingText";
    import articles from "@/articles/articles";
    import ArticleText from "@/components/common/articles/ArticleText";
    import LinkWithDescription from "@/components/common/articles/LinkWithDescription";
    import ArticleList from "@/components/common/articles/ArticleList";

    import {VueperSlides, VueperSlide} from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        name: "Quarantino",
        components: {
            ArticleList,
            LinkWithDescription,
            ArticleText,
            ArticleSmallPaddingText,
            LeftHeader,
            CenteredHeader,
            DisabledGooglePlayLink,
            DisabledRepoLink,
            YtPlayer,
            ArticleBanner,
            NavBar,
            VueperSlides,
            VueperSlide,
        },
        methods: {
            getText() {
                return articles.quarantino.text;
            },
        },
        data: function () {
            return {
                slides: [
                    {image: require('@/assets/articles/quarantino/1.jpg'),},
                    {image: require('@/assets/articles/quarantino/2.jpg'),},
                    {image: require('@/assets/articles/quarantino/3.jpg'),},
                    {image: require('@/assets/articles/quarantino/4.jpg'),},
                    {image: require('@/assets/articles/quarantino/5.jpg'),},
                    {image: require('@/assets/articles/quarantino/6.jpg'),},
                    {image: require('@/assets/articles/quarantino/7.jpg'),},
                    {image: require('@/assets/articles/quarantino/8.jpg'),},
                ],
            }
        },

    }
</script>

<style scoped>
    #banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../../assets/articles/quarantino/quarantino-banner.jpg");
    }
</style>