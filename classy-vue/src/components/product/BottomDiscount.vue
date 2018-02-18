<template>
     <section class="banner-discount-bottom">
            <h1 class="banner-discount-bottom__headline">Big discounts</h1>
        </section>
</template>

<script>
export default {
  name: 'bottom-discount'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.banner-discount-bottom {
  text-align: center;
  color: $white;
  padding: 10rem 0;
  @include background("../../../static/images/big-discount.jpg");
  &__headline {
    display: inline-block;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    padding: 1.5rem;
    border: 4px solid $white;
  }
}
</style>
