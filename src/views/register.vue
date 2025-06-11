<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <div
      class="flex border border-blue-500 flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <!-- Side Image with Overlay and Title -->
      <div
        class="hidden md:flex md:w-1/2 items-center justify-center p-6 relative"
      >
        <img
          src="https://erikasherlywardani.wordpress.com/wp-content/uploads/2012/06/b.jpg"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-75"></div>
        <h1 class="text-white text-3xl font-bold mb-2 text-center z-10">
          Daftar untuk program dan komunitas terbaik.
        </h1>
      </div>

      <!-- Form Section -->
      <div class="w-full md:w-1/2 p-6">
        <!-- Back Button -->
        <button
          class="flex items-center mb-2 text-primary font-bold hover:text-blue-500 transition duration-300"
        >
          <i class="fas fa-arrow-left mr-2"></i> Kembali
        </button>

        <!-- Title -->
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-3">
          Register
        </h2>

        <!-- Form -->
        <form action="" method="POST" @submit.prevent="postRegister">
          <!-- Name -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <div class="relative mt-2">
              <i class="fas fa-user absolute left-3 top-4 text-primary"></i>
              <input
                type="text"
                id="name"
                placeholder="Nama"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
                v-model="formData.name"
              />
            </div>
          </div>

          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div class="relative mt-2">
              <i class="fas fa-envelope absolute left-3 top-4 text-primary"></i>
              <input
                type="email"
                id="email"
                placeholder="Email"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
                v-model="formData.email"
              />
            </div>
          </div>

          <!-- Password -->
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="relative mt-2">
              <i class="fas fa-lock absolute left-3 top-4 text-primary"></i>
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
                v-model="formData.password"
              />
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="mb-4">
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700"
            >
              Konfirmasi Password
            </label>
            <div class="relative mt-2">
              <i class="fas fa-lock absolute left-3 top-4 text-primary"></i>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Konfirmasi Password"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
                v-model="formData.password_confirmation"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="w-full">Register</button>
        </form>

        <!-- Login Redirect -->
        <p class="mt-4 text-center text-gray-600">
          Sudah Punya Akun?
          <a href="/login" class="text-blue-500 hover:underline">Masuk</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./../components/button.vue";
import axios from "axios";

export default {
  components: {
    Button,
  },
  data(){
    return{
      formData: {
        name: "",
        email: "",
        password:"",
        password_confirmation: ""
      }
    }
  },
  methods: {
    async postRegister() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await axios.post(`${baseUrl}/api/register`, this.formData);

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // this.$router.push("/");
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
  },
};
</script>
