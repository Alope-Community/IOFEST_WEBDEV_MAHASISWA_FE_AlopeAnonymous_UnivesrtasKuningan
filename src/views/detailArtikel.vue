<template>
  <DetailArtikel />
</template>

<script>
import DetailArtikel from "../sections/Artikel/Detail.vue";

export default {
  components: {
    DetailArtikel,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
