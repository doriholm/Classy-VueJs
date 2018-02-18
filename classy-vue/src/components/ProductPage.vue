<template>
  <main class="grid-layout--product">
    <top-discount></top-discount>
    <product-detail></product-detail>
    <info-box1></info-box1>
    <info-box2></info-box2>
  </main>
</template>

<script>
import TopDiscount from '@/components/product/TopDiscount';
import ProductDetail from '@/components/product/ProductDetail';
import InfoBox1 from '@/components/product/InfoBox1';
import InfoBox2 from '@/components/product/InfoBox2';
import BottomDiscount from '@/components/product/BottomDiscount';

export default {
  name: 'product-page',
  components: {
    'top-discount': TopDiscount,
    'product-detail': ProductDetail,
    'info-box1': InfoBox1,
    'info-box2': InfoBox2,
    'bottom-disocunt': BottomDiscount,
  }
}
</script>

<style lang="scss">

</style>
