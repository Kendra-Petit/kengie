import Vue from "vue";
import Router from "vue-router";
import { MainScreen, NotFoundScreen, HomePageScreen } from "@/screens";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: MainScreen,
      children: [
        {
          path: "/",
          component: HomePageScreen,
        },
      ],
    },
    {
      path: "*",
      name: "404",
      component: NotFoundScreen,
    },
  ],
});

export default router;
