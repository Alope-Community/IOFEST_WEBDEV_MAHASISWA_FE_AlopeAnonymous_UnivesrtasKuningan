<template>
  <div class="bg-white p-10 pt-24 sm:p-8 md:p-20 md:pt-24">
    <div class="max-w-7xl mx-auto">
      <!-- Judul Forum -->
      <h1 class="text-2xl font-bold mb-6">Forum Diskusi</h1>

      <!-- Daftar Diskusi -->
      <div class="space-y-6">
        <!-- Diskusi 1 -->
        <div class="border border-gray-200 rounded-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-semibold">
                Diskusi tentang Teknologi Ramah Lingkungan
              </h2>
              <p class="text-sm text-gray-500">
                Diposting oleh <span class="font-medium">User A</span> pada 10
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
              v-for="(comment, index) in discussions[0].comments"
              :key="index"
              class="border border-gray-200 p-4 rounded-md"
            >
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 rounded-full bg-gray-300"></div>
                <p class="ml-3 text-sm font-medium">{{ comment.user }}</p>
              </div>
              <p class="text-gray-600">{{ comment.text }}</p>
            </div>
          </div>

          <!-- Menulis Komentar untuk Diskusi 1 -->
          <div class="mt-4">
            <textarea
              v-model="newComment[1]"
              class="w-full border border-gray-300 p-3 rounded-md"
              rows="4"
              placeholder="Tulis komentar..."
            ></textarea>
            <div class="mt-4 flex justify-end">
              <button
                @click="addComment(1)"
                class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Kirim Komentar
              </button>
            </div>
          </div>
        </div>

        <!-- Diskusi 2 -->
        <div class="border border-gray-200 rounded-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-semibold">
                Diskusi tentang Pendidikan Gratis
              </h2>
              <p class="text-sm text-gray-500">
                Diposting oleh <span class="font-medium">User D</span> pada 9
                Mei 2025
              </p>
            </div>
            <button
              class="text-blue-500 hover:text-blue-700 text-sm"
              @click="toggleComments(2)"
            >
              <i class="fas fa-comment-alt"></i> Lihat Komentar
            </button>
          </div>

          <!-- Komentar -->
          <div v-if="showComments[2]" class="space-y-4 mt-4">
            <div
              v-for="(comment, index) in discussions[1].comments"
              :key="index"
              class="border border-gray-200 p-4 rounded-md"
            >
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 rounded-full bg-gray-300"></div>
                <p class="ml-3 text-sm font-medium">{{ comment.user }}</p>
              </div>
              <p class="text-gray-600">{{ comment.text }}</p>
            </div>
          </div>

          <!-- Menulis Komentar untuk Diskusi 2 -->
          <div class="mt-4">
            <textarea
              v-model="newComment[2]"
              class="w-full border border-gray-300 p-3 rounded-md"
              rows="4"
              placeholder="Tulis komentar..."
            ></textarea>
            <div class="mt-4 flex justify-end">
              <button
                @click="addComment(2)"
                class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Kirim Komentar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Menyimpan status komentar apakah terbuka atau tidak per diskusi
      showComments: { 1: false, 2: false },

      // Menyimpan data diskusi dan komentar masing-masing
      discussions: [
        {
          title: "Diskusi tentang Teknologi Ramah Lingkungan",
          comments: [
            {
              user: "User B",
              text: "Saya setuju, teknologi ramah lingkungan sangat penting untuk masa depan kita.",
            },
            {
              user: "User C",
              text: "Teknologi ramah lingkungan perlu didorong lebih banyak oleh pemerintah.",
            },
          ],
        },
        {
          title: "Diskusi tentang Pendidikan Gratis",
          comments: [
            {
              user: "User E",
              text: "Pendidikan gratis adalah hak setiap anak, kita perlu terus berjuang untuk itu.",
            },
          ],
        },
      ],

      // Menyimpan komentar baru untuk setiap diskusi
      newComment: { 1: "", 2: "" },
    };
  },
  methods: {
    // Fungsi untuk men-toggle komentar pada setiap diskusi
    toggleComments(diskusiId) {
      this.showComments[diskusiId] = !this.showComments[diskusiId];
    },

    // Fungsi untuk menambahkan komentar baru pada diskusi
    addComment(diskusiId) {
      if (this.newComment[diskusiId].trim()) {
        // Menambahkan komentar baru ke dalam array komentar diskusi yang sesuai
        this.discussions[diskusiId - 1].comments.push({
          user: "User F", // Ganti dengan user yang sebenarnya
          text: this.newComment[diskusiId],
        });

        // Mengosongkan kolom komentar setelah menambahkan
        this.newComment[diskusiId] = "";
      }
    },
  },
};
</script>

<style scoped>
/* CSS untuk styling tambahan jika diperlukan */
</style>
