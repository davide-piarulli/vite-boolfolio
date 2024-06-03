<script>
import axios from "axios";
import { store } from "@/assets/data/store";

import Main from "./components/Main.vue";

export default {
  components: {
    Main,
  },
  data() {
    return {
      store,
      axios,
    };
  },
  methods: {
    getApi() {
      // console.log("ciao");
      axios
        .get(store.apiUrl)
        .then((result) => {
          store.projects = result.data.data;
          console.log(store.projects);
        })
        .catch((error) => {
          console.log(error.message);
          error = error.message;
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div>
    <h1>Progetti</h1>
    <div>
      <Main />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
