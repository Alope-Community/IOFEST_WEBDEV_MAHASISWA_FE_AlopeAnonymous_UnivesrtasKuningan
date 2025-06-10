import { createWebHistory, createRouter } from "vue-router";

import home from "../views/home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import detailRelawan from "../views/detailRelawan.vue";
import detailDonasi from "../views/detailDonasi.vue";
import daftarRelawan from "../views/daftarRelawan.vue";
import daftarDonasi from "../views/daftarDonasi.vue"
import profile from "../views/profile.vue";
import forumDiskusi from "../views/forumDiskusi.vue";
import List_Relawan from "../sections/Relawan/List_Relawan.vue";
import Relawan from "../sections/Landing/Relawan.vue";
import List_Donasi from "../sections/Donasi/List_Donasi.vue";
import Artikel from "../views/Artikel.vue"

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
      path: "/profile",
      name: "profile",
      component: profile,
    },
    {
      path: "/detail-relawan/:id",
      name: "datailRelawan",
      component: detailRelawan,
    },
    {
      path: "/detail-donasi/:id",
      name: "datailDonasi",
      component: detailDonasi,
    },
    {
      path: "/daftar-relawan",
      name: "daftarlRelawan",
      component: daftarRelawan,
    },
    {
      path: "/daftar-donasi",
      name: "daftarlDonasi",
      component: daftarDonasi,
    },
    {
      path: "/forum-diskusi",
      name: "forumDiskusi",
      component: forumDiskusi,
    },
    {
      path: "/artikel",
      name: "artikel",
      component: Artikel,
    },
    {
      path: "/list_relawan",
      name: "list_relawan",
      component: List_Relawan,
    },
    {
      path: "/list_donasi",
      name: "list_donasi",
      component: List_Donasi,
    },
    {
      path: "/relawan",
      name: "relawan",
      component: Relawan,
    },
  ],
});

export default router;
