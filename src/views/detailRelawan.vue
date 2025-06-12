<template>
  <DetailSecttion :relawan="relawan" />
  <RatingSection
    :testimoni="testimoni"
    :currentPage="currentPage"
    :limit="limit"
    :testimoniLength="testimoniLength"
    @nextPage="nextPage"
  />
</template>

<script>
import DetailSecttion from "../sections/Relawan/Detail.vue";
import RatingSection from "../sections/Relawan/Rating.vue";
import axios from "axios";

export default {
  components: {
    DetailSecttion,
    RatingSection,
  },
  data() {
    return {
      relawan: {},
      testimoni: [],

      currentPage: 0,
      limit: 3,
      testimoniLength: 0,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.fetchRelawan(this.currentPage, this.limit);
  },
  methods: {
    async fetchRelawan(currentPage, limit) {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const id = this.$route.params.id;
        const response = await axios.get(`${baseUrl}/api/relawan/${id}`);
        this.relawan = response.data.data;
        this.testimoni = response.data.data.testimoni.data.slice(
          currentPage,
          limit
        );
        this.testimoniLength = response.data.data.testimoni.data.length;
        this.relawan.gambar = `${baseUrl}/storage/public/${response.data.data.gambar}`;
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
    nextPage(currentPage, limit) {
      this.currentPage = currentPage;
      this.limit = limit;

      this.fetchRelawan(this.currentPage, this.limit);
    },
  },
};
</script>
