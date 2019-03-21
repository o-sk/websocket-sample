import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// tslint:disable-next-line:no-var-requires
const VueNativeSock = require("vue-native-websocket");

Vue.use(VueNativeSock, "ws://localhost:8888", {
  connectManually: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
