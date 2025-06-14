<template>
  <HeroSection />
  <AboutSection />
  <RelawanSection />
  <DonasiSection />
  <QuotesSection />
  <FaqSection />
  <GaleriSection />
</template>

<script>
import HeroSection from "../sections/Landing/HeroLanding.vue";
import AboutSection from "../sections/Landing/AboutLanding.vue";
import RelawanSection from "../sections/Landing/Relawan.vue";
import DonasiSection from "../sections/Landing/Donasi.vue";
import QuotesSection from "../sections/Landing/Quotes.vue";
import FaqSection from "../sections/Landing/Faq.vue";
import GaleriSection from "../sections/Landing/Galeri.vue";
export default {
  components: {
    HeroSection,
    AboutSection,
    RelawanSection,
    DonasiSection,
    QuotesSection,
    FaqSection,
    GaleriSection,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.loading-strip {
  transition: width 2s linear;
}
</style>
