<template>
    <main class="grid-layout--home hasHero">
        <hero-slider></hero-slider>
        <news-letter></news-letter>
        <top-brands></top-brands>
        <product-offers></product-offers>
        <products-preview></products-preview>
        <summer-discount></summer-discount>
        <testimonials-slider></testimonials-slider>
    </main>
</template>

<script>
import HeroSlider from '@/components/home/heroSlider/HeroSlider';
import NewsLetter from '@/components/home/NewsLetter';
import TopBrands from '@/components/home/TopBrands';
import ProductOffers from '@/components/home/ProductOffers';
import ProductsPreview from '@/components/home/ProductsPreview';
import SummerDiscount from '@/components/home/SummerDiscount';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';

export default {
  name: 'home-page',
  components:{
      'hero-slider': HeroSlider,
      'news-letter': NewsLetter,
      'top-brands': TopBrands,
      'product-offers': ProductOffers,
      'products-preview': ProductsPreview,
      'summer-discount': SummerDiscount,
      'testimonials-slider': TestimonialsSlider,
  }
  
}
</script>

<style lang="scss">

</style>
