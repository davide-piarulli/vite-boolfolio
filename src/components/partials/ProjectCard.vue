<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<template>
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
</template>

<style lang="scss" scoped></style>
