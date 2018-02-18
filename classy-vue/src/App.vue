<template>
  <div id="app">
    <site-header></site-header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default {
  name: 'App',
  components: {
    'site-header': SiteHeader,
    'site-footer': SiteFooter,
  }
}
</script>


<style lang="scss">
@import "./assets/styles/main.scss";


</style>


