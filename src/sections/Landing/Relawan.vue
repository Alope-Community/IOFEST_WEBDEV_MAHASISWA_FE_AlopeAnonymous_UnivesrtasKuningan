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
      <h2 class="md:text-4xl text-3xl text-center font-bold text-gray-900 mb-12">
        Temukan <span class="text-primary">Program</span> Yang
        <br class="sm:block hidden" />
        Tepat Untukmu
      </h2>

      <!-- Scrollable Horizontal Wrapper -->
      <div class="flex gap-5 overflow-x-auto pb-2">
        <div
          v-for="(relawan, index) in relawans"
          :key="index"
          class="min-w-[300px] border border-primary rounded overflow-hidden shadow flex flex-col bg-white"
        >
          <img
            :src="relawan.image_url"
            :alt="relawan.title"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">{{ relawan.title }}</h3>
            <Button link="/" title="Daftar Sekarang" />
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
      relawans: []
    }
  },
    mounted() {
    this.fetchRelawans();
  },
    methods: {
    async fetchRelawans() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/relawan?limit=5`);
        
        this.relawans = response.data.data.map(item => ({
          ...item,
          image_url: `${baseUrl}/storage/${item.image_url}`
        }));

        console.log(this.relawans);
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    }
  },
};
</script>