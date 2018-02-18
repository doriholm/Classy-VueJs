<template>
  <section class="hero-banner-slider">
            <img src="../../../static//images/Banner-image.jpg" alt="" class="banner-image">
            <button class="banner-image__button btn btn--white-trans">Learn more about great deals</button>
        </section>
</template>

<script>
export default {
  name: 'hero-slider',
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.hero-banner-slider {
  position: relative;
  margin-bottom: $margin-bottom;
}
</style>
