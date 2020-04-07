<template>
    <div id="nav">
        <input type="checkbox" id="check">
        <label for="check">
            <></>
        </label>

        <div id="logo">
            <label>
                |_|0|_|<br/>
                |_|_|0|<br/>
                |0|0|0|<br/>
            </label>
        </div>

        <ul>
            <li>
                <router-link class="routerLink" to="/">
                    <div class="page-text" v-bind:class="[ enlargedPosition === 1 ? 'enlarged-text' : '']">HOME</div>
                </router-link>
            </li>

            <li>
                <router-link class="routerLink" to="/resume">
                    <div class="page-text" v-bind:class="[ enlargedPosition === 2 ? 'enlarged-text' : '']">RESUME</div>
                </router-link>
            </li>

            <li>
                <router-link class="routerLink" to="/portfolio">
                    <div class="page-text" v-bind:class="[ enlargedPosition === 3 ? 'enlarged-text' : '']">PORTFOLIO
                    </div>
                </router-link>
            </li>

            <li>
                <router-link class="routerLink" to="/contact">
                    <div class="page-text" v-bind:class="[ enlargedPosition === 4 ? 'enlarged-text' : '']">CONTACT</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavBar2",
        props: {
            enlargedPosition: Number,
        },
    }
</script>

<style scoped>

    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    #nav {
        display: flex;
        justify-content: space-between;
        background: white;

        height: 80px;
        width: 100%;
    }

    #nav ul {
        float: right;
        background: #ffc107;
        margin-right: 20px;
    }

    #nav ul li {
        display: inline-block;
        line-height: 80px;
        margin: 0 5px;
    }

    #logo {
        padding: 0 100px;
        margin: auto 0;

        font-family: cp-mono, serif;
        font-weight: bold;
    }

    .page-text {
        display: inline;

        padding: 7px 15px;

        font-family: cp-mono, serif;
        color: black;

        transition: color 0.5s ease;
    }

    .page-text:hover {
        color: #404040;
    }

    .enlarged-text {
        font-size: 16pt;
    }

</style>