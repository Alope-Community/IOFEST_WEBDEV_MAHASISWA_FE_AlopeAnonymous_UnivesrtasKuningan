  <template>
  <section class="container mx-auto pt-32 xl:px-20 md:px-5 px-3 grid xl:grid-cols-4 gap-10">
    <!-- Konten Kiri (Artikel) -->
    <div class="xl:col-span-3">
      <h3 class="text-3xl font-bold mb-3">
        {{ artikel.judul }}
      </h3>

      <p class="font-semibold">
        Dipublikasikan Oleh:
        <span class="text-blue-500 font-semibold">{{ artikel.penulis }}</span>
      </p>

      <div class="mt-5 flex gap-10 font-medium text-sm text-gray-500">
        <p class="flex gap-2 pb-5 items-center">
          <i class="fa-regular fa-calendar"></i>
          <span>{{ artikel.tanggal_diterbitkan }}</span>
        </p>
      </div>

      <img
        :src="artikel.gambar"
        :alt="artikel.judul"
        class="w-full h-auto object-cover rounded mb-6"
      />

      <article class="prose max-w-none text-justify">
        {{ artikel.konten }}
      </article>
    </div>

    <!-- Konten Kanan (Sidebar Sticky) -->
    <div class="hidden xl:block sticky top-32 self-start">
      <div class="xl:h-[250px] h-[230px] relative after:content-[''] after:bg-black/20 after:absolute after:inset-0 after:rounded">
        <img
          src="https://assets.promediateknologi.id/crop/0x182:2048x1509/750x500/webp/photo/2023/01/10/24757301.jpg"
          class="w-full xl:h-[250px] h-[230px] rounded-xl object-cover"
        />
      </div>

      <div>
        <div
          class="xl:my-5 my-3"
        >
          <p class="text-blue-500 font-semibold">Donasi</p>
          <router-link :to="'/detail-artikel/3'">
            <h5 class="font-semibold xl:text-xl text-base text-gray-900">
              Satu Donasi, Sejuta Harapan
            </h5>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      artikel: [],
    };
  },
  computed: {
  },
  methods: {
    async fetchArtikel() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const id = this.$route.params.id;
        const artikelResponse = await axios.get(`${baseUrl}/api/artikel/${id}`);
        console.log(artikelResponse);
        
        this.artikel = artikelResponse.data.data;
        console.log(this.artikel);
        this.artikel.gambar = `${baseUrl}/storage/${artikelResponse.data.data.gambar}`

        
      } catch (error) {
        console.error("Gagal mengambil data program:", error);
      }
    },
  },
  mounted() {
    this.fetchArtikel();
  },
};
</script>