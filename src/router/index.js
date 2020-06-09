import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-ua'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Savaal - Free Computer Based Test at Home'
    }
  },
  {
    path: '/test',
    name: 'Test Home Page',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue'),
    meta: {
      title: 'Test - Savaal'
    }
  },
  {
    path: '/correction',
    name: 'Correction Page',
    component: () => import(/* webpackChunkName: "correction" */ '../views/Correction.vue'),
    meta: {
      title: 'Correction - Savaal'
    }
  },
  {
    path: '/results',
    name: 'Results Page',
    component: () => import(/* webpackChunkName: "results" */ '../views/Results.vue'),
    meta: {
      title: 'Results - Savaal'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// google analytics stuff
Vue.use(VueAnalytics, {
  appName: 'savaal',
  appVersion: '1.0',
  trackingId: 'UA-168750451-1',
  trackPage: true,

  globalDimensions: [
      { dimension: 1, value: 'FirstDimension' },
      { dimension: 2, value: 'SecondDimension' }
  ],


})


export default router
