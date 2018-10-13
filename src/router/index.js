import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index',
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index.vue'], resolve)
    },
    {
      path: '/count',
      name: 'count',
      component: resolve => require(['@/pages/count.vue'], resolve)
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: resolve => require(['@/pages/detail.vue'], resolve)
    },
  ]
})
