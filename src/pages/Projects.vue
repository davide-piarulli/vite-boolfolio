<script>
import axios from "axios";
import { store } from "@/assets/data/store";

export default {
  name: "Projects",
  methods: {
    getApi() {
      axios
        .get(store.apiUrl)
        .then((result) => {
          this.projects = result.data.data;
          console.log(result.data.data);
        })
        .catch((error) => {
          console.log(error.message);
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
    <h1>I miei Progetti</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.id }} - {{ project.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
