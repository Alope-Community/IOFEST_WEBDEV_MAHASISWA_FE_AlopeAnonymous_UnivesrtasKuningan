<template>
  <main>
    <navigation v-if="showLayout" />
    <router-view />
    <footerUser v-if="showLayout" />
  </main>
</template>

<script>
import navigation from "./components/navigation.vue";
import footerUser from "./components/footer.vue";

export default {
  name: "App",
  components: {
    navigation,
    footerUser,
  },
  computed: {
    showLayout() {
      const path = this.$route?.path;
      // Menyembunyikan navbar dan footer di halaman login dan register
      return path !== "/login" && path !== "/register";
    },
  },
};
</script>
