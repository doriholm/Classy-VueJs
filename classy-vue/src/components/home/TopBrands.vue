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
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: false,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
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
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
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
  @include grid-col-3;
  padding: $section-padding;
  margin-bottom: $margin-bottom;
  &__layout {
    //width: 500px;
    grid-column: 2 / 3;
    //@include grid-col-5;
    grid-column-gap: 5rem;
  }
  &__headline {
    //grid-column: span 5;
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
    width: 150px;
    margin-top: 2rem;
    margin-bottom: 6rem;
  }
}
</style>
