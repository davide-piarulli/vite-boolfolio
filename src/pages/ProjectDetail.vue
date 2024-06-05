<script>
import axios from "axios";
import { store } from "@/assets/data/store";
export default {
  name: "ProjectDetail",
  data() {
    return {
      store,
      project: {},
    };
  },
  methods: {
    getApi() {
      console.log(this.$route.params.slug);
      const slug = this.$route.params.slug;
      axios
        .get(store.apiUrl + "project-by-slug/" + slug)
        .then((result) => {
          this.project = result.data.project;
          console.log(this.project);
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
  <div class="container my-5">
    <div class="col">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">
            ID: {{ project.id }} - Titolo: {{ project.title }}
          </h5>

          <h5>Tipo:</h5>
          <span>{{ project.type }}</span>

          <h5>Tecnologia:</h5>
          <span
            class="badge roudned-pill text-bg-info me-1"
            v-for="(technology, index) in project.technologies"
            :key="index"
            >{{ technology.name }}</span
          >
          <p class="card-text">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
