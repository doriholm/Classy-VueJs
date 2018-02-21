<template>
       <section class="hero-banner">
            <img class="hero-banner__image" src="../../../static/images/hero-banner.jpg" alt="">
            <div class="hero-banner__content">
                <span class="hero-banner__sub-headline">most wanted</span>
                <h1 class="hero-banner__headline">New collection</h1>
                <button class="hero-banner__button btn btn--x-large btn--white-trans">Browse Collection</button>
            </div>
        </section>
</template>

<script>
export default {
  name: 'hero-banner'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.hero-banner {
  color: $white;
  position: relative;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
  &__image {
    grid-column: span 3;
    width: 100%;
  }
  &__sub-headline {
    font-size: 4rem;
    font-weight: 300;
    &:before,
    &:after {
      background-color: $white;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 14rem;
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
  &__headline {
    font-size: 6.25rem;
    font-weight: 900;
    margin: 1rem auto;
    text-transform: uppercase;
  }
  &__button {
    padding: 1rem 3rem;
  }
}


@include max-width(1000px){
  .hero-banner{
    &__sub-headline{
      font-size: 2rem;
    &:before,
    &:after {
      width: 8rem;
    }
    }
    &__headline{
      font-size: 4rem;
    }
  }
}
</style>
