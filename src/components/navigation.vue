<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 px-6 md:px-16 lg:px-20 p-4 transition duration-300',
      isScrolled
        ? 'bg-white bg-opacity-5 backdrop-blur-lg shadow-md'
        : 'bg-opacity-100 shadow-none',
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-500">
        <RouterLink to="/">Pijar Nusantara</RouterLink>
      </div>

      <!-- Desktop Menu -->
      <div v-if="isAuthenticated == 'false' || isAuthenticatedFromNav == 'false'" class="hidden md:flex space-x-4">
        <Button link="/login" title="Login" />
        <Button link="/register" title="Register" />
      </div>
      <div v-else class="hidden md:flex space-x-4">
        <RouterLink
          to="/profile"
          class="flex items-center gap-2 border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
        >
          <i class="fa-solid fa-user"></i>
          <span>Profile</span>
        </RouterLink>
        <div
          class="flex items-center gap-2 border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
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
          <IconHamburger size="w-10 h-10" />
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
        class="md:hidden bg-white text-blue-500 p-4 space-y-3 border-t border-gray-300"
      >
        <!-- Mobile Buttons -->
        <div v-if="isAuthenticated == 'false' || isAuthenticatedFromNav == 'false'" class="flex flex-col space-y-4">
          <RouterLink
            to="/login"
            class="w-full border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 text-center"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            class="w-full border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 text-center"
          >
            Register
          </RouterLink>
        </div>
      <div v-else class="flex flex-col space-y-4">
          <RouterLink
            to="/profile"
            class="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
          >
            <i class="fa-solid fa-user"></i>
            <span>Profile</span>
          </RouterLink>
          <div
            class="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
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

      isAuthenticatedFromNav: "false"
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location.replace('/');
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
