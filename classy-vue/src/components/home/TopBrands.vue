<template>
    <section class="top-brands">
            <div class="top-brands__layout ">
                <h1 class="top-brands__headline">Top brands</h1>
                <img src="../../../static/images/product-logo1.png" alt="" class="top-brands__image">
                <img src="../../../static/images/product-logo2.png" alt="" class="top-brands__image">
                <img src="../../../static/images/product-logo3.png" alt="" class="top-brands__image">
                <img src="../../../static/images/product-logo4.png" alt="" class="top-brands__image">
                <img src="../../../static/images/product-logo5.png" alt="" class="top-brands__image">
                <div class="">Fimm punktar</div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'top-brands'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.top-brands {
  background-color: $gray;
  @include grid-col-3;
  padding: $section-padding;
  margin-bottom: $margin-bottom;
  &__layout {
    grid-column: 2 / 3;
    @include grid-col-5;
    grid-column-gap: 5rem;
  }
  &__headline {
    grid-column: span 5;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: uppercase;
    overflow: hidden;
    &:before,
    &:after {
      background-color: #000;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 5rem;
    }
    &:before {
      right: 0.5em;
      margin-left: -50%;
    }
    &:after {
      left: 0.5em;
      margin-right: -50%;
    }
  }
  &__image {
    grid-column-start: span 1;
  }
}
</style>
