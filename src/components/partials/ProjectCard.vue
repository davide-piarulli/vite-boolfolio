<script>
import { store } from "@/assets/data/store";

export default {
  props: {
    id: String,
    title: String,
    description: String,
    type: String,
    technologies: Array,
  },
};
</script>

<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ id }} - Titolo: {{ title }}</h5>

        <h5>Tipo:</h5>
        <span>{{ type }}</span>

        <h5>Tecnologia:</h5>
        <span
          class="badge roudned-pill text-bg-info me-1"
          v-for="(technology, index) in technologies"
          :key="index"
          >{{ technology.name }}</span
        >
        <p class="card-text">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
