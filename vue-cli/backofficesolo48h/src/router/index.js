import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/productos',
      name: 'productos',
      component: () => import('../components/ProductosList'),
    },
    // {
    //   path: '/productos/:id',
    //   name: 'producto-details',
    //   component: () => import('./components/Producto'),
    // },
    {
      path: '/add',
      name: 'add',
      component: () => import('../components/AddProducto'),
    },
  ],
})
