import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/echo",
      name: "echo",
      component: () => import("./views/Echo.vue")
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("./views/Chat.vue")
    }
  ]
});
