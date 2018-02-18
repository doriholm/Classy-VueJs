<template>
     <section class="newsletter-banner">
            <div class="newsletter-banner__layout">
                <form class="email-form">
                    <input class="email-form__input" type="email" name="email" id="" placeholder="YOUR EMAIL" value="YOUR EMAIL">
                    <input class="email-form__button btn btn--white btn--small" type="button" value="SUBSCRIBE TO OUR NEWSLETTER">
                </form>
            </div>
        </section>
</template>

<script>
export default {
  name: 'newsletter-banner',
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';

.newsletter-banner {
  background-color: $sky-blue;
  padding: $section-padding;
  @include grid-col-3;
  &__layout {
    grid-column: 2 / 3;
    @include grid-col-12;
  }
}

.email-form {
  grid-column: 4 / 10;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  &__input {
    width: 45%;
    color: $white;
    border: 2px solid $white;
    padding: 0;
  }
  &__button {
    width: 45%;
  }
}
</style>
