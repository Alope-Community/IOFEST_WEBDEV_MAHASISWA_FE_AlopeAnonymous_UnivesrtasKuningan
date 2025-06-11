<template>
  <div
    class="grid lg:grid-cols-3 gap-60 container mx-auto px-4 md:px-10 lg:px-20 pb-20"
  >
    <div class="lg:col-span-2 space-y-10">
      <router-link
        v-for="(article, index) in artikels"
        :key="index"
        :to="`/detail-artikel/${article.id}`"
        class="flex flex-col md:flex-row gap-6 border-b pb-6 p-2"
      >
        <img
          :src="article.gambar"
          alt="Program"
          class="w-full md:w-[350px] h-[250px] object-cover rounded-md"
        />
        <div>
          <h3 class="text-lg font-bold text-gray-800">
            {{ article.judul }}
          </h3>
          <p class="text-sm text-gray-600 mt-2">{{ article.konten }}</p>
          <div class="flex items-center text-gray-500 text-sm mt-3 space-x-4">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.05 3.636a9 9 0 111.414 1.414L5.05 3.636z" />
                <path d="M6.343 5.05a7 7 0 109.9 9.9 7 7 0 00-9.9-9.9z" />
              </svg>
              {{ article.lokasi }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6 2a1 1 0 000 2h1v2a1 1 0 102 0V4h2v2a1 1 0 102 0V4h1a1 1 0 100-2H6zM4 7a1 1 0 000 2h12a1 1 0 100-2H4zm-1 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 4a1 1 0 100 2h10a1 1 0 100-2H5z"
                />
              </svg>
              {{ article.tanggal_diterbitkan }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="xl:block hidden w-[270px]">
      <video
        class="w-full h-auto rounded-md shadow-lg transition-transform duration-500 hover:scale-100"
        autoplay
        muted
        loop
      >
        <source src="/images/Banner.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from "axios";
export default {
  components: { RouterLink },
  data() {
    return {
      artikels: [],
    };
  },
  computed: {
  },
  methods: {
    async fetchArtikel() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const artikelResponse = await axios.get(`${baseUrl}/api/artikel`);
        
        this.artikels = artikelResponse.data.data;
        

        this.artikels = artikelResponse.data.data.map(item => ({
          ...item,
          gambar: `${baseUrl}/storage/${item.gambar}`
        }));
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
  },
  mounted() {
    this.fetchArtikel();
  },
};
</script>
