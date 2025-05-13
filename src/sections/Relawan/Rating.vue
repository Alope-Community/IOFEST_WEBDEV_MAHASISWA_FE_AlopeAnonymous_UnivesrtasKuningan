<template>
  <section class="mx-5 sm:mx-10 lg:mx-24 my-16 font-primary relative">
    <h2 class="text-3xl font-bold text-blue-500 mb-10 text-center">Testimoni Relawan</h2>

    <div class="relative flex items-center">
      <!-- Tombol Kiri -->
      <button
        class="absolute left-[-20px] md:left-[-40px] text-blue-500 text-2xl hover:text-blue-700 transition"
        @click="prevPage"
        :disabled="currentPage === 0"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <!-- Card Testimoni -->
      <div class="grid md:grid-cols-3 gap-6 w-full">
        <div
          v-for="(item, index) in testimonials.slice(currentPage * perPage, (currentPage + 1) * perPage)"
          :key="index"
          class="border border-gray-300 rounded-lg p-5 shadow-md flex items-start gap-4 bg-white"
        >
          <img
            :src="item.image"
            alt="Foto Relawan"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 class="font-semibold text-lg text-gray-800">{{ item.name }}</h3>
            <p class="text-gray-600 text-sm mb-2">"{{ item.comment }}"</p>
            <div class="flex items-center gap-1 text-yellow-400 mb-1">
              <i
                v-for="i in 5"
                :key="i"
                :class="i <= item.rating ? 'fas fa-star' : 'far fa-star'"
              ></i>
            </div>
            <p class="text-xs text-gray-500">{{ item.date }}</p>
          </div>
        </div>
      </div>

      <!-- Tombol Kanan -->
      <button
        class="absolute right-[-20px] md:right-[-40px] text-blue-500 text-2xl hover:text-blue-700 transition"
        @click="nextPage"
        :disabled="(currentPage + 1) * perPage >= testimonials.length"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Dewi Lestari",
          comment: "Kegiatannya sangat menginspirasi dan menyenangkan!",
          rating: 5,
          date: "12 Mei 2025",
          image: "/images/user1.jpg",
        },
        {
          name: "Ahmad Fauzi",
          comment: "Pengalaman yang luar biasa dan penuh makna.",
          rating: 4,
          date: "08 Mei 2025",
          image: "/images/user2.jpg",
        },
        {
          name: "Siti Aisyah",
          comment: "Bisa bertemu banyak orang hebat, saya sangat bersyukur!",
          rating: 5,
          date: "01 Mei 2025",
          image: "/images/user3.jpg",
        },
        {
          name: "Rudi Hartono",
          comment: "Kegiatan ini memberikan banyak wawasan baru.",
          rating: 4,
          date: "28 April 2025",
          image: "/images/user4.jpg",
        },
        {
          name: "Nina Agustina",
          comment: "Saya jadi lebih percaya diri dan aktif.",
          rating: 5,
          date: "22 April 2025",
          image: "/images/user5.jpg",
        },
      ],
      currentPage: 0,
      perPage: 3,
    };
  },
  methods: {
    nextPage() {
      if ((this.currentPage + 1) * this.perPage < this.testimonials.length) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
  },
};
</script>
