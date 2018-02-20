<template>
  <section class="hero-banner-slider">
            <carousel-main>
                <carousel-slide>
                      <img src="../../../../static//images/home-page/Banner-image.jpg" alt="" class="banner-image">
                      <button class="banner-image__button btn btn--white-trans">Learn more about great deals</button>
                </carousel-slide>
                <carousel-slide>
                      <img src="../../../../static//images/home-page/Banner-image.jpg" alt="" class="banner-image">
                </carousel-slide>
                <carousel-slide>
                      <img src="../../../../static//images/home-page/Banner-image.jpg" alt="" class="banner-image">
                </carousel-slide>
            </carousel-main>
  </section>
</template>

<script>
import CarouselMain from '@/components/home/heroSlider/CarouselMain';
import CarouselSlide from '@/components/home/heroSlider/CarouselSlide';

export default {
  name: 'hero-slider',
  components: {
    'carousel-main': CarouselMain,
    'carousel-slide': CarouselSlide
  },
}
</script>

<style lang="scss">
@import '../../../assets/styles/modules/_variables';
@import '../../../assets/styles/modules/_mixins';

.hero-banner-slider {
  position: relative;
  margin-bottom: $margin-bottom;
}

.banner-image {
  width: 100%;
  display: block;
}

.banner-image__button {
  position: absolute;
  top: 70%;
  right: 7.2%;
}

.banner-text{
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 50%;
}
</style>
