<template>

    <router-link class="routerLink" :to=path>
        <div id="inner-button-container">
            <h3 id="inner-button-text">
                {{title}}
            </h3>
        </div>
    </router-link>

</template>

<script>
    export default {
        name: "HomeInnerButton",
        props: {
            title: String,
            path: String
        }
    }
</script>

<style scoped>
    #inner-button-container {
        width: 116pt;
        height: 116pt;

        background-image: url("../../assets/home/bordered_box.svg");
        background-size: contain;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #inner-button-text {
        font-family: cp-mono, sans-serif;
        letter-spacing: 2pt;
        margin-right: -2pt; /* -2pt to compensate letter-spacing */

        color: white;
    }


</style>