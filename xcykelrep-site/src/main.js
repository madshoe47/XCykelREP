import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firestorePlugin } from "vuefire";
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);
Vue.use(firestorePlugin)



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
