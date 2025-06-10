<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 px-6 md:px-16 lg:px-20 p-4 transition duration-300',
      isScrolled
        ? 'bg-white bg-opacity-5 backdrop-blur-lg shadow-md' // Saat di-scroll
        : 'bg-opacity-100 shadow-none', // Sebelum di-scroll (ada background)
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-1 text-2xl font-bold text-blue-500">
        <img src="/images/logo.png" alt="Logo" class="w-12 h-12" />
        <RouterLink to="/">Pijar Nusantara</RouterLink>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-4">
        <Button link="/login" title="Login" />
        <Button link="/register" title="Register" />
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
    class="md:hidden absolute top-full left-0 right-0 bg-white text-blue-500 p-6 space-y-4 shadow-md border-t border-gray-200"
  >
    <div class="flex flex-col space-y-4">
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
  </div>
</transition>
  </nav>
</template>

<script>
import Button from "./button.vue";
import IconHamburger from "./icons/hamburger.vue";

export default {
  components: {
    Button,
    IconHamburger,
  },
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
