<template>
    <v-container fill-height>
    <v-layout align-center justify-center class="layout-login-card">
        <v-flex sm8 md6>
            <v-card class="elevation-12">
                <v-toolbar dark color="purple">
                    <v-toolbar-title>
                        Login Form 
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            prepend-icon="person"
                            name="login"
                            label="Login"
                            type="text"
                        ></v-text-field>
                        <v-text-field
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn dark color="pink">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
    export default {
        layout: 'tify',
    }
</script>

<style lang="scss" scoped>
    .layout-login-card {
        // justify-content: center;
        // align-content: center;
        // margin: auto;
    }
</style>