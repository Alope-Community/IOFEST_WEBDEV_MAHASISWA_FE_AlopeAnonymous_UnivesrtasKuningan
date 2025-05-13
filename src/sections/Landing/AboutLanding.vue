<template>
  <section class="relative w-full pt-20 md:pt-32 flex items-center pb-32">
    <div class="container relative md:px-16 lg:px-20 flex w-full z-10">
      <img
        src=""
        alt=""
        class="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-50 pointer-events-none"
      />
      <div class="flex-1 py-20">
        <h1 class="text-5xl font-bold">Tentang Kami</h1>
        <p class="text-justify pt-8">
          Pijar Nusantara adalah platform yang menghubungkan relawan pendidikan
          dan donatur untuk bersama mendukung kesejahteraan Indonesia melalui
          aksi nyata dan kolaborasi berkelanjutan.
        </p>
        <div class="mt-10">
            <div>

                <Button link="/" title="Lihat Lebih Banyak" />
            </div>
        </div>
      </div>
      <div class="flex-1 px-5"></div>
    </div>
  </section>
</template>
<script>
import Button from "./../../components/button.vue";
export default {
    components:{
        Button
    }
}
</script>
