<template>
    <div class="main-container">
        <div class="cards-container">
            <Card
                    imgUrl="home/resume.png"
                    header="RESUME"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
                    navigateUrl="/resume"
            />

            <Card
                    imgUrl="home/code.png"
                    header="PORTFOLIO"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has."
                    navigateUrl="/portfolio"
            />

            <Card
                    imgUrl="home/mail.png"
                    header="CONTACT"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
                    navigateUrl="/CONTACT"
            />
        </div>
    </div>
</template>

<script>
    import Card from "@/components/common/Card";

    export default {
        name: "Home2",
        components: {
            Card
        },
    }
</script>

<style scoped>

    .main-container {
        min-height: 100vh;

        background: #303030;

        display: flex;
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