<template>
    <h1 id="name-header">
        łukASZ<br/>
        NieDZiAłek
    </h1>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
    #name-header {
        color: white;
        letter-spacing: 4pt;
        padding-left: 4pt; /* to compensate for letter spacing */
        font-family: kontanter, sans-serif;
        margin: auto; /* this will center it inside its parent */
    }
</style>