import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
Vue.use(VueAxios, axios);
import currency from "./filters/currency";
Vue.filter("currency", currency);

import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-1234567-1" }
});


Vue.config.productionTip = false;
// axios.defaults.withCredentials = true;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
