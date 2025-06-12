<template>
  <RouterLink
    :to="link"
    class="text-sm inline-flex items-center justify-center border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
  >
    {{ title }}
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    link: "/",
    title: "Button",
  },
};
</script>

<style></style>
