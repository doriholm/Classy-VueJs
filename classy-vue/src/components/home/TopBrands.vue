<template>
    <section class="top-brands">
            <div class="top-brands__layout ">
                <h1 class="top-brands__headline">Top brands</h1>
       
        <swiper :options="swiperOption" ref="mySwiper" >
                <swiper-slide><img src="../../../static/images/home-page/product-logo1new.png" alt="" class="top-brands__image"></swiper-slide>
                <swiper-slide><img src="../../../static/images/home-page/product-logo2new.png" alt="" class="top-brands__image"></swiper-slide>
                <swiper-slide><img src="../../../static/images/home-page/product-logo3new.png" alt="" class="top-brands__image"></swiper-slide>
                <swiper-slide><img src="../../../static/images/home-page/product-logo4new.png" alt="" class="top-brands__image"></swiper-slide>
                <swiper-slide><img src="../../../static/images/home-page/product-logo5new.png" alt="" class="top-brands__image"></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

            </div>
        </section>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'top-brands',
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: false,
          centeredSlides: true,            
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1100: {
              centeredSlides: false,            
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            }
          }
        }
      }
}
}


</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.top-brands {
  grid-column: 1 / 4;
  background-color: $gray;
  padding: $section-padding;
  margin-bottom: $margin-bottom;
  &__layout {
    grid-column: 2 / 3;
    grid-column-gap: 5rem;
  }
  &__headline {
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
    width: 100%;
    padding: 2rem 2rem 4rem 2rem;
    
  }
}
</style>
