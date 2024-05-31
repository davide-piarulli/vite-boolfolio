<script>
import { store } from "@/assets/data/store";
import ProjectCard from "./partials/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <ProjectCard
    v-for="project in store.projects"
    :key="project.id"
    :title="project.title"
    :description="project.description"
  />
</template>

<style lang="scss" scoped></style>
