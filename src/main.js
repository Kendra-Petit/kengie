import Vue from "vue";
import Vuelidate from "vuelidate";
import emailjs from "@emailjs/browser";

import App from "./App.vue";
import router from "@/router";

const app = new Vue({
  router,
  Vuelidate,
  render: (h) => h(App),
}).$mount("#app");

window.app = app;

emailjs.init({ publicKey: "bkJIjfPp8QkghboJd" });
