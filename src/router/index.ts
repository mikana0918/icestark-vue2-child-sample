import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { getBasename } from "@ice/stark-app/lib";

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue2',
      name: 'vue2-home',
      component: HelloWorld
    }
  ]
})

// when microfrontend base url changed, always push as history
router.push(getBasename());

export default router