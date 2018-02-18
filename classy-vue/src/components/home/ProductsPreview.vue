<template>
        <section class="products-preview">
            <header class="products-preview__header">
                <ul class="inline-list">
                    <li class="inline-list__item">New arrivals</li>
                    <li class="inline-list__item">Top sellers</li>
                    <li class="inline-list__item">Featured</li>
                </ul>
            </header>
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
  name: 'products-preview'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.products-preview {
  grid-column: 2 / 3;
  @include grid-col-12;
  grid-gap: 1rem;
  margin-bottom: $margin-bottom;
  &__header {
    grid-column: span 14;
    text-align: center;
  }
}
</style>
