<template>
  <section
    class="relative w-full pt-20 md:pt-32 flex items-center pb-32 overflow-hidden"
  >
    <div
      class="container relative md:px-16 lg:px-20 px-5 flex flex-col md:flex-row w-full z-10"
    >
      <!-- Konten Teks -->
      <div class="flex-1 py-20 relative z-10">
        <h1 class="text-5xl font-bold">Tentang Kami</h1>
        <p class="text-justify pt-8">
          Pijar Nusantara adalah platform yang menghubungkan relawan pendidikan
          dan donatur untuk bersama mendukung kesejahteraan Indonesia melalui
          aksi nyata dan kolaborasi berkelanjutan.
        </p>
        <div class="mt-10">
          <Button link="/" title="Lihat Lebih Banyak" />
        </div>
      </div>

      <!-- Gambar Logo -->
      <div class="relative z-0 flex justify-center items-center sm:flex-1 sm:justify-end ">
        <img
          src="/images/logo.png"
          alt="Logo Pijar Nusantara"
          class="w-64 md:w-96 object-contain"
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
