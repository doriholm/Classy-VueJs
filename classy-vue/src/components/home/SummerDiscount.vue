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
  name: 'summer-discount',
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';


.discount {
  @include grid-col-3;
  color: $white;
  line-height: 0.85;
  padding: $section-padding;
  &--background {
    @include background("../../../static/images/summer-collection-banner.jpg");
  }
  &__layout {
    grid-column: 2 / 3;
    @include grid-col-12;
  }
  &__headline--left {
    grid-column: 1 / 5;
    font-size: 60px;
    font-weight: 300;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
      font-size: 32px;
      text-transform: uppercase;
      margin: 0px;
    }
    &--big-text {
      position: relative;
      font-size: 184px;
      font-weight: 300;
      margin: 0px;
      padding-bottom: 5px;
      &::after {
        position: absolute;
        top: 50%;
        content: "%";
        font-size: 30px;
      }
    }
  }
  &__headline--right {
    grid-column: 9 / 13;
    font-size: 60px;
    font-weight: 300;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
