<script>
import axios from "axios";
import ProjectCard from "@/components/partials/ProjectCard.vue";
import { store } from "@/assets/data/store";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi() {
      axios
        .get(store.apiUrl + "projects")
        .then((result) => {
          store.projects = result.data.data;
          console.log(store.projects);
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
  <div class="container">
    <h1>I miei Progetti</h1>
    <div class="row row-cols-3">
      <ProjectCard
        v-for="project in store.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
