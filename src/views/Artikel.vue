<template>
  <HeroSection />
  <TrendingSection />
  <ArticleList />
</template>

<script setup>
import HeroSection from "../sections/Artikel/HeroArtikel.vue";
import TrendingSection from "../sections/Artikel/Trending.vue";
import ArticleList from "../sections/Artikel/Article.vue";
</script>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
