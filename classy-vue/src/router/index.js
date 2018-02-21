import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CollectionPage from '@/components/CollectionPage'
import ProductPage from '@/components/ProductPage'
import ContactPage from '@/components/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/collection',
      name: 'CollectionPage',
      component: CollectionPage
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
