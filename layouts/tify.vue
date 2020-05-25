<template>
<v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
        <v-list dense>
            <v-list-item to="/" exact link>
                <v-list-item-action>
                <v-icon>home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/login" exact link>
              <v-list-item-action>
                <v-icon>password</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/employee" exact link>
              <v-list-item-action>
                <v-icon>person</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Employee</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/news" exact link>
              <v-list-item-action>
                <v-icon>person</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>News</v-list-item-title>
              </v-list-item-content>
            </v-list-item>            
        </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="blue light"
      dark
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">Demo</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="blue light" text to="/" exact>Index</v-btn>
            <v-btn class="blue light" text to="/employee">Employee</v-btn>
            <v-btn class="blue light" text to="/login">Login</v-btn>
            <v-btn class="blue light" text to="/news">News</v-btn>
        </v-toolbar-items>
    </v-app-bar>


    <v-content>
        <nuxt/>
    </v-content>
<!-- 
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
 -->
    <v-footer
      color="blue light"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
</v-app>
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