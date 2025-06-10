<template>
  <div class="bg-white p-10 pt-24 sm:p-8 md:p-20 md:pt-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Kartu Profil -->
      <div>
        <div
          class="col-span-1 border border-blue-300 bg-white p-4 rounded-md shadow-sm"
        >
          <h2 class="font-bold text-lg mb-4">PROFILE</h2>
          <div class="flex items-center mb-4">
            <div
              class="w-16 h-16 border border-primary bg-white rounded-full flex items-center justify-center"
            >
              <i class="fas fa-user text-primary text-2xl"></i>
            </div>
            <div class="ml-4">
              <p class="font-medium">{{ profile.name }}</p>
              <p class="text-sm text-gray-600">{{ profile.email }}</p>
            </div>
          </div>

          <p class="text-sm font-bold text-gray-900">
            <i class="fa-regular fa-calendar-days"></i> Tanggal Bergabung : {{ profile.created_at }}
          </p>
          <p class="text-sm font-bold text-gray-900 mt-2">
            <i class="fas fa-trophy text-yellow-500 mr-1"></i> Poin: {{ profile.point }}
          </p>
          <!-- Poin added here -->
        </div>
      </div>

      <!-- Riwayat Program dan Donasi dengan Tab -->
      <div class="col-span-1 md:col-span-2">
        <!-- Tab Navigasi -->
        <div class="mb-4">
          <ul class="flex">
            <li class="mr-6">
              <button
                @click="activeTab = 'relawan'"
                :class="{
                  'text-blue-500 border-b-2 border-blue-500':
                    activeTab === 'relawan',
                }"
                class="text-sm font-semibold py-2"
              >
                Riwayat Relawan
              </button>
            </li>
            <li>
              <button
                @click="activeTab = 'donasi'"
                :class="{
                  'text-blue-500 border-b-2 border-blue-500':
                    activeTab === 'donasi',
                }"
                class="text-sm font-semibold py-2"
              >
                Riwayat Donasi
              </button>
            </li>
          </ul>
        </div>

        <!-- Konten Tab -->
        <div v-if="activeTab === 'relawan'">
          <div
            class="mb-10 border border-blue-300 bg-white p-4 rounded-md shadow-sm"
          >
            <h2 class="font-bold text-lg mb-4">Riwayat Relawan</h2>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-gray-200">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      No
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Program di Ikuti
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Tanggal Bergabung
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Tanggal Mulai
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Tanggal Selesai
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Sertifikat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                  v-for="(relawan, index) in riwayatRelawan"
                  class="text-center">
                  <td>{{ index+1 }}</td>
                    <td>{{ relawan.judul }}</td>
                    <td>{{ relawan.tanggal_bergabung }}</td>
                    <td>{{ relawan.tanggal_mulai }}</td>
                    <td>{{ relawan.tanggal_selesai }}</td>
                    <td>
                      <a :href="baseUrl + relawan.sertifikat_url" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium">
                        <i class="fas fa-certificate mr-1"></i>
                        Lihat Sertifikat
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'donasi'">
          <div class="border border-blue-300 bg-white p-4 rounded-md shadow-sm">
            <h2 class="font-bold text-lg mb-4">Riwayat Donasi</h2>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-gray-200">
                <thead>
                  <tr
                  class="bg-gray-50">
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      No
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Program di Ikuti
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Tanggal Berdonasi
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Tanggal Mulai
                    </th>
                    <th class="border border-gray-200 p-2 text-sm text-center">
                      Tanggal Selesai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                  v-for="(donasi, index) in riwayatDonasi"
                  class="text-center">
                    <td>{{ index+1 }}</td>
                    <td>{{ donasi.judul}}</td>
                    <td>{{ donasi.tanggal_donasi }}</td>
                    <td>{{ donasi.tanggal_mulai }}</td>
                    <td>{{ donasi.tanggal_selesai }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Sertifikat -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative"
      >
        <button
          @click="showModal = false"
          class="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          <i class="fas fa-times text-xl"></i>
        </button>
        <h3 class="text-lg font-bold mb-4">Sertifikat Relawan</h3>
        <img src="" alt="Sertifikat" class="w-full h-auto border rounded" />
        <div class="text-right mt-4">
          <a
            href=""
            download
            class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            <i class="fas fa-download mr-2"></i>Download Sertifikat
          </a>
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
      showModal: false,
      activeTab: "relawan", // Tab yang aktif (default 'relawan')
      profile: [],
      riwayatRelawan: [],
      riwayatDonasi: [],
      baseUrl: ""
    };
  },
    mounted() {
    this.fetchProfile();
    this.baseUrl = import.meta.env.VITE_API_BASE_URL + '/';
  },
  methods: {
    async fetchProfile() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const token = localStorage.getItem("token");
        const response = await axios.get(`${baseUrl}/api/profile`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
      });

      this.profile = response.data.user;
      this.riwayatRelawan = response.data.riwayat_relawan;

      this.riwayatDonasi = response.data.riwayat_donasi;
      console.log(this.riwayatDonasi);
      
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
  },
};
</script>
