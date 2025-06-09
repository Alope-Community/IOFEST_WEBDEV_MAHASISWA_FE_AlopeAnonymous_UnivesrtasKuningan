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
      <form @submit.prevent="submitForm" class="space-y-6 w-full p-8">
        <h2 class="text-3xl font-bold mb-2 text-gray-800">Formulir Donasi</h2>

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

        <!-- Nominal Donasi -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1"
            >Nominal Donasi</label
          >
          <input
            v-model="form.amount"
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
            v-model="form.message"
            rows="4"
            placeholder="Semoga bisa membantu adik-adik yang membutuhkan..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <!-- Tombol Submit -->
        <div class="text-center">
          <Button link="/" title="Donasi Sekarang" class="w-full" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Button from "./../components/button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        amount: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Donasi:", this.form);
      alert(
        "Terima kasih atas donasinya! Semoga kebaikanmu membawa manfaat besar."
      );
      this.form = {
        name: "",
        email: "",
        amount: "",
        message: "",
      };
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
