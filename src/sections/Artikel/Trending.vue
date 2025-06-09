<template>
  <section class="font-poppins py-16">
    <div class="container mx-auto px-4 md:px-10 lg:px-20">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-red-600 font-bold text-xl flex items-center gap-2">
          <i class="fa-solid fa-fire"></i>
          TRENDING
        </h3>
      
      </div>

      <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mb-10"> 
        <div
          v-for="(item, index) in trending"
          :key="index"
          class="flex-shrink-0"
        >
          <img
            :src="item.image"
            alt=""
            class="w-full h-[200px] object-cover rounded-md mb-2"
          />
          <p class="text-md font-bold">{{ item.title }}</p>
        </div>
        <SubscribeCard />
      </div>
      <hr class="border-t-2 border-blue-500 w-6/5 mx-auto my-10" />
    </div>
  </section>
</template>

<script setup>
import SubscribeCard from "./SubscribeCard.vue";

const trending = [
  {
    title: "Aksi Bersih Sungai: Relawan Hijaukan Lingkungan",
    image: "/images/galeri/10.jpg",
  },
  {
    title: "Program Donasi Buku untuk Anak Pedalaman",
    image: "/images/galeri/11.jpg",
  },
  {
    title: "Pelatihan Digital untuk Guru Daerah Terpencil",
    image: "/images/galeri/1.jpg",
  },
];
</script>
