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
                <img class="image-preview__item" src="../../../static/images/product-page/product_Adelia_big.jpg" alt="">
            </div>
            <div class="product-form">
                <h1 class="product-form__name">Adelia Dress</h1>
                <div class="product-form--row">
                    <h3 class="product-form__price">Price</h3>
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
                    <li class="product-summary-list__item inline-list__item">Description</li>
                    <li class="product-summary-list__item inline-list__item">Brand</li>
                    <li class="product-summary-list__item inline-list__item">Info</li>
                </ul>
                <div class="product-summary__description"><p>Description ipsum dolor sit amet consectetur adipisicing elit. Praesentium, excepturi atque laborum officia eaque hic, adipisci, esse necessitatibus sit est nulla saepe. Quis ipsa maxime repellendus delectus autem consequuntur distinctio!</p></div>
                <div class="product-summary__brand"><p>Brand ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse. Laboriosam nisi facilis eaque neque a iusto, in libero alias necessitatibus maxime, quos corrupti quod qui nam ab praesentium. Quae.</p></div>
                <div class="product-summary__Info"><p>Info ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptates, blanditiis veniam sed magnam fugiat accusantium temporibus maxime cumque, optio expedita! Voluptas ipsam excepturi voluptate rerum? Maxime ratione repellat voluptate?</p></div>
            </div>

            <div class="product-teaser">
                <h3 class="product-teaser__headline">Sharpen Your Look</h3>
                <p class="product-teaser__content">Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
        </section>

</template>

<script>
export default {
  name: 'product-detail'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.product-detail {
  padding: $section-padding;
}

.image-thumbnails {
  &__item {
    display: block;
    margin-bottom: 1rem;
  }
}
.image-preview {
  position: relative;
  &__item {
    display: block;
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
  &__color, &__size {
    color:$darker-gray;
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
}
</style>
