<template>
    <div class="main-container">
        <HomeHeader/>

        <div class="cards-container">
            <Card
                    imgUrl="home/resume.png"
                    header="RESUME"
                    text="Basic information, skills, career, summary of main projects and achievements."
                    navigateUrl="/resume"
            />

            <Card
                    imgUrl="home/code.png"
                    header="PORTFOLIO"
                    text="Project descriptions, algorithmic tasks, interesting Flutter solutions and other things."
                    navigateUrl="/portfolio"
            />

            <Card
                    imgUrl="home/mail.png"
                    header="CONTACT"
                    text="Information on how to contact me."
                    navigateUrl="/CONTACT"
            />
        </div>
    </div>
</template>

<script>
    import Card from "@/components/common/Card";
    import HomeHeader from "@/components/home/HomeHeader";

    export default {
        name: "Home",
        components: {
            HomeHeader,
            Card
        },
    }
</script>

<style scoped>

    .main-container {
        min-height: 100vh;

        background: #303030;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cards-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        position: relative;
    }

</style>