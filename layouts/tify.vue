<template>
<div id="vue-tify-layout">
    <v-app>
        <nav>
        <v-toolbar id="nav-top-toolbar" dark class="indigo">
            <v-toolbar-side-icon
                @click.stop="drawer = !drawer"
                >
                bar
            </v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">Demo</v-toolbar-title>    
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn class="blue" text to="/" exact>Index</v-btn>
                <v-btn class="blue" text to="/employee">Employee</v-btn>
                <v-btn class="blue" text to="/login">Login</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" right>
            <v-toolbar text>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Menu
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list>
                <v-list-tile to="/" exact>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Index
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile t-="/employee">
                    <v-list-tile-action>
                        <v-icon>description</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Employee
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile t-="/login">
                    <v-list-tile-action>
                        <v-icon>description</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Login
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        </nav>

        <v-content>
            <nuxt/>
        </v-content>
    </v-app>
</div>
</template>

<script>
    export default {
        name: 'tify',
        data() {
            return {
                drawer: false
            }
        }
    }
</script>

<style>
    .nav-top-toolbar {
        padding: 100px;
    }
</style>