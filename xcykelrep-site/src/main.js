// Mads har brugt alle plugins og sat dem op, udover FireBase som er Jonathan

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firestorePlugin } from "vuefire";
import vuetify from "./plugins/vuetify";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 750,
    tablet: 1300,
    bigger: Infinity,
  },
  defaultBreakpoint: 'mobile'
})

Vue.use(firestorePlugin);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
