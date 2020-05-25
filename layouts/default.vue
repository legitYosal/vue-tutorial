<template>
<div id="default-layout">
    <top-nav-bar/>
    <div id="push-balance"></div>
    <main id="main" role="main">
        <nuxt/>
    </main>
    <buttom-footer/>
</div>
</template>

<script>
import TopNavBar from '~/components/TopNavBar.vue'
import ButtomFooter from '~/components/ButtomFooter.vue'

export default {
    components: {
        TopNavBar,
        ButtomFooter
    }
}
</script>

<style lang="scss">
    @import '~/assets/scss/styles.scss';
    div#push-balance {
        margin-top: 140px;
    }
    main#main {
        padding: 30px;
        max-width: 780px;
        margin-left: auto;
        margin-right: auto;
    }
    div.default-layout {
    }
</style>