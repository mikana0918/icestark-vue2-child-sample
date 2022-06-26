import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { isInIcestark } from "@ice/stark-app/lib";
import setLibraryName from "@ice/stark-app/lib/setLibraryName";

setLibraryName("icestark-vue2-child-sample");

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  render: (h) => h(App)
});

const runApp = (container: Element | string) => {
  vue.$mount(container);
};

export function mount({ container }: { container: Element }) {
  console.log(container)
  if (isInIcestark()) {
    console.log("🧊 your icestark-vue2-child-sample is within icestark")
  } else {
    console.log("🧊 your icestark-vue2-child-sample is NOT witihin icestark")
  }

  vue.$mount();

  // for vue don't replace mountNode
  container.innerHTML = "";
  container.appendChild(vue.$el);
}

export function unmount() {
  vue && (vue as any).$destroy();
}

// if this child app is not working witihin microfrontend,
// just run as standalone app.
if (!isInIcestark()) {
  runApp("#app");
}