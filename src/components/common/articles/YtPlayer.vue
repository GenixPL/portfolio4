<template>
        <div style="max-width: 600pt; margin: 16pt auto">
            <div class="iframe-container">

                <iframe
                        :src=url
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                />

            </div>
        </div>
</template>

<script>
    export default {
        name: "YtPlayer",
        props: {
            url: String,
        }
    }
</script>

<style scoped>

    .iframe-container {
        position: relative;
        width: 100%;

        padding-bottom: 56.25%;
        height: 0;
    }

    .iframe-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

</style>