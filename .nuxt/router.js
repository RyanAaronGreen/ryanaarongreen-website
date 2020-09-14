import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b668271 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _b180b434 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _b23a4270 = () => interopDefault(import('../pages/Work.vue' /* webpackChunkName: "pages/Work" */))
const _4f8560cb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/ryanaarongreen-website/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _6b668271,
    name: "404"
  }, {
    path: "/About",
    component: _b180b434,
    name: "About"
  }, {
    path: "/Work",
    component: _b23a4270,
    name: "Work"
  }, {
    path: "/",
    component: _4f8560cb,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
