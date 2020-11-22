<template> </template>
<script>
import { getPosts } from "@/Api/test.api.js";

export default {
  name: "List",
  data: () => ({
    listItems: [],
  }),
  mounted() {},
  methods: {
    async asyncGetItems() {
      let response = await getPosts();
      this.listItems = response.data;
      console.log(this.listItems);
    },
  },
};
</script>
