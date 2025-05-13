<template>
  <div>
    <p class="text-blue-500 font-semibold">{{ title }}</p>
    <router-link to="/detail">
      <h5 class="font-semibold text-base xl:text-2xl text-gray-900">
        {{ subtitle }}
      </h5>
    </router-link>
  </div>
</template>

<script setup>
defineProps(['title', 'subtitle'])
</script>
