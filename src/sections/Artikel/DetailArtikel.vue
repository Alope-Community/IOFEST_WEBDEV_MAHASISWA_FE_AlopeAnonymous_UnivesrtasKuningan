<template>
  <section class="container mx-auto pt-32 xl:px-20 md:px-5 px-3 grid xl:grid-cols-4 gap-10">
    <!-- Konten Kiri (Artikel) -->
    <div class="xl:col-span-3">
      <h6 class="text-blue-500 font-semibold text-sm md:text-base mb-1 md:mb-3">
        {{ article.category }}
      </h6>
      <h3 class="text-3xl font-bold mb-3">
        {{ article.title }}
      </h3>

      <p class="font-semibold">
        Dipublikasikan Oleh:
        <span class="text-blue-500 font-semibold">{{ article.user.name }}</span>
      </p>

      <div class="mt-5 flex gap-10 font-medium text-sm text-gray-500">
        <p class="flex gap-2 pb-5 items-center">
          <i class="fa-regular fa-calendar"></i>
          <span>{{ article.date }}</span>
        </p>
      </div>

      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-auto object-cover rounded mb-6"
      />

      <article class="prose max-w-none text-justify">
        {{ article.description }}
      </article>
    </div>

    <!-- Konten Kanan (Sidebar Sticky) -->
    <div class="hidden xl:block sticky top-32 self-start">
      <div class="xl:h-[250px] h-[230px] relative after:content-[''] after:bg-black/20 after:absolute after:inset-0 after:rounded">
        <img
          src="https://assets.promediateknologi.id/crop/0x182:2048x1509/750x500/webp/photo/2023/01/10/24757301.jpg"
          class="w-full xl:h-[250px] h-[230px] rounded-xl object-cover"
        />
      </div>

      <div>
        <div
          v-for="item in suggestedArticles"
          :key="item.slug"
          class="xl:my-5 my-3"
        >
          <p class="text-blue-500 font-semibold">{{ item.category }}</p>
          <router-link :to="`/article/${item.slug}`">
            <h5 class="font-semibold xl:text-xl text-base text-gray-900">
              {{ item.title }}
            </h5>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      article: {
        category: "PENDIDIKAN",
        title: "Mendorong Akses Pendidikan untuk Anak-Anak Daerah Terpencil",
        user: {
          name: "Firdan Fauzan"
        },
        date: "10 Juni 2025",
        image: "/images/galeri/7.jpg",
        description: `Di berbagai pelosok Indonesia, masih banyak anak-anak yang berjuang keras demi bisa mengenyam pendidikan. Mereka harus berjalan kaki berkilo-kilometer setiap hari, melewati sungai, bukit, dan jalan berlumpur hanya untuk sampai ke sekolah yang sederhana, bahkan terkadang tanpa dinding atau atap yang layak. Buku pelajaran adalah barang mewah, dan alat tulis seringkali harus digunakan bergantian atau seadanya.

Pendidikan adalah hak setiap anak, namun kenyataannya belum semua dari mereka bisa merasakannya secara adil. Ketimpangan ini menjadi tantangan besar bagi masa depan bangsa. Namun, kita semua bisa ikut mengambil bagian dalam perubahan ini.

Melalui program ini, kami mengajak Anda untuk bersama-sama membentangkan harapan. Donasi buku, alat tulis, atau dukungan dana yang Anda berikan akan menjadi jembatan bagi anak-anak di daerah terpencil untuk mendapatkan pendidikan yang layak. Bukan hanya sekadar membantu, tetapi juga memberi mereka kesempatan untuk bermimpi lebih besar dan meraih masa depan yang lebih cerah.

Satu langkah kecil dari Anda bisa menjadi lompatan besar bagi kehidupan mereka. Mari, kita wujudkan pendidikan yang merata dan bermakna untuk semua anak Indonesia, tanpa terkecuali.

`,
      },
      suggestedArticles: [
        {
          slug: "bantu-anak-papua",
          category: "DONASI",
          title: "Dukung Akses Belajar untuk Anak-Anak Papua"
        },
        {
          slug: "donasi-alat-tulis",
          category: "PENDIDIKAN",
          title: "Penggalangan Donasi Alat Tulis dan Buku untuk Sekolah Pelosok"
        },
        {
          slug: "literasi-digital",
          category: "TEKNOLOGI",
          title: "Program Literasi Digital untuk Anak-Anak Daerah 3T"
        }
      ]
    };
  }
};
</script>

