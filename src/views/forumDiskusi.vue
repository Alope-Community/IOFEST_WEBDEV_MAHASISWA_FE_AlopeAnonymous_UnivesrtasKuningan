<template>
  <div class="bg-white p-10 pt-24 sm:p-8 md:p-20 md:pt-24">
    <div class="max-w-7xl mx-auto">
      <!-- Judul Forum -->
      <h1 class="text-2xl font-bold mb-6">Forum Diskusi</h1>

      <!-- Daftar Diskusi -->
      <div v-for="forum in forums" class="space-y-6" :key="forum.id">
        <!-- Diskusi 1 -->
        <div class="border border-gray-200 rounded-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-semibold">Diskusi {{ forum.judul }}</h2>
              <p class="text-sm text-gray-500">
                Diposting oleh
                <span class="font-medium">{{ forum.user.name }}</span> pada 10
                Mei 2025
              </p>
            </div>
            <button
              class="text-blue-500 hover:text-blue-700 text-sm"
              @click="toggleComments(1)"
            >
              <i class="fas fa-comment-alt"></i> Lihat Komentar
            </button>
          </div>

          <!-- Komentar -->
          <div v-if="showComments[1]" class="space-y-4 mt-4">
            <div
              v-for="(comment, index) in forum.komentars"
              :key="index"
              class="border border-gray-200 p-4 rounded-md"
            >
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 rounded-full bg-gray-300"></div>
                <p class="ml-3 text-sm font-medium">{{ comment.user.name }}</p>
              </div>
              <p class="text-gray-600">{{ comment.komentar }}</p>
            </div>
          </div>

          <!-- Menulis Komentar untuk Diskusi 1 -->
          <form
            action=""
            method="POST"
            @submit.prevent="postKomentar(forum.id)"
          >
            <div class="mt-4">
              <textarea
                v-model="formData.komentar"
                class="w-full border border-gray-300 p-3 rounded-md"
                rows="4"
                placeholder="Tulis komentar..."
              ></textarea>
              <div class="mt-4 flex justify-end">
                <button
                  type="submit"
                  class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Kirim Komentar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showComments: { 1: false, 2: false },
      forums: [],
      formData: {
        komentar: "",
      },
    };
  },
  methods: {
    toggleComments(diskusiId) {
      this.showComments[diskusiId] = !this.showComments[diskusiId];
    },

    async fetchForum() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const Response = await axios.get(`${baseUrl}/api/forum`);
        console.log(Response);

        this.forums = Response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },

    async postKomentar(idForum) {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${baseUrl}/api/forum/${idForum}/komentar`,
          this.formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        window.location.reload();
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.fetchForum();
  },
};
</script>
