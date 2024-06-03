<script>
import { store } from "@/assets/data/store";

export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem">
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
