<template>
  <section class="relative w-full h-screen bg-cover bg-center overflow-hidden">
    <div class="relative w-full h-full">
      <!-- Slides -->
      <div class="absolute inset-0 w-full h-full">
        <img
          v-for="(slide, index) in slides"  
          :key="index"
          :src="slide"
          :alt="'Slide ' + (index + 1)"
          :class="[
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000',
            currentIndex === index ? 'opacity-100' : 'opacity-0',
          ]"
        />
      </div>

      <div class="absolute inset-0 bg-black bg-opacity-60"></div>

      <!-- Content -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 class="md:text-5xl text-3xl text-gray-50 font-medium">
          Dari Kita, Untuk Nusantara
        </h1>
        <p class="w-4/5 md:w-1/2 pt-4 text-gray-200">
          Pijar Nusantara hadir sebagai jembatan bagi para relawan dan komunitas
          untuk bersama-sama menerangi masa depan pendidikan Indonesia. Mari
          bergandeng tangan, berbagi peran, dan membawa perubahan nyata dari
          pelosok ke pusat negeri.
        </p>
      </div>

      <!-- Loading Strip -->
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
        <div
          class="loading-strip w-1/2 h-full bg-blue-500 transition-all duration-5000"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Slider data
      slides: [
        "/images/page/a.jpg",
        "/images/page/b.jpg",
        "/images/page/c.jpg",
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  methods: {
    // Slider methods
    showSlide(index) {
      this.currentIndex = index;
      if (this.$refs.loadingStrip) {
        this.$refs.loadingStrip.style.width = "0%";
        setTimeout(() => {
          this.$refs.loadingStrip.style.width = "100%";
        }, 50);
      }
    },
    nextSlide() {
      const nextIndex = (this.currentIndex + 1) % this.slides.length;
      this.showSlide(nextIndex);
    },
  },
  mounted() {
    this.showSlide(0);
    this.intervalId = setInterval(this.nextSlide, 5000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.loading-strip {
  animation: loader 5.1s infinite;
}
@keyframes loader {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
