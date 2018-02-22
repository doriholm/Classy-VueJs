<template>
    <section class="products">
            <div class="products__sorting">
                <ul class="products__list">
                    <li class="products__list--item">Sort by:</li>
                   
                    <li class="products__list--item ">Price -
                        <select class="filter-box" v-model="productFilterKey">
                        <option disabled value="">Select</option>
                        <option v-for="price in productSelector" :key="price.id" v-bind:value="price">${{price}}</option>
                        </select></li>
                </ul>
            </div>

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
  name: "products-collection",
  data: function() {
    return {
      productFilterKey: "",
      products: [],
      productSelector: [199, 299, 399, 499, 599]
    };
  },
  computed: {
    productFilter: function() {
        if(this.productFilterKey.length !== 0){
                console.log(this.productFilterKey)
                return this.products.filter(
                product => product.price == this.productFilterKey
            );
        }
        else{
            return this.products;
        }
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

.products {
  @include grid-col-12;
  grid-gap: 1rem;
  padding: $section-padding;
  &__sorting {
    grid-column: span 12;
    display: flex;
    align-items: center;
  }
  &__list {
    list-style-type: none;
    padding-left: 0;
    &--item {
      margin-right: 1rem;
      display: inline-block;
    }
  }
}

.filter-box{
    background-color: transparent;
    border: none;
    padding: 0.75rem;
    -webkit-appearance: none;
    background-image: url("../../../static/images/product-page/gray-triangle.png");
    background-position: 99% 50%;
    background-repeat: no-repeat;
    background-size: 0.5rem;
}
</style>
