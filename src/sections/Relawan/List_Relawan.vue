<template>
  <section class="relative">
    <!-- Background Radial Gradient -->
    <span
      class="absolute z-[-1] lg:w-[1200px] lg:h-[1200px] w-[500px] h-[500px] lg:rounded-full lg:-left-[500px] lg:bottom-[-500px] lg:rotate-[-150deg] -left-[200px] rotate-90 lg:block hidden"
      style="
        background-image: radial-gradient(
          169.4% 89.55% at 94.76% 6.29%,
          rgba(59, 130, 246, 0.2) 0%,
          rgba(59, 130, 246, 0.1) 50%,
          rgba(59, 130, 246, 0) 100%
        );
      "></span>

    <div class="relative h-[350px] rounded-md overflow-hidden">
      <img
        src="/images/page/a.jpg"
        alt="Header Background"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      <div
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"
      ></div>

      <!-- Text Content -->
      <div
        class="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 class="text-white text-4xl font-bold leading-snug mb-6">
          Temukan Lebih Banyak <br />
          Program Relawan
        </h1>

        <!-- Search Input -->
        <div class="relative w-full max-w-md">
          <input
            type="text"
            v-model="search"
            placeholder="Cari program relawan..."
            class="w-full border border-white text-white bg-transparent placeholder-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
            @change="searchRelawan"
          />
          <i class="fas fa-search absolute right-4 top-3 text-white"></i>
        </div>
      </div>
    </div>

    <!-- Konten Section -->
    <div class="my-16 mx-5 sm:mx-10 lg:mx-14">
      <div class="container mx-auto px-4 mb-5 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Program Cards Section -->
          <div class="md:col-span-3 grid grid-cols-1 mb-5">
            <div
              class="bg-white border border-primary gap-10 shadow-md rounded-[15px] md:flex overflow-hidden items-center mb-5"
              v-for="(relawan, index) in relawans"
              :key="index"
            >
              <img
                :src="relawan.image_url"
                :alt="relawan.title"
                class="md:w-1/2 md:max-w-88 md:min-w-44 w-full max-h-52 min-h-52 object-cover"
              />
              <div class="md:w-2/3 p-4">
                <h2 class="lg:text-2xl text-2xl font-bold text-gray-900 mb-1">
                  {{ relawan.title }}
                </h2>
                <p class="text-sm text-gray-500 mb-1">
                  {{ relawan.start_date }}
                </p>
                <p class="text-sm text-gray-500 mb-1">
                  {{ relawan.jumlah_peserta }} partisipan
                </p>
                <p class="text-md text-gray-600 mb-7">
                  {{ truncateDescription(relawan.description) }}
                </p>
                <RouterLink
                  :to="'/detail-relawan/' + relawan.id"
                  class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  Daftar Sekarang
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Sidebar Artikel Terbaru -->
          <div class="md:col-span-1 space-y-5">
            <!-- Artikel Terbaru -->

            <h3 class="text-lg font-semibold text-gray-800">Artikel Terbaru</h3>
            <div
              v-for="(article, index) in artikels"
              :key="index"
              class="border-l-4 border-blue-500 pl-3"
            >
              <RouterLink
                :to="'/artikel/' + article.id"
                class="block hover:bg-blue-50 p-2 rounded transition"
              >
                <p class="text-xs text-blue-500">
                  {{ article.lokasi }} • {{ article.tanggal_diterbitkan }}
                </p>
                <p class="text-sm font-medium text-gray-800">
                  {{ article.judul }}
                </p>
              </RouterLink>
            </div>

            <div class="space-y-5 relative sticky top-20">
              <h3 class="text-lg font-semibold text-gray-800">Sorotan</h3>
              <div
                v-for="(card, index) in donasis"
                :key="'sidecard-' + index"
                class="bg-white border border-blue-500 shadow-md rounded-sm overflow-hidden"
              >
                <RouterLink :to="'/detail-donasi/' + card.id" class="">
                  <img
                    :src="card.image_url"
                    alt="Card Gambar"
                    class="w-full h-36 object-cover"
                  />
                  <div class="p-3">
                    <p class="text-sm font-semibold text-blue-600 mb-1">
                      {{ card.title }} • {{ card.start_date }}
                    </p>
                    <h6 class="text-sm text-gray-600">
                      {{ card.description }}
                    </h6>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from "axios";

export default {
  components: { RouterLink },
  data() {
    return {
      search: "",
      relawans: [],
      artikels: [],
      donasis: [],
    };
  },
  computed: {
  },
  methods: {
    async searchRelawan(search) {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const searchResponse = await axios.get(`${baseUrl}/api/relawan?search=${search.target.value}`);
        this.relawans = searchResponse.data.data;

        this.relawans = searchResponse.data.data.map(item => ({
          ...item,
          image_url: `${baseUrl}/storage/${item.image_url}`
        }));
    },
    async fetchRelawan() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const relawanResponse = await axios.get(`${baseUrl}/api/relawan`);
        const artikelResponse = await axios.get(`${baseUrl}/api/artikel?limit=3`);
        const donasiResponse = await axios.get(`${baseUrl}/api/donasi?limit=2`);

        console.log(donasiResponse);

        this.relawans = relawanResponse.data.data;
        this.artikels = artikelResponse.data.data;
        this.donasis = donasiResponse.data.data;

        this.relawans = relawanResponse.data.data.map(item => ({
          ...item,
          image_url: `${baseUrl}/storage/${item.image_url}`
        }));
        this.artikels = artikelResponse.data.data.map(item => ({
          ...item,
          gambar: `${baseUrl}/storage/${item.gambar}`
        }));
        this.donasis = donasiResponse.data.data.map(item => ({
          ...item,
          image_url: `${baseUrl}/storage/${item.image_url}`
        }));


        
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
    truncateDescription(description) {
      const words = description.split(" ");
      const maxWords = window.innerWidth <= 768 ? 5 : 10;
      return words.length > maxWords
        ? words.slice(0, maxWords).join(" ") + "..."
        : description;
    },
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.fetchRelawan();
  },
};
</script>
