<template>
    <nav
      :class="[  
        'fixed top-0 w-full z-50 px-6 md:px-16 lg:px-20 p-4 transition duration-300',
        isScrolled
          ? 'bg-white bg-opacity-5 backdrop-blur-lg shadow-md'  // Saat di-scroll
          : 'bg-opacity-100 shadow-none' // Sebelum di-scroll (ada background)
      ]"
    >
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-amber-500">
          <RouterLink to="/">Pijar Nusantara</RouterLink>
        </div>
  
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-4">
          <RouterLink
            to="/login"
            class="w-32 flex items-center justify-center border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            class="w-32 flex items-center justify-center border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
          >
            Register
          </RouterLink>
        </div>
  
        <!-- Mobile Menu Toggle -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-amber-500 p-2 focus:outline-none transition duration-300"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
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
          class="md:hidden bg-white text-amber-500 p-4 space-y-3 border-t border-gray-300"
        >
          <!-- Mobile Buttons -->
          <div class="flex flex-col space-y-4">
            <RouterLink
              to="/login"
              class="w-full border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300 text-center"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/register"
              class="w-full border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300 text-center"
            >
              Register
            </RouterLink>
          </div>
        </div>
      </transition>
    </nav>
  </template>
  
  <script>
  export default {
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
  