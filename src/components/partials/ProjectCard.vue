<script>
import { store } from "@/assets/data/store";

export default {
  props: {
    id: String,
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ id }} - Titolo: {{ title }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
