<template>
  <ProfileSection />
</template>

<script>
import ProfileSection from "../sections/Profile/profile.vue";

export default {
  components: {
    ProfileSection,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
