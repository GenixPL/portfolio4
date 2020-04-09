<template>
    <div class="container">
        <div class="card">
            <div class="imgBox">
                <img :src='getImg(imgPath)'/>
            </div>

            <div class="content">
                <div>
                    <h3>{{title}}</h3>
                    <p>{{text}}</p>
                    <NavigateButton :navigateTo='path' light="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavigateButton from "@/components/common/NavigateButton";

    export default {
        name: "ArticleCard",
        components: {NavigateButton},
        props: {
            title: String,
            text: String,
            path: String,
            imgPath: String,
        },
        methods: {
            getImg(pic) {
                return require('../../assets/' + pic)
            }
        }
    }
</script>

<style scoped>

    * {
        box-sizing: border-box;
    }

    /* for other files */
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #303030;
        min-height: 100vh;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(60%)
    }

    .container {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 450px;
        margin: 20px auto;
    }

    .container .card {
        position: relative;
        height: 250px;
        background: #fff;
        display: flex;
        width: 100%;
        margin: 30px 0;
        box-sizing: border-box;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    }

    .container .card .imgBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #303030;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: 0.5s ease-in-out;

        color: white;
        font-size: 20pt;
        font-family: cp-mono, serif;
    }

    .container .card:hover .imgBox {
        width: 150px;
        height: 150px;
        left: -75px;
        top: calc(50% - 75px);
        transition: 0.5s ease-in-out;
        background: #ffb300;
    }

    .container .card img {
        transition: 0.5s ease-in-out;
    }

    .container .card .content {
        position: absolute;
        right: 0;
        width: calc(100% - 75px);
        height: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container .card .content h3 {
        margin-bottom: 5px;
        font-size: 24px;
        font-family: cp-mono, serif;
    }

    .container .card .content p {
        font-family: prime, serif;
        line-height: 14pt;
        margin-bottom: 10px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* number of lines to show */
    }

    @media (max-width: 630px) {
        .container {
            flex-direction: column;
            align-items: center;
        }

        .container .card {
            max-width: 300px;
            flex-direction: column;

            height: auto;
        }

        .container .card .imgBox {
            position: relative;
        }

        .container .card .imgBox,
        .container .card:hover .imgBox {
            width: 100%;
            height: 200px;
            left: 0;
        }

        .container .card .content {
            position: relative;
            width: 100%;

        }
    }

</style>