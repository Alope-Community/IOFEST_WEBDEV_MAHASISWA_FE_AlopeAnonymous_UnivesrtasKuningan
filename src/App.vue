<template>
  <main>
    <navigation v-if="showLayout" :isAuthenticated="isAuthenticated" />
    <router-view />
    <footerUser v-if="showLayout" />
  </main>
</template>

<script>
import navigation from "./components/navigation.vue";
import footerUser from "./components/footer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    navigation,
    footerUser,
  },
  data() {
    return {
      isAuthenticated: false,
    }
  },
  computed: {
    showLayout() {
      const path = this.$route?.path;
      return path !== "/login" && path !== "/register";
    },
  },
  methods: {
    async checkIsAuthenticated() {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const token =  localStorage.getItem("token");;
      const response = await axios.get(`${baseUrl}/api/isAuth?token=${token}`);

      if(response.data) {
        localStorage.setItem("isAuthenticated", true)
        this.isAuthenticated = true
      } else{
        localStorage.setItem("isAuthenticated", false)
        this.isAuthenticated = false
      }

    }
  },
  mounted() {
    this.checkIsAuthenticated();
  }
};
</script>
