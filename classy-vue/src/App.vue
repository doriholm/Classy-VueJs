<template>
  <div id="app">
    <site-header @msg="isOpen" @isOpen="isOpen = $event"></site-header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <main-menu :open=isOpen></main-menu>
    <!-- <shopping-bag></shopping-bag> -->
    <div v-show="isOpen != 'none'" v-on:click="hideAll" class="overlay"></div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MainMenu from '@/components/MainMenu';
import ShoppingBag from '@/components/ShoppingBag';

export default {
  name: 'App',
  data() {
      return {
          isOpen: 'none'
              }
        },
  watch: {
  	    'isOpen': function(newVal, oldVal) {
    	  console.log('value changed from ' + oldVal + ' to ' + newVal);
           }
        },
  components: {
    'site-header': SiteHeader,
    'site-footer': SiteFooter,
    'main-menu': MainMenu,
    'shopping-bag': ShoppingBag,
  },
  methods: {
    showMenu: function(){
        this.isOpen = 'menu';
      },
    hideAll: function(){
      this.isOpen = 'none';
    }
}
}
</script>


<style lang="scss">
@import "./assets/styles/main.scss";


</style>


