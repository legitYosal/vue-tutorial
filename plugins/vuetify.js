
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default ctx => {
    const vuetify = new Vuetify({
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: '#9c27b0',
                    secondary: '#673ab7',
                    accent: '#3f51b5',
                    error: '#607d8b',
                    warning: '#f44336',
                    info: '#009688',
                    success: '#00bcd4'
                }
            }
        }
    })

    ctx.app.vuetify = vuetify
    ctx.$vuetify = vuetify.framework
}