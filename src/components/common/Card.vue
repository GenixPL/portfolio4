<template>
    <div class="card">

        <div class="face face1">
            <div class="content">
                <img :src="getImgUrl(imgUrl)">
                <h3>{{header}}</h3>
            </div>
        </div>

        <div class="face face2">
            <div class="content">
                <p>{{text}}</p>
                <NavigateButton :navigateTo='navigateUrl'/>
            </div>
        </div>

    </div>
</template>

<script>
    import NavigateButton from "@/components/common/NavigateButton";

    export default {
        name: "Card",
        components: {NavigateButton},
        props: {
            imgUrl: String,
            header: String,
            text: String,
            navigateUrl: String,
        },
        methods: {
            getImgUrl(pic) {
                return require('../../assets/' + pic)
            }
        }
    }
</script>

<style scoped>

    .card {
        position: relative;

        margin: 20px;
    }

    .card .face {
        width: 300px;
        height: 200px;
        transition: 0.5s;
    }

    .card .face.face1 {
        position: relative;
        background: #303030;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transform: translateY(100px);
    }

    .card:hover .face.face1 {
        transform: translateY(0);
        background: #ffb300;
    }

    .card .face.face1 .content {
        opacity: 0.2;
        transition: 0.5s;
    }

    .card:hover .face.face1 .content {
        opacity: 1;
    }

    .card .face.face1 .content img {
        max-width: 100px;
    }

    .card .face.face1 .content h3 {
        margin: 10px 0 0;
        padding: 0;
        color: #fff;
        font-family: cp-mono, serif;
        font-size: 16pt;
    }

    .card .face.face2 {
        position: relative;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        transform: translateY(-100px);
    }

    .card:hover .face.face2 {
        transform: translateY(0px);
    }

    .card .face.face2 .content p {
        margin: auto;
        padding-bottom: 12pt;
        line-height: 14pt;

        font-family: prime, serif;
    }


    img {
        max-width: 150px;
    }

</style>