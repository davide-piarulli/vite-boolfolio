<script>
import axios from "axios";
import { store } from "./assets/data/store";

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getApi() {
      // console.log("ciao");
      axios
        .get(store.apiUrl)
        .then((result) => {
          this.projects = result.data.data;
          console.log(result.data.data);
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
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
