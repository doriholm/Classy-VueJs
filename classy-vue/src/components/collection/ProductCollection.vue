<template>
    <section class="products">
            <div class="products__sorting">
                <p>New collection (1-32 of 58)</p>
                <ul class="products__list">
                    <li class="products__list--item">Sort by</li>
                    <li class="products__list--item">Features</li>
                    <li class="products__list--item">Size</li>
                    <li class="products__list--item">Color</li>
                    <li class="products__list--item">Price</li>
                </ul>
            </div>
            <div class="product">
                <figure class="product__img-container">
                    <figcaption class="product__sale-tag">Sale</figcaption>
                    <img class="full-width" src="../../../static/images/product/jacket1.jpg" alt="">
                    <figcaption class="product__extra-options">
                        <div class="product__extra-options--centering">
                            <div class="circle circle--small circle--blue">
                                <svg class="svg" viewBox="0 0 24 14">
                                    <use xlink:href="#quick-view-icon"></use>
                                </svg>
                            </div>
                            <p>Quick view</p>
                        </div>
                        <div class="product__extra-options--centering">
                            <div class="circle circle--small circle--blue">
                                <svg class="svg" viewBox="0 0 22 22.9">
                                    <use xlink:href="#heart-icon"></use>
                                </svg>
                            </div>
                            <p>Save</p>
                        </div>
                    </figcaption>
                </figure>
                <div class="product__info">
                    <p class="product__name">Some text about product Playsuit</p>
                    <h4 class="product__price">Price</h4>
                    <button class="product__add-to-bag btn ">
                        <svg class="svg svg-nav" viewBox="0 0 21.5 27.5">
                            <use xlink:href="#shopping-bag-icon"></use>
                        </svg>
                        Add to bag</button>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'product-collection'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';


.products {
  @include grid-col-12;
  padding: $section-padding;
  &__sorting {
    grid-column: span 12;
    display: flex;
    align-items: center;
  }
  &__list {
    list-style-type: none;

    &--item {
      display: inline-block;
      margin-left: 1rem;
      &::after {
        content: "\25bc";
        margin-left: 0.25rem;
        font-size: 0.5rem;
        vertical-align: 25%;
      }
    }
  }
}
</style>
