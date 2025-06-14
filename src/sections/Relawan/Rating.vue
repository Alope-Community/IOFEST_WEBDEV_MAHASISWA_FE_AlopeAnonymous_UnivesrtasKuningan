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
          v-for="(item, index) in testimoni"
          :key="index"
          class="border border-gray-300 rounded-lg p-5 shadow-md flex items-start gap-4 bg-white"
        >
          <div>
            <h3 class="font-semibold text-lg text-gray-800">{{ item.user_name }}</h3>
            <p class="text-gray-600 text-sm mb-2">"{{ item.pesan }}"</p>
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
        :disabled="(limit + 3) >= testimoniLength"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    
  </section>
</template>

<script>
export default {
  props: ["testimoni", "currentPage", "limit", "testimoniLength"],
  data() {
    return {
      index: 1
    };
  },
  methods: {
    nextPage() {
        this.$emit("nextPage", this.currentPage +3, this.limit + 3);
    },
    prevPage() {
        this.$emit("nextPage", this.currentPage -3, this.limit - 3);
    },
  },
  mounted() {
    this.testimonials = this.testimoni
  }
};
</script>