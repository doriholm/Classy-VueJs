<template>
   <section class="product-offers">
            <div class="product-offers__container">
                <div class="product-offers__image--left"></div>
                <div class="product-offers__image--top-right"></div>
                <div class="product-offers__image--bottom-right"></div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'product-offers'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';


.product-offers {
  grid-column: 2 / 3;
  margin-bottom: $margin-bottom;
  &__container {
    @include grid-col-12;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
  &__image {
    &--left {
      grid-column: 1 / 8;
      grid-row: 1 / 3;
      width: 100%;
      padding-top: 89.5%;
      @include background("../../../static/images/must-have.jpg");
    }
    &--top-right {
      grid-column: 8 / 13;
      width: 100%;
      padding-top: 60%;
      @include background("../../../static/images/75percent.jpg");
    }
    &--bottom-right {
      grid-column: 8 / 13;
      grid-row: 2 / 3;
      width: 100%;
      padding-top: 60%;
      @include background("../../../static/images/summer-style.jpg");
    }
  }
}
</style>
