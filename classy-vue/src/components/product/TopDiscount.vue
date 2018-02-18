<template>
    <section class="banner-discount-top">
            <h1 class="banner-discount-top__headline">50% off summer collection</h1>
        </section>
</template>

<script>
export default {
  name: 'top-discount'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.banner-discount-top {
  //grid-column: span 3;
  margin-top: 100px;
  text-align: center;
  color: $white;
  @include background("../../../static/images/50-off-summer.jpg");
  &__headline {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
}

</style>
