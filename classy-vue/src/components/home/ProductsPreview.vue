<template>
        <section class="products-preview">

            <header class="products-preview__header">
                <ul class="products-preview__category inline-list">
                    <li v-on:click="productFilterKey = 'newArrivals'" :class="{activePreview: productFilterKey == 'newArrivals' }" class="products-preview__category--item inline-list__item">New arrivals</li>
                    <li v-on:click="productFilterKey = 'topSellers'" :class="{activePreview: productFilterKey == 'topSellers' }" class="products-preview__category--item inline-list__item">Top sellers</li>
                    <li v-on:click="productFilterKey = 'featured'" :class="{activePreview: productFilterKey == 'featured' }" class="products-preview__category--item inline-list__item">Featured</li>
                </ul>
            </header>

            <div v-for="product in productFilter" v-bind:key="product.id" class="product">
                <figure class="product__img-container">
                    <figcaption v-if="product.sale == true" class="product__sale-tag">Sale</figcaption>
                     <router-link :to="'/product/' + product.id">
                    <img class="product__img-container--img full-width" v-bind:src=" product.image_url" alt="">
                     </router-link>
                    <figcaption class="product__extra-options">
                        <div class="product__extra-options--centering">
                            <router-link :to="'/product/' + product.id">
                            <div class="svg-product-icon circle circle--small circle--blue">
                                <svg class="svg " viewBox="0 0 24 14">
                                    <use xlink:href="#quick-view-icon"></use>
                                </svg>
                            </div>
                            </router-link>
                            <p>Quick view</p>
                        </div>
                        <div class="product__extra-options--centering">
                            <div class="svg-product-icon circle circle--small circle--blue">
                                <svg class="svg " viewBox="0 0 22 22.9">
                                    <use xlink:href="#heart-icon"></use>
                                </svg>
                            </div>
                            <p>Save</p>
                        </div>
                    </figcaption>
                </figure>
                <div class="product__info">
                    <p class="product__name">{{product.title}}</p>
                    <h4 class="product__price">${{product.price}}</h4>
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
import axios from "axios";

export default {
  name: "products-preview",
  data: function() {
    return {
      productFilterKey: "newArrivals",
      products: []
    };
  },
  computed: {
    productFilter: function() {
      return this.products.filter(
        product => product.featured == this.productFilterKey
      );
    }
  },
  created: function() {
    this.getProducts();
  },
  methods: {
    getProducts: function() {
      axios
        .get("../../../static/products.json")
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style lang="scss">
@import "../../assets/styles/modules/_variables";
@import "../../assets/styles/modules/_mixins";

.products-preview {
  min-height: 620px;
  grid-column: 2 / 3;
  grid-gap: 1rem;
  margin-bottom: $margin-bottom;
  &__header {
    grid-column: span 12;
    text-align: center;
  }
  &__category {
    margin-bottom: 4rem;
    &--item {
      cursor: pointer;
      position: relative;
      font-size: 1.125rem;
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.5s linear;
      margin-right: 2rem;
      &:hover {
        color: $sky-blue;
        &:before {
          content: "";
          position: absolute;
          width: 40%;
          height: 0px;
          bottom: -7px;
          left: 30%;
          border-bottom: 3px solid $sky-blue;
        }
      }
    }
  }
}

.activePreview {
  &:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 0px;
    bottom: -7px;
    left: 30%;
    border-bottom: 3px solid $dark;
  }
}

@include max-width(550px) {
  .products-preview {
    &__category {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      &--item {
        margin: 1rem 0;
      }
    }
  }
}
</style>
