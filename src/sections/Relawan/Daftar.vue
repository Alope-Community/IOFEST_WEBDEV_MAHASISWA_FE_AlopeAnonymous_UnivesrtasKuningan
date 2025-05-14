<template>
  <section class="mt-20 px-5 sm:px-10 lg:px-24 font-primary">
    <!-- Tombol Kembali -->
    <button
      class="flex items-center mb-6 text-primary font-bold hover:text-blue-500 transition duration-300"
    >
      <i class="fas fa-arrow-left mr-2"></i> Kembali
    </button>
    <!-- Container Grid -->
    <div
      class="grid lg:grid-cols-2 gap-0 bg-white border border-blue-500  shadow-md rounded-lg overflow-hidden"
    >
      <!-- Gambar Kiri Full Height -->
      <div class="hidden lg:block h-full">
        <img
          src="/images/page/program.png"
          alt="Volunteer Program"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Formulir Kanan -->
      <form @submit.prevent="submitForm" class="space-y-6 w-full p-8">
        <h2 class="text-3xl font-bold mb-2 text-gray-800">
          Formulir Pendaftaran Relawan
        </h2>

        <!-- Nama -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1"
            >Nama Lengkap</label
          >
          <input
            v-model="form.name"
            type="text"
            placeholder="Masukkan nama lengkap"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="nama@email.com"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- No HP -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">No. HP</label>
          <input
            v-model="form.phone"
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
            v-model="form.motivation"
            rows="4"
            placeholder="Tuliskan motivasi kamu..."
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <!-- Tombol Submit -->
        <div class="text-center">
          <Button link="/" title="Daftar Sekarang" class="w-full" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Button from "../../components/button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        motivation: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Ganti ini dengan logika penyimpanan/submit API jika diperlukan
      console.log("Form Data:", this.form);
      alert("Terima kasih! Pendaftaran kamu telah dikirim.");
      this.form = {
        name: "",
        email: "",
        phone: "",
        motivation: "",
      };
    },
    goBack() {
      this.$router.go(-1); // Navigasi ke halaman sebelumnya
    },
  },
};
</script>
