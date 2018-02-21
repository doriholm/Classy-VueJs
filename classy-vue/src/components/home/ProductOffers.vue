<template>
   <section class="product-offers">
            <div class="product-offers__container">
                <div class="product-offers__wrap-topright">
                   <div class="product-offers__image--top-right"></div>
                </div>           
                <div class="product-offers__wrap-left">
                    <div class="product-offers__image--left"></div>
                </div>
                <div class="product-offers__wrap-bottomright">
                   <div class="product-offers__image--bottom-right"></div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: "product-offers"
};
</script>

<style lang="scss">
@import "../../assets/styles/modules/_variables";
@import "../../assets/styles/modules/_mixins";

.product-offers {
  grid-column: 2 / 3;
  margin-bottom: $margin-bottom;
  &__container {
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
  &__image {
    &--left {
      width: 100%;
      height: 100%;
      padding-top: 89.5%;
      transition: all 1s ease;
      @include background("../../../static/images/home-page/must-have.jpg");
      &:hover {
        transform: scale(1.1);
      }
    }
    &--top-right {
      height: 100%;
      transition: all 1s ease;
      width: 100%;
      padding-top: 60%;
      transition: all 1s ease;
      @include background("../../../static/images/home-page/75percent.jpg");
      &:hover {
        transform: scale(1.1);
      }
    }
    &--bottom-right {
      height: 100%;
      width: 100%;
      padding-top: 60%;
      transition: all 1s ease;
      @include background("../../../static/images/home-page/summer-style.jpg");
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.product-offers__wrap {
  &-topright {
    overflow: hidden;
    grid-column: span 5;
  }
  &-left {
    grid-column: span 7;
    grid-row: 1 / 3;
    overflow: hidden;
  }
  &-bottomright {
    overflow: hidden;
    grid-column: span 5;
    grid-row: 2 / 3;
  }
}

@include max-width($phone-wide) {
  .product-offers {
    &__container {
      grid-template-rows: repeat(4, 1fr);
    }
    &__image {
      &--left {
        grid-column: 2 / span 10;
        grid-row: 2 / 4;
      }
      &--top-right {
        grid-column: 2 / span 10;
        width: 100%;
      }
      &--bottom-right {
        grid-column: 2 / span 10;
        grid-row: 4 / 5;
      }
    }
  }
}
</style>
