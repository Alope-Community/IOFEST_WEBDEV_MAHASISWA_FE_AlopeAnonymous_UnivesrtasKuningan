<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 px-5 md:px-16 lg:px-20 sm:py-4 py-3 transition duration-300',
      isScrolled
        ? 'bg-white bg-opacity-5 backdrop-blur-lg shadow-md'
        : 'bg-opacity-100 shadow-none',
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div
        class="flex items-center space-x-1 sm:text-2xl text-xl font-bold text-blue-500"
      >
        <img src="/images/logo.png" alt="Logo" class="sm:size-12 size-11" />
        <RouterLink to="/">Pijar Nusantara</RouterLink>
              
      </div>

      <!-- Desktop Menu -->
      <div
        v-if="isAuthenticated == 'false' || isAuthenticatedFromNav == 'false'"
        class="hidden md:flex space-x-4"
      >
        <RouterLink
          to="/login"
          class="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
        >
          Login
        </RouterLink>
        <RouterLink
          to="/register"
          class="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
        >
          Register
        </RouterLink>
      </div>
      <div v-else class="hidden md:flex space-x-4">
        <div>
          <router-link
            to="/list_relawan"
            class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
            >Relawan</router-link
          >
        </div>
        <div>
          <router-link
            to="/list_donasi"
            class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
            >Donasi</router-link
          >
        </div>
        <div>
          <router-link
            to="/artikel"
            class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
            >Article</router-link
          >
        </div>
        <div>
          <router-link
            to="/forum-diskusi"
            class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
            >Forum Diskusi</router-link
          >
        </div>
        <RouterLink
          to="/profile"
          class="flex items-center gap-2 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <i class="fa-solid fa-user"></i>
          <span>Profile</span>
        </RouterLink>
        <div
          class="flex items-center gap-2 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          <button @click="logout">Logout</button>
        </div>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-blue-500 p-2 focus:outline-none transition duration-300"
          aria-label="Toggle Menu"
        >
          <IconHamburger size="sm:size-10 size-7" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-in-out"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition duration-300 ease-in-out"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="md:hidden text-blue-500 p-4 space-y-3 border-t border-gray-300"
      >
        <!-- Mobile Buttons -->
        <div
          v-if="isAuthenticated == 'false' || isAuthenticatedFromNav == 'false'"
          class="flex flex-col space-y-4"
        >
          <div class="text-center">
            <router-link
              to="/list_relawan"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Relawan</router-link
            >
          </div>
          <div class="text-center">
            <router-link
              to="/list_donasi"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Donasi</router-link
            >
          </div>
          <div class="text-center">
            <router-link
              to="/artikel"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Article</router-link
            >
          </div>
          <div class="text-center">
            <router-link
              to="/forum-diskusi"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Forum Diskusi</router-link
            >
          </div>
          <RouterLink
            to="/login"
            class="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            class="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
          >
            Register
          </RouterLink>
        </div>
        <div v-else class="flex flex-col space-y-4">
          <div class="text-center">
            <router-link
              to="/list_relawan"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Relawan</router-link
            >
          </div>
          <div class="text-center">
            <router-link
              to="/list_donasi"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Donasi</router-link
            >
          </div>
          <div class="text-center">
            <router-link
              to="/artikel"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Article</router-link
            >
          </div>
          <div class="text-center">
            <router-link
              to="/forum-diskusi"
              class="relative text-center text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500"
              >Forum Diskusi</router-link
            >
          </div>
          <RouterLink
            to="/profile"
            class="flex items-center justify-center gap-2 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <i class="fa-solid fa-user"></i>
            <span>Profile</span>
          </RouterLink>
          <div
            class="flex items-center justify-center gap-2 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            <button @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import Button from "./button.vue";
import IconHamburger from "./icons/hamburger.vue";

export default {
  props: ["isAuthenticated"],
  components: {
    Button,
    IconHamburger,
  },
  data() {
    return {
      menuOpen: false,
      isScrolled: false,

      isAuthenticatedFromNav: "false",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$toast.success("Anda Berhasil Logout!", {
        position: "top-right",
      });
      window.location.replace("/");
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    setInterval(() => {
      this.isAuthenticatedFromNav = localStorage.getItem("isAuthenticated");
    }, 100);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
