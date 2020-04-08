<template>
    <div id="nav">
        <input type="checkbox" id="check">

        <div id="logo">
            <label>|_|0|_|</label>
            <label>|_|_|0|</label>
            <label>|0|0|0|</label>
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


        <label for="check" class="check-btn">
            <font-awesome-icon icon="bars"/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
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
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        background: #ffb300;

        height: 80px;
        width: 100%;
    }

    #nav ul {
        float: right;
        margin-right: 20px;
    }

    #nav ul li {
        display: inline-block;
        line-height: 80px;
        margin: 0 5px;
    }

    #logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 40px;

        font-family: cp-mono, serif;
        font-weight: bold;
        font-size: 12pt;
    }

    .page-text {
        display: inline;

        padding: 7px 15px;

        font-family: cp-mono, serif;
        font-size: 15pt;
        color: black;

        transition: color 0.5s ease;
    }

    .page-text:hover {
        color: #404040;
    }

    .enlarged-text {
        font-size: 19pt;
    }

    .check-btn {
        font-size: 30px;
        float: right;
        line-height: 80px;
        margin-right: 40px;
        display: none;
    }

    #check {
        display: none;
    }

    @media (min-width: 900px) {
        #logo{
            padding-left: 100px;
        }

        #nav ul {
            margin-right: 40px;
        }
    }

    @media (max-width: 720px) {
        #logo label {
            font-size: 10pt;
        }

        .page-text {
            font-size: 12pt;
        }

        .enlarged-text {
            font-size: 16pt;
        }
    }

    @media (max-width: 620px) {
        #nav {
            height: 60px;
        }

        #logo label {
            font-size: 10pt;
        }

        .check-btn {
            display: block;
            line-height: 60px;
        }

        input[type=checkbox]:checked ~ ul {
            left: 0;
            color: chartreuse;
        }

        ul {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #303030;
            top: 60px;
            left: -100%;
            text-align: center;

            transition: all .5s;
        }

        #nav ul li {
            display: block;
            margin: 30px;
        }

        .page-text {
            font-size: 20px;
            color: #ffb300;
        }

        .page-text:hover {
            color: black;
        }

        .enlarged-text {
            font-size: 28px;
        }


    }

</style>