<template>
  <section class="w-full py-20 px-4 md:px-16">
    <div class="container mx-auto flex flex-col md:flex-row gap-12 items-start">
      <!-- Left Text -->
      <div class="md:w-1/2">
        <h2 class="text-4xl font-bold mb-6">Pertanyaan Umum</h2>
        <p class="text-gray-700 text-lg">
          Temukan jawaban atas pertanyaan yang sering diajukan mengenai Pijar
          Nusantara, relawan, donasi, dan banyak lagi.
        </p>
      </div>

      <!-- Right Accordion -->
      <div class="md:w-1/2 w-full space-y-4">
        <div
          v-for="(item, index) in faqList"
          :key="index"
          class="border rounded-lg overflow-hidden"
        >
          <button
            @click="toggle(index)"
            class="w-full text-left px-6 py-4 flex justify-between items-center font-medium bg-white hover:bg-gray-100 transition duration-300"
          >
            {{ item.question }}
            <svg
              :class="{ 'rotate-180': activeIndex === index }"
              class="w-5 h-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-show="activeIndex === index"
            class="px-6 py-4 bg-white text-gray-600 border-t"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // FAQ data
      activeIndex: null,
      faqList: [
        {
          question: "Apa itu Pijar Nusantara?",
          answer:
            "Pijar Nusantara adalah platform yang menghubungkan relawan pendidikan dengan donatur untuk mendukung kesejahteraan Indonesia.",
        },
        {
          question: "Bagaimana cara menjadi relawan?",
          answer:
            "Kamu bisa mendaftar melalui halaman 'Daftar Relawan' setelah login ke akun kamu.",
        },
        {
          question: "Apakah saya mendapatkan sertifikat?",
          answer:
            "Ya, relawan dan donatur yang berpartisipasi akan mendapatkan sertifikat sebagai bentuk apresiasi.",
        },
      ],
    };
  },
  methods: {
    // FAQ toggle method
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>
