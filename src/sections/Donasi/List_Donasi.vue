<template>
  <section class="relative">
    <!-- Background Radial Gradient -->
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

    <div class="relative h-[350px] rounded-md overflow-hidden">
      <img
        src="/images/page/a.jpg"
        alt="Header Background"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      <div
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"
      ></div>

      <!-- Text Content -->
      <div
        class="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 class="text-white text-4xl font-bold leading-snug mb-6">
          Temukan Lebih Banyak <br />
          Program Donasi
        </h1>

        <!-- Search Input -->
        <div class="relative w-full max-w-md">
          <input
            type="text"
            v-model="searchQuery"
            @input="searchVolunteers"
            placeholder="Cari program donasi..."
            class="w-full border border-white text-white bg-transparent placeholder-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
          />
          <i class="fas fa-search absolute right-4 top-3 text-white"></i>
        </div>
      </div>
    </div>

    <!-- Konten Section -->
    <div class="my-16 mx-5 sm:mx-10 lg:mx-14">
      <div class="container mx-auto px-4 mb-5 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Program Cards Section -->
          <div class="md:col-span-3 grid grid-cols-1 mb-5">
            <div
              class="bg-white border border-primary gap-10 shadow-md rounded-[15px] md:flex overflow-hidden items-center mb-5"
              v-for="(volunteer, index) in filteredVolunteers"
              :key="index"
            >
              <img
                :src="volunteer.image_url"
                alt="List_Relawan"
                class="md:w-1/2 md:max-w-88 md:min-w-44 w-full max-h-52 min-h-52 object-cover"
              />
              <div class="md:w-2/3 p-4">
                <h2 class="lg:text-2xl text-2xl font-bold text-gray-900 mb-1">
                  {{ volunteer.title }}
                </h2>
                <p class="text-sm text-gray-500 mb-1">
                  {{ volunteer.date }}
                </p>
                <p class="text-sm text-gray-500 mb-1">
                  {{ volunteer.participants }} partisipan
                </p>
                <p class="text-md text-gray-600 mb-7">
                  {{ truncateDescription(volunteer.description) }}
                </p>
                <RouterLink
                  :to="'/detail_program/' + volunteer.id"
                  class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  Daftar Sekarang
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Sidebar Artikel Terbaru -->
          <div class="md:col-span-1 space-y-5">
            <!-- Artikel Terbaru -->

            <h3 class="text-lg font-semibold text-gray-800">Artikel Terbaru</h3>
            <div
              v-for="(article, index) in latestArticles"
              :key="index"
              class="border-l-4 border-blue-500 pl-3"
            >
              <RouterLink
                :to="'/artikel/' + article.id"
                class="block hover:bg-blue-50 p-2 rounded transition"
              >
                <p class="text-xs text-blue-500">
                  {{ article.category }} • {{ article.date }}
                </p>
                <p class="text-sm font-medium text-gray-800">
                  {{ article.title }}
                </p>
              </RouterLink>
            </div>

            <div class="space-y-5 relative sticky top-20">
              <h3 class="text-lg font-semibold text-gray-800">Sorotan</h3>
              <div
                v-for="(card, index) in imageCards"
                :key="'sidecard-' + index"
                class="bg-white border border-blue-500 shadow-md rounded-sm overflow-hidden"
              >
                <RouterLink :to="'/sorotan/' + card.id" class="">
                  <img
                    :src="card.image"
                    alt="Card Gambar"
                    class="w-full h-36 object-cover"
                  />
                  <div class="p-3">
                    <p class="text-sm font-semibold text-blue-600 mb-1">
                      {{ card.title }} • {{ card.date }}
                    </p>
                    <h6 class="text-sm text-gray-600">
                      {{ card.description }}
                    </h6>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
  data() {
    return {
      searchQuery: "",
      volunteers: [
        {
          id: 1,
          title: "Jakarta 123",
          date: "12 Mei 2025",
          participants: 50,
          description: "Program relawan untuk pendidikan anak-anak di Jakarta.",
          image_url: "/images/page/program.png",
        },
        {
          id: 2,
          title: "Bandung Cerdas",
          date: "18 Mei 2025",
          participants: 35,
          description:
            "Meningkatkan literasi digital bagi generasi muda Bandung.",
          image_url: "/images/page/program.png",
        },
        {
          id: 3,
          title: "Surabaya Peduli",
          date: "20 Mei 2025",
          participants: 42,
          description: "Membantu masyarakat menjaga kesehatan lingkungan.",
          image_url: "/images/page/program.png",
        },
        {
          id: 4,
          title: "Makassar Mengajar",
          date: "25 Mei 2025",
          participants: 60,
          description: "Relawan mengajar bahasa Inggris di daerah terpencil.",
          image_url: "/images/page/program.png",
        },
        {
          id: 5,
          title: "Medan Relawan",
          date: "30 Mei 2025",
          participants: 28,
          description:
            "Bakti sosial membantu masyarakat kurang mampu di Medan.",
          image_url: "/images/page/program.png",
        },
        {
          id: 6,
          title: "Kuningan Relawan",
          date: "13 Mei 2025",
          participants: 28,
          description:
            "Bakti sosial membantu masyarakat kuningan.",
          image_url: "/images/page/program.png",
        },
      ],
      latestArticles: [
        {
          title: "text",
          category: "text",
          date: "27 April Pukul 19:00",
        },
        {
          title: "text",
          category: "text",
          date: "27 April Pukul 19:00",
        },
        {
          title: "text",
          category: "text",
          date: "27 April Pukul 19:00",
        },
        {
          title: "text",
          category: "text",
          date: "27 April Pukul 19:00",
        },
        {
          title: "text",
          category: "text",
          date: "27 April Pukul 19:00",
        },
      ],
      imageCards: [
        {
          image: "/images/page/program.png",
          title: "Misi Kemanusiaan",
          date: "27 April Pukul 19:00",
          description:
            "Ikuti kegiatan sosial untuk membantu masyarakat terdampak bencana.",
        },
        {
          image: "/images/page/program.png",
          title: "Relawan Pen..",
          date: "27 April Pukul 19:00",
          description:
            "Dukung anak-anak di pelosok negeri untuk mendapatkan pendidikan yang layak.",
        },
      ],
    };
  },
  computed: {
    filteredVolunteers() {
      if (!this.searchQuery.trim()) return this.volunteers;
      const q = this.searchQuery.toLowerCase();
      return this.volunteers.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q)
      );
    },
  },
  methods: {
    truncateDescription(description) {
      const words = description.split(" ");
      const maxWords = window.innerWidth <= 768 ? 5 : 10;
      return words.length > maxWords
        ? words.slice(0, maxWords).join(" ") + "..."
        : description;
    },
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
