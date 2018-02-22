<template>
     <section class="product-detail grid-layout--product--details">
            <div class="image-thumbnails">
                <img class="image-thumbnails__item" src="../../../static/images/product-page/product_Adelia_sm6.jpg" alt="">
                <img class="image-thumbnails__item" src="../../../static/images/product-page/product_Adelia_sm2.jpg" alt="">
                <img class="image-thumbnails__item" src="../../../static/images/product-page/product_Adelia_sm3.jpg" alt="">
                <img class="image-thumbnails__item" src="../../../static/images/product-page/product_Adelia_sm4.jpg" alt="">
                <img class="image-thumbnails__item" src="../../../static/images/product-page/product_Adelia_sm5.jpg" alt="">
            </div>
            <div class="image-preview">
                <img class="image-preview__item" v-bind:src=" product.image_url" alt="">
            </div>
            <div class="product-form">
                <h1 class="product-form__name">{{product.title}}</h1>
                <div class="product-form--row">
                    <h3 class="product-form__price">${{product.price}}</h3>
                    <span class="product-form__shipping">Free Shipping Worldwide</span>
                </div>
                    <select class="product-form__color" name="" id="">
                        <option class="product-form__color--value" value="">Color</option>
                    </select>
                <div class="product-form--row">                
                            <select class="product-form__size" name="" id="">
                                <option value="">Size</option>
                            </select>
                <div class="product-form__size-guide btn btn--small btn--gray">Size Guide</div>
                </div>
                <button class="product-form__add-btn btn btn--blue">
                        <svg class="svg svg-nav" viewBox="0 0 21.5 27.5">
                            <use xlink:href="#shopping-bag-icon"></use>
                        </svg>
                        Add to bag</button>
                <div class="product-form--row">                        
                    <input class="product-form__fav-btn btn btn--gray" type="button" value="SAVE FOR LATER">
                    <span class="product-form__share">Share the product</span>
                </div>
            </div>

            <div class="product-summary">
                <ul class="product-summary-list inline-list">
                    <li :class="{'is-active': activeTab === 1}" @click="activeTab = 1" class="product-summary-list__item inline-list__item">Description</li>
                    <li :class="{'is-active': activeTab === 2}" @click="activeTab = 2" class="product-summary-list__item inline-list__item">Brand</li>
                    <li :class="{'is-active': activeTab === 3}" @click="activeTab = 3" class="product-summary-list__item inline-list__item">Info</li>
                </ul> 
                <div v-show="activeTab == 1" class="product-summary__description"><p>{{product.description}}</p></div>
                <div v-show="activeTab == 2" class="product-summary__brand"><p>{{product.brand}}</p></div>
                <div v-show="activeTab == 3" class="product-summary__info"><p>{{product.info}}</p></div>
            </div>

            <div class="product-teaser">
                <h3 class="product-teaser__headline">Sharpen Your Look</h3>
                <p class="product-teaser__content">Bring out your inner gentlemen. Which lady doesn’t mind been given a little extra love and care. You’ve probably heard the expression ‘I prefer a bad boy’ deep down what they mean is someone who is a little rebellious but who is mature and has a gentle side to them too when it comes to them. Next time hold open a door if you see a lady behind you or who is rushing in front of you. It may be a first for you, but it could also be a first to them.  
 </p>
            </div>
        </section>

</template>


<script>
import axios from "axios";

export default {
  name: "product-detail",
  data: function() {
    return {
      product: "",
      activeTab: 1
    };
  },
  created: function() {
    let id = this.$route.params.id;
    this.getProductById(id);
  },
  watch: {
    "$route.params.id": function(id) {
      this.getProductById(id);
    }
  },
  methods: {
    getProductById: function(id) {
      axios
        .get("../../../static/products.json")
        .then(response => {
          this.product = response.data.filter(product => product.id == id)[0];
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

.product-detail {
  padding: $section-padding;
}

.image-thumbnails {
  display: flex;
  flex-direction: column;
  &__item {
    cursor: pointer;
    width: 70px;
    height: 87px;
    display: block;
    margin: 0 auto 1rem;
    transition: all 0.5s ease-in;
    &:hover {
      -webkit-box-shadow: -3px 2px 39px -9px rgba(0, 0, 0, 0.53);
      -moz-box-shadow: -3px 2px 39px -9px rgba(0, 0, 0, 0.53);
      box-shadow: -3px 2px 39px -9px rgba(0, 0, 0, 0.53);
    }
  }
}
.image-preview {
  position: relative;
  &__item {
    display: block;
    width: 100%;
  }
}
.product-form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &--row {
    display: flex;
    align-items: center;
    margin: 0 0 1rem 0;
  }
  &__name {
  }
  &__price {
    margin: 0 0;
    padding: 0;
  }
  &__shipping {
    margin-left: 1rem;
  }
  &__color,
  &__size {
    color: $darker-gray;
    width: 60%;
    padding: 0.5rem;
    border: 3px solid $darker-gray;
    border-radius: 0;
    -webkit-appearance: none;
    background-image: url("../../../static/images/product-page/gray-triangle.png");
    background-position: 99% 50%;
    background-repeat: no-repeat;
    background-size: 0.5rem;
  }

  &__color {
    margin: 0 0 1rem 0;
  }
  &__size-guide {
    color: $darker-gray;
    text-transform: none;
    margin-left: 1rem;
  }
  &__add-btn {
    width: 60%;
    margin: 0 0 1rem 0;
  }
  &__fav-btn {
    color: $darker-gray;
    width: 60%;
    margin: 0;
  }
  &__share {
    margin-left: 1rem;
  }
}

.product-summary {
  &-list {
    display: flex;
    &__item {
      text-align: center;
      font-size: 1rem;
      font-weight: 600;
      flex-grow: 1;
      cursor: pointer;
      padding: 1rem 0;
      margin-left: 0;
      border-bottom: 2px solid $darker-gray;
    }
  }
  &__description,
  &__brand,
  &__info {
    line-height: 1.5;
  }
}

.is-active {
  border: 2px solid $darker-gray;
  border-bottom: none;
}

.product-teaser {
  text-align: center;
  &__headline {
    position: relative;
    font-size: 3.75rem;
    font-weight: 900;
    letter-spacing: 0.5rem;
    &:before {
      content: "";
      position: absolute;
      width: 10%;
      height: 0px;
      bottom: -25px;
      left: 45%;
      border-bottom: 5px solid $sky-blue;
    }
  }
  &__content {
    line-height: 2;
  }
}

@media (min-width: 851px) and (max-width: 1180px) {
  .image-thumbnails {
    flex-direction: row;
    justify-content: space-between;
    &__item {
      margin-top: 0;
    }
  }
}

@media (min-width: 690px) and (max-width: 850px) {
  .image-thumbnails {
    flex-direction: row;
    justify-content: space-between;
    &__item {
      margin-top: 0;
    }
  }
  .product-form {
    &--row {
      flex-direction: column;
      align-items: flex-start;
    }
    &__size-guide,
    &__shipping,
    &__share {
      margin: 1rem 0 0 0;
    }
  }
}

@include max-width(689px) {
  .image-thumbnails {
    flex-direction: row;
    justify-content: space-between;
    &__item {
      margin-top: 0;
    }
  }
}
</style>
