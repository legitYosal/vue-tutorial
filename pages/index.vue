<template>
<v-container>
    <v-color-picker id="custom-color-picker"></v-color-picker> 
    <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-casual
      </h1>
      <h2 class="subtitle">
        transforming vue cli3 project over nuxtjs
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    </div>
</v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    layout: 'tify',
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
#custom-color-picker {
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
}
</style>
