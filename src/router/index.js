import { createWebHistory, createRouter } from "vue-router";

import home from "../views/home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
  ],
});

export default router;
