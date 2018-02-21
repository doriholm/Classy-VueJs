<template>
        <section class="discount discount--background">
            <div class="discount__layout">
            <h2 class="discount__headline--left">All summer</h2>
            <div class="discount-circle__container ">
                <div class="discount-circle circle circle--large circle--blue">
                    <h3 class="discount-circle--small-text">get</h3>
                    <h4 class="discount-circle--big-text">25</h4>
                    <h3 class="discount-circle--small-text">off</h3>
                </div>
            </div>
            <h2 class="discount__headline--right">collection</h2>
            </div>
        </section>
</template>

<script>
export default {
  name: "summer-discount"
};
</script>

<style lang="scss">
@import "../../assets/styles/modules/_variables";
@import "../../assets/styles/modules/_mixins";

.discount {
  color: $white;
  line-height: 0.85;
  padding: $section-padding;
  &--background {
    @include background("../../../static/images/home-page/summer-collection-banner.jpg");
  }
  &__layout {
    grid-column: 2 / 3;
    @include grid-col-12;
  }
  &__headline--left {
    grid-column: 1 / 5;
    justify-content: flex-end;
  }
  &__headline--left,
  &__headline--right {
    font-size: 3.75rem;
    font-weight: 300;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  &__headline--right {
    grid-column: 9 / 13;
    display: flex;
  }
  &-circle__container {
    grid-column: 5 / 9;
    display: flex;
    justify-content: center;
  }
  &-circle {
    flex-direction: column;
    opacity: 0.9;
    &--small-text {
      font-size: 2rem;
      text-transform: uppercase;
      margin: 0px;
    }
    &--big-text {
      position: relative;
      font-size: 11.5rem;
      font-weight: 300;
      margin: 0px;
      padding-bottom: 5px;
      &::after {
        position: absolute;
        top: 50%;
        content: "%";
        font-size: 1.875rem;
      }
    }
  }
}

@media only screen and (max-width: 1150px) {
  .discount {
    &__headline--left,
    &__headline--right {
      font-size: 3rem;
      justify-content: center
    }
    &-circle {
      &--small-text {
        font-size: 2rem;
        text-transform: uppercase;
        margin: 0px;
      }
      &--big-text {
        font-size: 9.5rem;
        margin: 0px;
        padding-bottom: 5px;
        &::after {
          font-size: 1.5rem;
        }
      }
      &.circle--large{
      width: 270px;
      height: 270px;
    }
    }
    
  }
}

@include max-width(950px){
  .discount {
    padding: 0;  
  &__layout {
    grid-template-rows: auto;
  }
  &__headline--left {
    grid-row: 1 / 2;
    grid-column: span 12;
  }
  &__headline--left,
  &__headline--right {
    font-size: 3.75rem;
    font-weight: 300;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  &__headline--right {
    grid-row: 3 / 4;
    grid-column: span 12;
    display: flex;
  }
  &-circle__container {
    grid-row: 2 / 3;
    grid-column: span 12;
    display: flex;
    justify-content: center;
  }
  &-circle {
    &--small-text {
      font-size: 2rem;
      text-transform: uppercase;
      margin: 0px;
    }
    &--big-text {
      position: relative;
      font-size: 8.5rem;
      font-weight: 300;
      margin: 0px;
      padding-bottom: 5px;
      &::after {
        position: absolute;
        top: 50%;
        content: "%";
        font-size: 1.875rem;
      }
    }
  }
}
}
</style>
