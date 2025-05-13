<template>
  <main>
    <navigation />
    <router-view></router-view>
    <footerUser/>
  </main>
</template>
<script>
import navigation from "./components/navigation.vue";
import footerUser from "./components/footer.vue";
export default {
  name: "App",
  components: {
    navigation,
    footerUser,
  },
};
</script>
