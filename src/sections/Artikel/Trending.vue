<template>
  <section class="font-poppins py-16">
    <div class="container mx-auto px-4 md:px-10 lg:px-20">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-red-600 font-bold text-lg flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927C9.469 1.815 10.531 1.815 10.951 2.927l1.518 4.155 4.386.332c1.171.089 1.645 1.537.797 2.295l-3.327 2.986 1.03 4.233c.27 1.112-.926 1.998-1.902 1.41L10 16.347l-3.453 2.991c-.976.588-2.172-.298-1.902-1.41l1.03-4.233-3.327-2.986c-.848-.758-.374-2.206.797-2.295l4.386-.332 1.518-4.155z"
            />
          </svg>
          TRENDING
        </h3>
      
      </div>

      <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mb-10"> 
        <div
          v-for="(item, index) in artikels"
          :key="index"
          class="flex-shrink-0"
        >
          <img
            :src="item.gambar"
            alt=""
            class="w-full h-[200px] object-cover rounded-md mb-2"
          />
          <p class="text-sm font-medium">{{ item.judul }}</p>
        </div>
      </div>
      <hr class="border-t-2 border-blue-500 w-6/5 mx-auto my-10" />
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
      artikels: [],
    };
  },
  computed: {
  },
  methods: {
    async fetchArtikel() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const artikelResponse = await axios.get(`${baseUrl}/api/artikel?limit=3`);
        
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
