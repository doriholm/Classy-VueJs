<template>
   <header :class="{'header-pos-absolute': check === true}" class="main-header grid-layout">
        <div class="nav-container">
            <div class="logo--header">
                <a class="" href="/">
                                        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.44 43.54">
                        <path class="cls-2" d="M30.19,34.39a14.46,14.46,0,0,1-5.66,4.75,16.87,16.87,0,0,1-7,1.44,18.74,18.74,0,0,1-7.13-1.32,15.91,15.91,0,0,1-5.54-3.7A16.81,16.81,0,0,1,1.3,29.9,19.3,19.3,0,0,1,0,22.72a19.11,19.11,0,0,1,1.3-7.15A16.82,16.82,0,0,1,4.9,9.93a16.38,16.38,0,0,1,5.54-3.72,18.55,18.55,0,0,1,7.13-1.34A16.83,16.83,0,0,1,24,6.09a12.83,12.83,0,0,1,5.26,4.1l-2.59,2.16a9.43,9.43,0,0,0-4.06-3.5,12.21,12.21,0,0,0-5.06-1.1,14.9,14.9,0,0,0-6,1.15,13.22,13.22,0,0,0-4.53,3.17,13.85,13.85,0,0,0-2.88,4.75,16.73,16.73,0,0,0-1,5.9,16.83,16.83,0,0,0,1,5.91,14,14,0,0,0,2.88,4.75,13.36,13.36,0,0,0,4.53,3.17,15.08,15.08,0,0,0,6,1.15,12.85,12.85,0,0,0,2.69-.31,12.52,12.52,0,0,0,2.71-1,13.26,13.26,0,0,0,2.52-1.64,10.29,10.29,0,0,0,2.11-2.37Z"
                        />
                        <path class="cls-2" d="M60,5.73h3.17v31.1H79v2.88H60Z" />
                        <path class="cls-2" d="M169.79,33.43A8.06,8.06,0,0,0,173,36.64a9.48,9.48,0,0,0,4.54,1.06,9.07,9.07,0,0,0,3-.48A7.55,7.55,0,0,0,183,35.87,6.12,6.12,0,0,0,185.2,31a5.35,5.35,0,0,0-.74-2.93,6.07,6.07,0,0,0-2-1.9,14.73,14.73,0,0,0-2.8-1.27l-3.22-1.06a34.35,34.35,0,0,1-3.22-1.2,10.49,10.49,0,0,1-2.8-1.75,7.75,7.75,0,0,1-2-2.71,9.8,9.8,0,0,1-.74-4,8.77,8.77,0,0,1,.89-4A8.56,8.56,0,0,1,171,7.24a10.69,10.69,0,0,1,3.48-1.77,14.06,14.06,0,0,1,4.12-.6,13.52,13.52,0,0,1,5.17,1,9.81,9.81,0,0,1,4.1,3.29l-2.74,2a8,8,0,0,0-2.8-2.52,8.18,8.18,0,0,0-3.82-.84,10.42,10.42,0,0,0-2.93.4,7.62,7.62,0,0,0-2.42,1.2,6,6,0,0,0-1.66,2,6.12,6.12,0,0,0-.62,2.83,5.47,5.47,0,0,0,1.29,3.91,9.3,9.3,0,0,0,3.24,2.16,34.39,34.39,0,0,0,4.23,1.39,20.62,20.62,0,0,1,4.22,1.61,9,9,0,0,1,3.24,2.81,8.31,8.31,0,0,1,1.3,5,9.2,9.2,0,0,1-.87,4.08,9,9,0,0,1-2.32,3A10.12,10.12,0,0,1,181.79,40a12.7,12.7,0,0,1-4,.63,15.93,15.93,0,0,1-6.2-1.18,11.28,11.28,0,0,1-4.84-4Z"
                        />
                        <path class="cls-2" d="M220.48,33.43a8.06,8.06,0,0,0,3.24,3.21,9.48,9.48,0,0,0,4.54,1.06,9.07,9.07,0,0,0,3-.48,7.55,7.55,0,0,0,2.43-1.35,6.39,6.39,0,0,0,1.63-2.08,6.21,6.21,0,0,0,.6-2.76,5.27,5.27,0,0,0-.75-2.93,6,6,0,0,0-2-1.9,14.83,14.83,0,0,0-2.81-1.27l-3.21-1.06a33.34,33.34,0,0,1-3.22-1.2,10.54,10.54,0,0,1-2.81-1.75,7.86,7.86,0,0,1-2-2.71,9.64,9.64,0,0,1-.74-4,8.51,8.51,0,0,1,3.29-6.94,10.59,10.59,0,0,1,3.48-1.77,14,14,0,0,1,4.12-.6,13.43,13.43,0,0,1,5.16,1,9.78,9.78,0,0,1,4.11,3.29l-2.74,2A8.06,8.06,0,0,0,233,8.59a8.11,8.11,0,0,0-3.81-.84,10.42,10.42,0,0,0-2.93.4,7.51,7.51,0,0,0-2.42,1.2,5.88,5.88,0,0,0-1.66,2,6,6,0,0,0-.62,2.83,5.47,5.47,0,0,0,1.29,3.91,9.3,9.3,0,0,0,3.24,2.16,33.84,33.84,0,0,0,4.23,1.39,20.84,20.84,0,0,1,4.22,1.61,9,9,0,0,1,3.24,2.81,8.39,8.39,0,0,1,1.29,5,9.2,9.2,0,0,1-.86,4.08,8.93,8.93,0,0,1-2.33,3A10,10,0,0,1,232.48,40a12.7,12.7,0,0,1-4,.63,15.93,15.93,0,0,1-6.2-1.18,11.28,11.28,0,0,1-4.84-4Z"
                        />
                        <path class="cls-2" d="M277.79,25.07,265.31,5.73h3.79l10.28,16.13L289.89,5.73h3.55L281,25.07V39.71h-3.17Z" />
                        <path class="cls-1" d="M142,42H105.15c-2.52,0-3.93-2.49-2.37-4.19l20.81-22.79,20.82,22.79C146,39.55,144.55,42,142,42Z"
                        />
                        <path class="cls-1" d="M123.82,10.66a4.58,4.58,0,1,1,4.58-4.58" />
                        <line class="cls-1" x1="124.22" y1="15.04" x2="124.22" y2="11.04" />
                    </svg>
                </a>
            </div>
            <nav class="main-nav">
                <a class="main-nav__item" href="#">
                    <svg class="svg svg-nav" viewBox="0 0 21.5 23">
                        <use xlink:href="#user-icon"></use>
                    </svg>
                    Login
                </a>
                <a v-on:click="showShoppingBag" class="main-nav__item" href="#">
                    <svg class="svg svg-nav" viewBox="0 0 21.5 27.5">
                        <use xlink:href="#shopping-bag-icon"></use>
                    </svg>
                    3 items
                </a>
                <a class="main-nav__item" href="#">
                    <svg class="svg svg-nav" viewBox="0 0 23.4 23.4">
                        <use xlink:href="#search-icon"></use>
                    </svg>
                </a>
                <div v-on:click="showMenu" class="burger-nav main-nav__item">
                    <div class="menu-icon"></div>
                    <div class="menu-icon"></div>
                    <div class="menu-icon"></div>
                </div>
            </nav>
        </div>

    </header>
