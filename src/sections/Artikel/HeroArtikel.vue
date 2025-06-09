<template>
  <section class="text-white font-poppins">
    <div class="container mx-auto grid xl:grid-cols-4 gap-10 pt-24 xl:px-20 md:px-5 px-3">
      <div
        class="xl:col-span-3 relative z-10 flex items-end md:p-10 p-4 rounded overflow-hidden bg-bottom bg-cover h-[300px] md:h-[400px] xl:h-[600px]"
        style="background-image: url('/images/page/a.jpg')"
      >
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="w-[80%] z-30">
          <h6 class="text-blue-500 mb-2 font-semibold text-md md:text-base">
            PIJAR NUSANTARA
          </h6>
          <router-link to="/detail">
            <h2 class="text-white font-bold text-xl md:text-2xl xl:text-3xl">
              Bersama Menyalakan Harapan: Relawan & Donasi untuk Negeri
            </h2>
          </router-link>
          <p class="text-gray-200 mt-3 text-md xl:block hidden">
            Pijar Nusantara menjembatani relawan dan donatur untuk menjangkau
            daerah-daerah terpencil, membawa pendidikan, harapan, dan perubahan
            nyata bagi generasi penerus bangsa.
          </p>
        </div>
      </div>

      <!-- Kanan: info -->
      <div class="md:grid hidden xl:grid-cols-1 grid-cols-2 xl:gap-0 gap-10">
        <div>
          <img
            src="/images/galeri/9.jpg"
            class="rounded object-cover w-full xl:h-[250px] h-[230px]"
            alt="Program Pijar"
          />
        </div>
        <div class="space-y-5">
          <InfoItem title="RELAWAN" subtitle="Jejak Kebaikan: Cerita dari Relawan Pijar Nusantara" />
          <InfoItem title="DONASI" subtitle="Setiap Rupiah Menyalakan Masa Depan" />
          <InfoItem title="DAMPAK NYATA" subtitle="Sekolah Rakyat yang Kini Lebih Terang" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InfoItem from './InfoItem.vue'
</script>
