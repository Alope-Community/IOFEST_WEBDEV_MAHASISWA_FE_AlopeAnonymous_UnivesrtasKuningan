<template>
  <DetailSecttion :donasi = "donasi"/>
</template>

<script>
import DetailSecttion from "../sections/Donasi/Detail.vue";
import axios from "axios";

export default {
  components: {
    DetailSecttion,
  },
  data() {
      return {
        donasi: {},
      }
  },
  mounted() {
    this.fetchDonasi();
  },
  methods: {
    async fetchDonasi() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const id = this.$route.params.id;
        console.log(id);
        
        const response = await axios.get(`${baseUrl}/api/donasi/${id}`);
        console.log(response);
        
        this.donasi = response.data.data;
        
        this.donasi.gambar = `${baseUrl}/storage/${response.data.data.gambar}`
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
  },
};
</script>
