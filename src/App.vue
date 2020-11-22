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
<style lang="scss" scoped>
.theme--light.v-application {
  background: #efefef;
  color: rgba(0, 0, 0, 0.87);
}
</style>
