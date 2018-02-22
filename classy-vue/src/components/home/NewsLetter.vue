<template>
     <section class="newsletter">
      <div class="men-lookbook-container">
            <div class="men-lookbook center">
                <div class="border border--white">
                    <h2 class="lookbook-text__top">Men's</h2>
                    <h2 class="lookbook-text__bottom">lookbook</h2>
                </div>
            </div>
      </div>
            <div class="newsletter-item">
                <div class="newsletter-item__content border border--gray">
                    <div class="circle circle--small circle--blue">
                        <svg class="svg svg-nav svg-mail-icon" viewBox="0 0 30 20">
                            <use xlink:href="#mail-icon"></use>
                        </svg>
                    </div>
                    <h1 class="newsletter-item__headline">Get our newsletter</h1>
                    <h3 class="newsletter-item__subheadline">Join our maillist list to receive
                        <br>special discounts</h3>
                    <form class="newsletter-form" action="">
                        <input class="newsletter-form__input-field full-width" type="email" name="email" id="" placeholder="ENTER YOUR EMAIL" value="">
                        <input class="newsletter-form__button btn border full-width" type="button" value="SUBSCRIBE">
                    </form>
                </div>
            </div>
      <div class="women-lookbook-container">
            <div class="women-lookbook center">
                <div class="border border--white">
                    <h2 class="lookbook-text__top">Women's</h2>
                    <h2 class="lookbook-text__bottom">lookbook</h2>
                </div>
            </div>
            </div>
     </section>
</template>

<script>
export default {
  name: "news-letter"
};
</script>

<style lang="scss">
@import "../../assets/styles/modules/_variables";
@import "../../assets/styles/modules/_mixins";

.newsletter {
  margin-bottom: $margin-bottom;
}
.newsletter-item {
  z-index: 5;
  grid-column: 5 / 9;
  background-color: $light-gray;
  padding: 1rem;
  transform: scale(1.08);
  box-shadow: 0 10px 20px rgba(3, 27, 78, 0.1);
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
  }
  &__headline {
    text-transform: uppercase;
    margin-bottom: 0.05rem;
  }
  &__subheadline {
    text-transform: uppercase;
    color: $dark-gray;
    font-weight: 500;
    margin: 0 0 2rem 0;
  }
}

.svg-mail-icon{
  width: 1.875rem;
  height: 1.875rem;
}

.newsletter-form {
  font-size: 1.125rem;
  font-weight: 600;
  &__button {
    transition: all 0.5s ease;
    &:hover {
      background-color: $dark;
      color: $white;
      border-color: $dark;
    }
  }
}

.men-lookbook {
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  color: $white;
  text-align: center;
  transition: all 1s ease;
  @include background("../../../static/images/home-page/mens-lookbook.jpg");
  &:hover {
    transform: scale(1.1);
  }
}

.men-lookbook-container {
  grid-column: 1 / 5;
  overflow: hidden;
}

.women-lookbook {
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  color: $white;
  text-align: center;
  transition: all 1s ease;
  @include background("../../../static/images/home-page/womens-lookbook.jpg");
  &:hover {
    transform: scale(1.1);
  }
}

.women-lookbook-container {
  grid-column: 9 / 13;
  overflow: hidden;
}

.lookbook-text {
  &__top {
    text-transform: uppercase;
    font-size: 2.625rem;
    font-weight: 700;
    margin: 0;
  }
  &__bottom {
    font-size: 3rem;
    font-weight: 400;
    margin: 0;
  }
}

@media only screen and (max-width: 1150px) {
  .newsletter {
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
  .newsletter-item {
    grid-column: 2 / span 10;
    margin-bottom: 2rem;
  }
  .men-lookbook-container,
  .women-lookbook-container {
    grid-column: span 6;
    grid-row: 2 / 3;
  }
}

@media only screen and (max-width: 600px) {
.lookbook-text {
  &__top {
    font-size: 1.625rem;
  }
  &__bottom {
    font-size: 2rem;
  }
}
}
</style>
