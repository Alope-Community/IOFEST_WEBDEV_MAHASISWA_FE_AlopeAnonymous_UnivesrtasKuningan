<template>
  <section class="mt-20 px-5 sm:px-10 lg:px-24 font-primary">
    <!-- Tombol Kembali -->
    <button
      class="flex items-center mb-6 text-primary font-bold hover:text-blue-500 transition duration-300"
      @click="goBack"
    >
      <i class="fas fa-arrow-left mr-2"></i> Kembali
    </button>

    <!-- Container Grid -->
    <div
      class="grid lg:grid-cols-2 gap-0 bg-white border border-blue-500 shadow-md rounded-lg overflow-hidden"
    >
      <!-- Gambar Kiri Full Height -->
      <div class="hidden lg:block h-full">
        <img
          src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2F111939a5-2f80-11f0-a556-defbf884c5fd_C1D6AB5E6562169.png%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75"
          alt="Donasi Pendidikan"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Formulir Donasi -->
      <form
        action=""
        method="POST"
        @submit.prevent="postDaftar"
        class="space-y-6 w-full p-8"
      >
        <h2 class="text-3xl font-bold mb-2 text-gray-800">Formulir Donasi</h2>

        <!-- Nominal Donasi -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1"
            >Nominal Donasi</label
          >
          <input
            v-model="form.nominal"
            type="number"
            placeholder="Contoh: 50000"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- Ucapan atau Harapan -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Ucapan atau Harapan
          </label>
          <textarea
            v-model="form.ucapan"
            rows="4"
            placeholder="Semoga bisa membantu adik-adik yang membutuhkan..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <!-- Tombol Submit -->
        <div class="text-center">
          <button
            type="submit"
            class="w-full h-[36px] rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            Donasi Sekarang
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Button from "./../components/button.vue";
import axios from "axios";
export default {
  components: {
    Button,
  },
  data() {
    return {
      form: {
        program_donasi_id: this.$route.params.id,
        nominal: "",
        ucapan: "",
      },
    };
  },
  methods: {
    async postDaftar() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const token = localStorage.getItem("token");

        console.log(this.form);

        const response = await axios.post(
          `${baseUrl}/api/donasi/daftar`,
          this.form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.$toast.success("Anda Berhasil Berdonasi!", {
          position: "top-right",
        });
        this.$router.push("/profile");
      } catch (error) {
        this.$toast.error("Anda Gagal Berdonasi!", {
          position: "top-right",
        });
      }
    },
    checkIsAuthenticated() {
      const isauth = localStorage.getItem("isAuthenticated");
      console.log(isauth);

      if (isauth == "false") {
        this.$toast.error("Anda Belum Login!", {
          position: "top-right",
        });
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.checkIsAuthenticated();
  },
};
</script>
