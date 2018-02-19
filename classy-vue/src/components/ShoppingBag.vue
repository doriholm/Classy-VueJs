<template>
  <div class="shopping-bag">
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
</template>


<script>
export default {
  name: 'shopping-bag'
}
</script>


<style lang="scss">

</style>
