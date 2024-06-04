<script>
import axios from "axios";
import { store } from "@/assets/data/store";
export default {
  name: "ProjectDetail",
  data() {
    return {
      project: {},
    };
  },
  methods: {
    getApi() {
      const slug = this.$route.params.slug;
      axios
        .get(store.apiUrl + "project-by-slug/" + slug)
        .then((result) => {
          this.project = result.data.project;
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
    <div class="col">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">
            ID: {{ project.id }} - Titolo:
            <router-link
              :to="{ name: 'projectDetail', params: { slug: project.slug } }"
              >{{ project.title }}</router-link
            >
          </h5>

          <h5>Tipo:</h5>
          <span>{{ project.type.name }}</span>

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
