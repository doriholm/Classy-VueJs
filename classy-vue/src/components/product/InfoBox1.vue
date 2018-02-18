<template>
  <section class="info-section-1">
            <div class="info-section-1__image"></div>
            <div class="info-section-1__content">
                <h1 class="info-sec__headline">Extraordinary Design</h1>
                <p class="info-sec__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe eius ipsam, quisquam aliquam perferendis sunt autem impedit ratione culpa mollitia voluptatibus voluptas recusandae commodi? Expedita iure cum molestiae nulla?</p>
                <div class="info-sec_icons"></div>
                <button class="info-sec__button btn btn--medium btn--white-trans">Read more</button>
            </div>
        </section>
</template>

<script>
export default {
  name: 'info-box1'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

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
</style>