</template>

<script>
export default {
  name: "site-header",
  data: function(){
    return {
      check: true,
      isOpen: '',
      //shoppingBag: 'shoppingBag'
    };
  },
  props: ['msg'],
  mounted: function(){
    this.checkHead()
  },
  watch: {
      '$route' :function(){
          this.checkHead();
      }
  }, 
  methods:{
     checkHead: function() {
         return (document.querySelector('.hasHero') !== null) ? (this.check = true) : (this.check = false);
           },
    showMenu: function(event){
        this.isOpen = 'menu'
        this.$emit('isOpen', this.isOpen);
        this.isOpen = 'none'
        console.log(this.isOpen);
    },
    showShoppingBag: function(event){
        this.isOpen = 'shoppingBag';
        this.$emit('isOpen', this.isOpen);
        this.isOpen = 'none'
        console.log(this.isOpen);
    }
  }
};
</script>

<style lang="scss">
@import '../assets/styles/modules/_variables';
@import '../assets/styles/modules/_mixins';

.burger-nav{
    height: 22px;
    width: 22;
}

.menu-icon{
    width: 22px;
    height: 3px;
    background-color: $white;
    margin: 4px 0;
}

.main-header {
  width: 100%;
  padding: 1rem 0;
  background-color: $dark;
}

.header-pos-absolute{
  position: absolute;
  background-color: transparent;    
}

.nav-container {
  grid-column: 2 / 3;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

.main-nav {
    display: flex;
  &__item {
    color: $white;
    margin-left: 1rem;
  }
}

.logo--header{
    width: 200px;
    color: $white;
}

#logo{
    color: $white;
}


</style>

