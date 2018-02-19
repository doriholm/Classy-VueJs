<template>
  <div :class="{isActive: isOpen == 'menu'}" class="main-menu">
      <ul class="main-menu-list">
          <li class="main-menu-list__item">Home</li>
          <li class="main-menu-list__item">Collection</li>
          <li class="main-menu-list__item">Contact</li>
      </ul>
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
        console.log("Main menu value changed from " + oldVal + " to " + newVal);
        this.changeIsOpen();
        }
    },
    methods: {
        changeIsOpen: function(){
            this.isOpen = this.open;
        console.log("isOpen changed");
            
        }
    }
};
</script>


<style lang="scss">
@import "../assets/styles/modules/_variables";
@import "../assets/styles/modules/_mixins";
</style>
