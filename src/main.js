import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

import Toaster from "v-toaster";
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "v-toaster/dist/v-toaster.css";

// optional set default imeout, the default is 10000 (10 seconds).
import {
  TabsPlugin,
  ModalPlugin,
  NavbarPlugin,
  IconsPlugin,
  BootstrapVue,
} from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(TabsPlugin);
Vue.use(ModalPlugin);
Vue.use(NavbarPlugin);
Vue.use(Toaster, { timeout: 5000 });
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
