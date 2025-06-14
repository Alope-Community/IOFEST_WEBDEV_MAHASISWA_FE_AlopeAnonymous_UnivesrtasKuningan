<template>
  <section class="mt-20 px-5 sm:px-10 lg:px-24 font-primary">
    <!-- Tombol Kembali -->
    <router-link
      to="/list_relawan"
      class="flex items-center mb-6 text-primary font-bold hover:text-blue-500 transition duration-300"
    >
      <i class="fas fa-arrow-left mr-2"></i> Kembali
    </router-link>
    <!-- Container Grid -->
    <div
      class="grid lg:grid-cols-2 gap-0 bg-white border border-blue-500 shadow-md rounded-lg overflow-hidden"
    >
      <!-- Gambar Kiri Full Height -->
      <div class="hidden lg:block h-full">
        <img
          src="/images/relawan/3.jpg"
          alt="Volunteer Program"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Formulir Kanan -->
      <form
        action=""
        method="POST"
        @submit.prevent="postDaftar"
        class="space-y-6 w-full p-8"
      >
        <h2 class="text-3xl font-bold mb-2 text-gray-800">
          Formulir Pendaftaran Relawan
        </h2>

        <!-- No HP -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">No. HP</label>
          <input
            v-model="form.no_hp"
            type="tel"
            placeholder="+62..."
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- Motivasi -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Motivasi Mengikuti Program Ini
          </label>
          <textarea
            v-model="form.motivasi"
            rows="4"
            placeholder="Tuliskan motivasi kamu..."
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <!-- Tombol Submit -->
        <div class="text-center">
          <button
            type="submit"
            class="w-full h-[36px] rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            Daftar Sekarang
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Button from "../../components/button.vue";
import axios from "axios";
export default {
  components: {
    Button,
  },
  data() {
    return {
      form: {
        program_relawan_id: this.$route.params.id,
        no_hp: "",
        motivasi: "",
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
          `${baseUrl}/api/relawan/daftar`,
          this.form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.$toast.success('Anda Berhasil Daftar!', {
            position: 'top-right'
        });
        this.$router.push("/profile");
      } catch (error) {
        this.$toast.error('Anda Gagal Daftar!', {
            position: 'top-right'
        });
        console.error("Gagal mengambil data program:", error);
      }
    },

    checkIsAuthenticated() {
      const isauth = localStorage.getItem("isAuthenticated");
      console.log(isauth);

      if (isauth == "false") {
        this.$toast.error('Anda Belum Login!', {
            position: 'top-right'
        });
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.checkIsAuthenticated();
  },
};
</script>
