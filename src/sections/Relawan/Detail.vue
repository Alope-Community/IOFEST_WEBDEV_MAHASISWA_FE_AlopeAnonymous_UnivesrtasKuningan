<template>
  <section
    class="grid lg:grid-cols-3 md:grid-cols-2 mb-16 mt-28 mx-5 sm:mx-10 lg:mx-24 gap-8 font-primary"
  >
    <!-- Card Image -->
    <div>
      <div
        class="border border-gray-300 rounded-[15px] shadow-xl overflow-hidden"
      >
        <img
          :src="relawan.gambar"
          alt="relawan.title"
          class="w-full rounded-[15px] object-cover h-72"
        />
        <div class="my-4 mx-2 text-center">
          <span
            class="bg-blue-500/20 text-blue-500 font-semibold px-5 py-3 rounded text-lg mx-1 mb-2 inline-block"
          >
            {{ relawan.category }}
          </span>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div
      class="lg:col-span-2 border border-primary rounded-[15px] shadow-xl bg-white"
    >
      <div class="md:my-5 md:mx-10 my-5 mx-5">
        <!-- Back Button -->
        <!-- Tombol Kembali -->
        <button
          @click="$router.back()"
          class="flex items-center mb-6 text-primary font-bold hover:text-blue-500 transition duration-300"
        >
          <i class="fas fa-arrow-left mr-2"></i> Kembali
        </button>

        <!-- Program Title -->
        <h1 class="md:text-2xl text-xl font-bold text-gray-800">
          {{ relawan.title }}
        </h1>

        <!-- Deskripsi Program -->
        <h2 class="md:text-2xl text-xl font-semibold mt-5 text-blue-500">
          Deskripsi
        </h2>
        <p class="text-gray-700 my-5 text-lg">
          {{ relawan.description }}
        </p>

        <!-- Program Time -->
        <h2 class="md:text-2xl text-xl font-semibold mt-5 text-blue-500">
          Waktu
        </h2>
        <div class="flex items-center my-3 gap-3">
          <i
            class="fa-regular fa-calendar-days md:text-2xl text-lg rounded-lg p-2 text-gray-700"
          ></i>
          <p class="text-lg text-gray-700">{{ relawan.tanggal_mulai }} - {{ relawan.tanggal_selesai }}</p>
        </div>


        <!-- Contact Section -->
        <h2 class="md:text-2xl text-xl font-semibold mt-5 text-blue-500">
          Contact Us
        </h2>
        <div class="flex items-center mt-2 gap-3">
          <i
            class="fa-brands fa-instagram md:text-2xl text-lg rounded-lg p-2 text-gray-700"
          ></i>
          <p class="text-lg text-gray-700">{{ relawan.kontak }}</p>
        </div>

        <!-- Register Button -->
        <div class="flex justify-center mb-5">
        <router-link
          :to="`/daftar-relawan/${relawan.id}`"
          class="border border-blue-500 text-blue-500 px-6 py-3 mt-4 rounded-md font-bold hover:bg-blue-500 hover:text-white transition duration-300 text-center"
        >
          Daftar Sekarang
        </router-link>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  props: ["relawan"],
}
</script>