<template>
    <div id="header-container">
        <h1 id="name-header">
            łukASZ<br/>
            NieDZiAłek
        </h1>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
    #header-container {
        width: 100vw;
        height: 108pt;

        display: flex;
        align-content: center;
        justify-content: center;
    }

    #name-header {
        color: white;
        letter-spacing: 4pt;
        padding-left: 4pt; /* to compensate for letter spacing */
        font-family: kontanter, sans-serif;
        margin: auto; /* this will center it inside its parent */
    }
</style>