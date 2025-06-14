<template>
  <DaftarSection />
</template>

<script>
import DaftarSection from "../sections/Relawan/Daftar.vue";

export default {
  components: {
    DaftarSection,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
