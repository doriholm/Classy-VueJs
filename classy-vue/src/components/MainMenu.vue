<template>
  <div :class="{isActive: isOpen == 'menu'}" class="main-menu">
      <div class="main-menu__container">
      <ul class="main-menu-list">
          <router-link :to="'/'"><li v-on:click="hideMenu" class="main-menu-list__item">Home</li></router-link>
          <router-link :to="'/collection'"><li v-on:click="hideMenu" class="main-menu-list__item">Collection</li></router-link>
          <router-link :to="'/contact'"><li v-on:click="hideMenu" class="main-menu-list__item">Contact</li></router-link>
      </ul>
</div>
  </div>
</template>


<script>
export default {
  name: "main-menu",
  props: ["open"],
  data: function() {
    return {
        isOpen: ""
        };
    },
 watch: {
        open: function(newVal, oldVal) {
        this.changeIsOpen();
        }
    },
    methods: {
        changeIsOpen: function(){
            this.isOpen = this.open;
            
        },
        hideMenu: function(event){
            this.isOpen = "none";
            this.$emit("isOpen", this.isOpen);
        }
    }
};
</script>


<style lang="scss">
@import "../assets/styles/modules/_variables";
@import "../assets/styles/modules/_mixins";

.main-menu__container{
    padding: 50px;
}

.main-menu-list{
    list-style: none;
    &__item{
        font-size: 2rem;
        font-weight: 600;
        margin: 3rem 0;
        text-transform: uppercase;
        color: $darker-gray;
        transition: all .5s linear;
        &:hover{
            color: $sky-blue;
            &:after{
                content: " - ";
            }
        }
    }
}
</style>
