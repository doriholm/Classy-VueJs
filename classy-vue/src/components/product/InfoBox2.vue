<template>
   <section class="info-section-2">
            <div class="info-section-2__content"></div>
            <div class="info-section-2__image"></div>
        </section>
</template>

<script>
export default {
  name: 'info-box2'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.info-section-2 {
  background-color: $sky-blue;
  &__image {
    @include background("../../../static/images/product-page/info_sec_img2.jpg");
  }
  &__content {
    background-color: rgb(0, 255, 42);
    height: 100px;
  }
}
</style>