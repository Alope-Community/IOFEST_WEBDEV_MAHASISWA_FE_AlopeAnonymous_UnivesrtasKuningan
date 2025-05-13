import { createWebHistory, createRouter } from "vue-router";

import home from "../views/home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import detailRelawan from "../views/detailRelawan.vue";
import deftarRelawan from "../views/daftarRelawan.vue"
import DaftarRelawan from "../views/daftarRelawan.vue";

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
    {
      path: "/detail-relawan",
      name: "datailRelawan",
      component: detailRelawan,
    },
    {
      path: "/daftar-relawan",
      name: "daftarlRelawan",
      component: DaftarRelawan,
    },
  ],
});

export default router;
