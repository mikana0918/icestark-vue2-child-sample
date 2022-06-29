import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue2Options from '@/components/Vue2Options.vue'
import Vue2Class from '@/components/Vue2Class.vue'
import Vue2PropertyDecorator from '@/components/Vue2PropertyDecorator.vue'
import { getBasename } from "@ice/stark-app/lib";
import { isInIcestark } from "@ice/stark-app/lib";

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
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue2/options',
      name: 'vue2-home',
      component: Vue2Options
    },
    {
      path: '/vue2/class',
      name: 'vue2-class',
      component: Vue2Class
    },
    {
      path: '/vue2/class-decorator',
      name: 'vue2-class-decorator',
      component: Vue2PropertyDecorator
    }
  ]
})

// when microfrontend base url changed, always push as history
if(isInIcestark) {
  router.push(getBasename());
}

export default router
