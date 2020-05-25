<template>
    <div id="routing-top-nav">
        <nav id="navbar">
            <nuxt-link class="nav-link-nuxt" to="/">Home</nuxt-link>
            <nuxt-link class="nav-link-nuxt" to="employee">Employee</nuxt-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'top-nav-bar',
        created: function() {
            if (process.client)
            window.onscroll = function() {
                if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
                    document.getElementById('navbar').style.padding = '5px 10px';
                } else {
                    document.getElementById('navbar').style.padding = '50px 10px';
                }
            }
        }
    }    
</script>

<style lang="scss" scoped>
    #routing-top-nav {
        text-align: center;
        // z-index: 10;
    }

    .nav-link-nuxt {
        margin: 20px;
        color: #000000;
        text-decoration: none;
    }
    .nav-link-nuxt:hover {
        color: #e6ffff;
    }
    .nav-link-nuxt:focus {
        color: black;
        text-decoration: none;
    }
    nav {
        position: fixed;
        left: 0px;
        right: 0px;
        width: 100%;
        padding: 50px 10px;
        margin:0px;
        top: 0px;
        background-color: #129991;
        transition: 1s;
        z-index: 10;
    }

</style>