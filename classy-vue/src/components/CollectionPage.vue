<template>
    <main class="grid-layout--collections">
        <hero-banner></hero-banner>
        <product-collection></product-collection>
        <newsletter-banner></newsletter-banner>
    </main>
</template>

<script>
import HeroBanner from '@/components/collection/HeroBanner'
import ProductCollection from '@/components/collection/ProductCollection'
import NewsletterBanner from '@/components/collection/NewsletterBanner'

export default {
  name: 'collection-page',
  components: {
      'hero-banner': HeroBanner,
      'product-collection': ProductCollection,
      'newsletter-banner': NewsletterBanner,
  }
}
</script>

<style lang="scss">

</style>
