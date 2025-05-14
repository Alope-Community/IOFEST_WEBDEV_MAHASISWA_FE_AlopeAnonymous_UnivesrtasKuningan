<template>
  <section class="relative w-full flex items-center pb-32">
    <!-- Background -->
    <span
      class="absolute z-[-1] lg:w-[1200px] lg:h-[1200px] w-[500px] h-[500px] lg:rounded-full lg:-left-[500px] lg:bottom-[-500px] lg:rotate-[-150deg] -left-[200px] rotate-90 lg:block hidden"
      style="
        background-image: radial-gradient(
          169.4% 89.55% at 94.76% 6.29%,
          rgba(59, 130, 246, 0.2) 0%,
          rgba(59, 130, 246, 0.1) 50%,
          rgba(59, 130, 246, 0) 100%
        );
      "
    ></span>

    <div class="container md:px-16 lg:px-20">
      <h2
        class="md:text-4xl text-3xl text-center font-bold text-gray-900 mb-12"
      >
        Temukan <span class="text-primary">Donasi</span> Untuk
        <br class="sm:block hidden" />
        Memantu Sesama
      </h2>

      <!-- Scrollable Horizontal Wrapper -->
      <div class="flex gap-5 overflow-x-auto pb-2">
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="min-w-[300px] border border-primary rounded overflow-hidden shadow flex flex-col bg-white"
        >
          <img
            :src="program.image"
            :alt="program.title"
            class="w-full min-h-52 max-h-52 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">{{ program.title }}</h3>
            <Button link="/" title="Daftar Sekarang" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../../components/button.vue"; // ganti path sesuai struktur file kamu

export default {
  name: "ProgramSection",
  components: {
    Button,
  },
  data() {
    return {
      programs: [
        { title: "Biaya Sekolah Anak Yatim", image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2F111939a5-2f80-11f0-a556-defbf884c5fd_C1D6AB5E6562169.png%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75" },
        { title: "Wujudkan Anak Dhuafa Bisa Sekolah", image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fe7529a6b-6170-496b-b742-52383a7553ab.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75" },
        { title: "Yatim Dan Penghafal Quran", image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2F78bacea9-2f5b-11f0-a556-defbf884c5fd_936339C194169CC7.png%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75" },
        { title: "Infaq Alquran", image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2Faaa7ced7-3021-11f0-a556-defbf884c5fd_F010CDE0F6AAB958.png%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75" },
      ],
    };
  },
};
</script>
