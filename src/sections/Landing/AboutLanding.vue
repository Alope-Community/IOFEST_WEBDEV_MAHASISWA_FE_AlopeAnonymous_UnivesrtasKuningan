<template>
  <section
    class="relative w-full pt-20 md:pt-32 pb-24 md:pb-32 overflow-hidden flex items-center"
  >
    <div
      class="container relative px-4 sm:px-6 md:px-16 lg:px-20 flex flex-col md:flex-row items-center md:items-start w-full z-10"
    >
      <!-- Konten Teks -->
      <div class="flex-1 text-center md:text-left py-10 md:py-20 order-1 md:order-none z-10">
        <h1 class="text-4xl sm:text-5xl font-bold">Tentang Kami</h1>
        <p class="pt-6 sm:pt-8 text-justify md:text-left leading-relaxed max-w-xl mx-auto md:mx-0">
          Pijar Nusantara adalah platform yang menghubungkan relawan pendidikan
          dan donatur untuk bersama mendukung kesejahteraan Indonesia melalui
          aksi nyata dan kolaborasi berkelanjutan.
        </p>
        <div class="mt-8 sm:mt-10">
          <Button link="/" title="Lihat Lebih Banyak" />
        </div>
      </div>

      <!-- Gambar Logo -->
      <div class="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 order-2 md:order-none z-0">
        <img
          src="/images/logo.png"
          alt="Logo Pijar Nusantara"
          class="w-48 sm:w-64 md:w-80 lg:w-96 object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./../../components/button.vue";
export default {
  components: {
    Button,
  },
};
</script>
