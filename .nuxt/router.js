import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b668271 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _2fcd8606 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _b9ef0ab0 = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
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
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _6b668271,
    name: "404"
  }, {
    path: "/about",
    component: _2fcd8606,
    name: "about"
  }, {
    path: "/work",
    component: _b9ef0ab0,
    name: "work"
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
