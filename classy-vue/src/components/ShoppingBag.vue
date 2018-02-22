<template>
  <div :class="{isActive: isOpen == 'shoppingBag'}" class="shopping-bag">
<div class="shopping-bag__container">
            <header>
                <h2 class="shopping-bag__name"></h2>
            </header>
            <div class="shopping-bag-item">
                <img src="" alt="" class="shopping-bag-item__img">
                <h3 class="shopping-bag-item__price"></h3>
                <h4 class="shopping-bag-item__name"></h4>
                <span class="shopping-bag-item__quantity"></span>
                <div class="shopping-bag-item__remove"></div>
            </div>
            <div class="shopping-bag__total-cost">
                <h3 class="shopping-bag__total-cost--name"></h3>
                <p class="shopping-bag__total-cost--notice"></p>
                <h3 class="shopping-bag__total-cost--amount"></h3>
            </div>
            <button class="shopping-bag__checkout-btn btn btn--blue">Checkout</button>
            <button class="shopping-bag__continue-btn btn btn--gray">Continue shopping</button>
            <div class="shopping-bag__suggestions"></div>
            </div>
        </div>
</template>


<script>
export default {
  name: 'shopping-bag',
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
        }
    }
}
</script>


<style lang="scss">
@import "../assets/styles/modules/_variables";
@import "../assets/styles/modules/_mixins";

.shopping-bag__container{
    padding: 50px;
}

</style>
