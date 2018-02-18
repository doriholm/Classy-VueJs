<template>
        <section class="testimonials">
            <div class="testimonials__layout">
                <div class="testimonials__image circle circle--medium circle--light-blue">
                    <img src="../../../static/images/jane-smith.png" alt="">
                </div>
                <h2 class="testimonials__name">Jane Smith</h2>
                <p class="testimonials__text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
            </div>
        </section>
</template>

<script>
export default {
  name: 'testimonials-slider'
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';


.testimonials {
  background-color: $sky-blue;
  @include grid-col-3;
  padding: $section-padding;
  &__layout {
    grid-column: 2 / 3;
    @include grid-col-12;
    text-align: center;
    color: $white;
  }
  &__image {
    grid-column: 6 / 8;
    margin: 0 auto;
  }
  &__name {
    grid-column: 6 / 8;
    font-weight: 600;
  }
  &__text {
    grid-column: 3 / 11;
    font-style: italic;
    line-height: 2;
  }
}
</style>
