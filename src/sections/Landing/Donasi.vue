<template>
  <section class="relative w-full flex items-center pb-32">
    <!-- Background -->
    <span
      class="absolute z-[-1] lg:w-[1200px] lg:h-[1200px] w-[500px] h-[500px] lg:rounded-full lg:-left-[500px] lg:bottom-[-500px] lg:rotate-[-150deg] -left-[200px] rotate-90 lg:block hidden"
      style="
        background-image: radial-gradient(
          169.4% 89.55% at 94.76% 6.29%,
          rgba(59, 130, 246, 0.2) 0%,
          rgba(59, 130, 246, 0.1) 50%,
          rgba(59, 130, 246, 0) 100%
        );
      "
    ></span>

    <div class="container md:px-16 lg:px-20">
      <h2
        class="md:text-4xl sm:text-3xl text-2xl text-center font-bold text-gray-900 mb-12"
      >
        Temukan <span class="text-primary">Donasi</span> Untuk
        <br class="sm:block hidden" />
        Memantu Sesama
      </h2>

      <!-- Scrollable Horizontal Wrapper -->
      <div class="flex gap-5 overflow-x-auto pb-2">
        <div
          v-for="(donasi, index) in donasis"
          :key="index"
          class="min-w-[300px] border border-primary rounded overflow-hidden shadow flex flex-col bg-white"
        >
          <img
            :src="donasi.image_url"
            :alt="donasi.title"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">{{ donasi.title }}</h3>
            <router-link
              :to="'detail-donasi/' + donasi.id"
              class="text-center flex justify-center items-center w-full h-[36px] rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >Daftar</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Button from "../../components/button.vue";

export default {
  name: "ProgramSection",
  components: {
    Button,
  },
  data() {
    return {
      donasis: [],
      isLoading: true,
    };
  },
  mounted() {
    this.fetchDonasis();
  },
  methods: {
    async fetchDonasis() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/donasi?limit=5`);

        this.donasis = response.data.data.map((item) => ({
          ...item,
          image_url: `${baseUrl}/storage/public/${item.image_url}`,
        }));
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
