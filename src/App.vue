<template>
  <v-app>
    <AppBar />
    <main>
      <router-view> </router-view>
    </main>
  </v-app>
</template>

<script>
import AppBar from "@/components/Layout/AppBar.vue";

export default {
  name: "App",

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
