<template>
  <HeroSection />

  <!-- Text Section -->
  <section class="relative w-full pt-20 md:pt-32 flex items-center pb-32">
    <!-- Container agar konten tetap rapi -->
    <div class="container relative md:px-16 lg:px-20 flex w-full z-10">
      <img
        src=""
        alt=""
        class="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-50 pointer-events-none"
      />
      <div class="flex-1 py-20">
        <h1 class="text-5xl font-bold">Tentang Kami</h1>
        <p class="text-justify pt-8">
          Pijar Nusantara adalah platform yang menghubungkan relawan pendidikan
          dan donatur untuk bersama mendukung kesejahteraan Indonesia melalui
          aksi nyata dan kolaborasi berkelanjutan.
        </p>
        <div>
          <RouterLink
            to="/login"
            class="inline-flex w-auto mt-10 items-center justify-center border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
          >
            Lihat Lainnya
          </RouterLink>
        </div>
      </div>
      <div class="flex-1 px-5"></div>
    </div>
  </section>

  <!--  -->
  <section class="relative w-full flex items-center pb-32">
    <span
      class="absolute z-[-1] lg:w-[1200px] lg:h-[1200px] w-[500px] h-[500px] lg:rounded-full lg:-left-[500px] lg:bottom-[-500px] lg:rotate-[-150deg] -left-[200px] rotate-90 lg:block hidden"
      style="
        background-image: radial-gradient(
          169.4% 89.55% at 94.76% 6.29%,
          rgba(245, 181, 92, 0.4) 0%,
          rgba(245, 181, 92, 0.3) 50%,
          rgba(245, 181, 92, 0) 100%
        );
      "
    ></span>
    <div class="container md:px-16 lg:px-20">
      <h2
        class="md:text-4xl text-3xl md:text-left font-bold text-gray-900 mb-12"
      >
        Temukan <span class="text-primary">Program</span> Yang
        <br class="sm:block hidden" />
        Tepat Untukmu
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-5 rounded-[15px]"
      >
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow flex flex-col"
        >
          <img
            src="/images/page/program.png"
            alt="Program Relawan"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">Jakarta 123</h3>
            <div>
              <RouterLink
                to="/login"
                class="inline-flex w-auto border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
              >
                Daftar Sekarang
              </RouterLink>
            </div>
          </div>
        </div>
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow flex flex-col"
        >
          <img
            src="/images/page/program.png"
            alt="Program Relawan"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">Jakarta 123</h3>
            <div>
              <RouterLink
                to="/login"
                class="inline-flex w-auto border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
              >
                Daftar Sekarang
              </RouterLink>
            </div>
          </div>
        </div>
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow flex flex-col"
        >
          <img
            src="/images/page/program.png"
            alt="Program Relawan"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">Jakarta 123</h3>
            <div>
              <RouterLink
                to="/login"
                class="inline-flex w-auto border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
              >
                Daftar Sekarang
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- b -->
  <section class="relative w-full flex items-center pb-32">
    <div class="container md:px-16 lg:px-20">
      <h2
        class="md:text-4xl text-3xl md:text-left font-bold text-gray-900 mb-12"
      >
        Mari Menolong Untuk
        <br class="sm:block hidden" />
        Pendidikan Kita
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-5 rounded-[15px]"
      >
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow flex flex-col"
        >
          <img
            src="/images/page/program.png"
            alt="Program Relawan"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">Jakarta 123</h3>
            <div>
              <RouterLink
                to="/login"
                class="inline-flex w-auto border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
              >
                Daftar Sekarang
              </RouterLink>
            </div>
          </div>
        </div>
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow flex flex-col"
        >
          <img
            src="/images/page/program.png"
            alt="Program Relawan"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">Jakarta 123</h3>
            <div>
              <RouterLink
                to="/login"
                class="inline-flex w-auto border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
              >
                Daftar Sekarang
              </RouterLink>
            </div>
          </div>
        </div>
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow flex flex-col"
        >
          <img
            src="/images/page/program.png"
            alt="Program Relawan"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">Jakarta 123</h3>
            <div>
              <RouterLink
                to="/login"
                class="inline-flex w-auto border border-amber-500 text-amber-500 font-medium py-2 px-4 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
              >
                Daftar Sekarang
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section class="container md:px-16 lg:px-20">
    <div class="bg-amber-500/40 items-center text-center py-10 rounded-sm">
      <p class="text-xl md:text-3xl xl:text-4xl italic font-semibold">
        Pendidikan adalah senjata paling ampuh <br class="sm:block hidden" />
        yang dapat Anda gunakan untuk <br class="sm:block hidden" />
        mengubah
        <span class="relative">
          dunia
          <i
            class="fas fa-quote-right text-2xl absolute -right-6 top-1 text-white"
          ></i> </span
        >.
      </p>
      <p class="text-lg mt-8 font-sekunder">
        Ki Hajar Dewantara <br />
        <span class="text-sm font-sekunder">Bapak Pendidikan Indonesia</span>
      </p>
    </div>
  </section>
  <section
    class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2 relative mt-20"
  >
    <div class="row-span-2 md:order-1 md:block hidden">
      <img
        src="/images/page/program.png"
        alt="gallery11"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="100"
      />
    </div>
    <div class="md:order-2 md:block hidden">
      <img
        src="/images/page/program.png"
        alt="gallery1"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="200"
      />
    </div>
    <div class="md:order-3 md:block hidden">
      <img
        src="/images/page/program.png"
        alt="gallery2"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="300"
      />
    </div>
    <div class="md:order-4 order-1">
      <img
        src="/images/page/program.png"
        alt="gallery3"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="400"
      />
    </div>
    <div class="lg:order-5 md:order-7 order-2">
      <img
        src="/images/page/program.png"
        alt="gallery4"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-down"
        data-aos-delay="500"
      />
    </div>
    <div class="lg:order-6 md:order-8 md:block hidden">
      <img
        src="/images/page/program.png"
        alt="gallery5"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-right"
        data-aos-delay="800"
      />
    </div>
    <div
      class="border-2 border-red-500 border-dashed p-5 flex flex-col justify-center lg:order-7 md:order-5 order-3 lg:col-span-1 md:col-span-2 aos-init aos-animate"
      data-aos-once="true"
      data-aos="zoom-in"
      data-aos-delay="800"
    >
      <h2 class="font-semibold text-xl text-center dark:text-gray-200">
        PONDASI NEGERI ADALAH PENDIDIKAN
      </h2>
      <p class="text-sm mt-3 text-gray-700 dark:text-gray-300 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, veritatis
        ex temporibus eius magnam molestias!
      </p>
    </div>
    <div class="lg:order-8 order-5 lg:block md:hidden">
      <img
        src="/images/page/program.png"
        alt="gallery6"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-right"
        data-aos-delay="700"
      />
    </div>
    <div class="row-span-2 lg:order-9 md:order-6 order-4">
      <img
        src="/images/page/program.png"
        alt="gallery12"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-right"
        data-aos-delay="600"
      />
    </div>
    <div class="lg:order-10 md:block hidden order-9">
      <img
        src="/images/page/program.png"
        alt="gallery7"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="300"
      />
    </div>
    <div class="lg:order-11 lg:block hidden">
      <img
        src="/images/page/program.png"
        alt="gallery8"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="400"
      />
    </div>
    <div class="lg:order-12 lg:block hidden">
      <img
        src="/images/page/program.png"
        alt="gallery9"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="500"
      />
    </div>
    <div class="lg:order-last lg:block hidden">
      <img
        src="/images/page/program.png"
        alt="gallery10"
        class="w-full h-full object-cover aos-init aos-animate"
        data-aos-once="true"
        data-aos="flip-left"
        data-aos-delay="600"
      />
    </div>
  </section>
  <!-- faq -->
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
import HeroSection from "./../sections/Landing/Hero.vue";
export default {
  components: {
    HeroSection,
  },
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

<style scoped>
.loading-strip {
  transition: width 2s linear;
}
</style>
