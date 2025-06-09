<template>
  <div
    class="grid lg:grid-cols-3 gap-60 container mx-auto px-4 md:px-10 lg:px-20 pb-20"
  >
    <div class="lg:col-span-2 space-y-10">
      <router-link
        v-for="(article, index) in articles"
        :key="index"
        :to="article.link"
        class="flex flex-col md:flex-row gap-6 border-b pb-6 p-2"
      >
        <img
          :src="article.image"
          alt="Program"
          class="w-full md:w-[350px] h-[250px] object-cover rounded-md"
        />
        <div>
          <p class="text-sm font-bold uppercase text-blue-500 mb-1">
            {{ article.category }}
          </p>
          <h3 class="text-XL font-bold text-gray-800">
            {{ article.title }}
          </h3>
          <p class="text-sm text-gray-600 mt-2">{{ article.description }}</p>
          <div class="flex items-center text-gray-500 text-sm mt-3 space-x-4">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.05 3.636a9 9 0 111.414 1.414L5.05 3.636z" />
                <path d="M6.343 5.05a7 7 0 109.9 9.9 7 7 0 00-9.9-9.9z" />
              </svg>
              {{ article.location }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6 2a1 1 0 000 2h1v2a1 1 0 102 0V4h2v2a1 1 0 102 0V4h1a1 1 0 100-2H6zM4 7a1 1 0 000 2h12a1 1 0 100-2H4zm-1 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 4a1 1 0 100 2h10a1 1 0 100-2H5z"
                />
              </svg>
              {{ article.date }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="xl:block hidden w-[270px]">
      <video
        class="w-full h-auto rounded-md shadow-lg transition-transform duration-500 hover:scale-100"
        autoplay
        muted
        loop
      >
        <source src="/images/Banner.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    category: "RELAWAN",
    title: "Baduy Mengajar!",
    description:
      "Bergabunglah dalam keseruan kegiatan baduy mengajar.",
    location: "Karawang, Jawa Barat",
    date: "25 Mei 2025",
    image: "/images/relawan/1.jpg",
    link: "/program-relawan/aksi-bersih-pantai",
  },
  {
  category: "DONASI",
  title: "Bantu Pendidikan Anak-Anak di Daerah Terpencil",
  description:
    "Mari dukung adik-adik di pelosok nusantara mendapatkan pendidikan yang layak melalui donasi buku dan perlengkapan sekolah.",
  location: "Wamena, Papua",
  date: "1 Juni 2025",
  image: "/images/galeri/2.jpg",
  link: "/program-donasi/pendidikan-anak-pelosok",
},
{
  category: "DONASI",
  title: "Dukung Akses Belajar untuk Anak-Anak Papua",
  description:
    "Kontribusimu sangat berarti untuk menghadirkan buku, alat tulis, atau bantuan dana demi pendidikan anak-anak di wilayah terpencil.",
  location: "Wamena, Papua",
  date: "20 Juni 2025",
  image: "/images/galeri/5.jpg",
  link: "/program-donasi/pendidikan-anak-pelosok",
},

];
</script>
