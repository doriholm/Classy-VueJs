<template>
  <section class="info-section-1">
            <div class="info-section-1__image"></div>
            <div class="info-section-1__content">
                <h1 class="info-sec__headline">Extraordinary Design</h1>
                <p class="info-sec__text">To create original, aesthetically stunning, intelligently designed, beautifully crafted pieces that function well and people enjoy. 
                We make bespoke pieces: intricate to enormous for window display, advertising, theatre and interiors.</p>
                <div class="info-sec__icons">
                    <div class="circle circle--medium circle--white border border--white">
                              <svg id="slaufa_icon" class="slaufa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 22.45">
                                <path class="slaufa" d="M29,15.23A1.82,1.82,0,0,1,27,17H21a1.82,1.82,0,0,1-2-1.77v-8A2.2,2.2,0,0,1,21,5h6a2.21,2.21,0,0,1,2,2.23Z"/>
                                <path class="slaufa" d="M28.78,6.31,44.37,1.1A2,2,0,0,1,47,3V19.45a2,2,0,0,1-2.63,1.9L28.78,16.14" />
                                <path class="slaufa" d="M19.23,6.3,3.63,1.1A2,2,0,0,0,1,3V19.45a2,2,0,0,0,2.63,1.9l15.6-5.2" />
                                <line class="slaufa" x1="15" y1="11" x2="19" y2="11" />
                                <line class="slaufa" x1="33" y1="11" x2="29" y2="11" />
                            </svg>
                      </div>
                      <div class="circle circle--medium circle--white border border--white">
                            <svg id="hanger_icon" class="hanger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.22 28">
                            <path class="hanger" d="M23.61,13l-22,11a1.71,1.71,0,0,0,1,3h42a1.71,1.71,0,0,0,1-3Z" />
                            <path class="hanger" d="M18.61,6a5,5,0,0,1,10,0,7,7,0,0,1-3.67,4.72A2.59,2.59,0,0,0,23.61,13" />
                        </svg>
                      </div>
                      <div class="circle circle--medium circle--white border border--white">
                          <svg id="icons" class="glasses-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 28.9">
                              <path class="glass-1" d="M13.84,12.42l19.21-11a3,3,0,0,1,4.09,1.1" />
                              <path class="glass-1" d="M30.16,12.42,11,1.4a3,3,0,0,0-4.1,1.1" />
                              <circle class="glass-2" cx="11" cy="19.9" r="8" />
                              <circle class="glass-2" cx="33" cy="19.9" r="8" />
                              <path class="glass-2" d="M19,19.9a3,3,0,0,1,6,0" />
                              <line class="glass-1" x1="3" y1="20.33" x2="1" y2="20.33" />
                              <line class="glass-1" x1="41" y1="20.33" x2="43" y2="20.33" />
                          </svg>
                      </div>
                </div>
                <button class="info-sec__button btn btn--medium btn--white-trans">Read more</button>
            </div>
        </section>
</template>

<script>
export default {
  name: "info-box1"
};
</script>

<style lang="scss">
@import "../../assets/styles/modules/_variables";
@import "../../assets/styles/modules/_mixins";

.info-section-1 {
  background-color: $dark;
  &__image {
    @include background("../../../static/images/product-page/info_sec_img1.jpg");
  }
  &__content {
    padding: 1rem 0 4rem 3rem;
    color: $white;
  }
}

.info-sec {
  &__text{
    font-size: 1rem;
    line-height: 2;
  }
  &__icons {
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 0 3rem;
  }
}

@include max-width(850px){
  .info-section-1{
    &__content{
      padding: 2rem;
    }
  }
}
</style>
