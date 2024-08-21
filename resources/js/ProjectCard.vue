<template>
    <div class="project-card">
      <img v-if="project.image" :src="getProjectImageUrl(project.image)" alt="Project Image" class="project-image">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
</template>



<script>
  export default {
    name: 'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
    methods: {
      getProjectImageUrl(image) {
        return image.startsWith('http') ? image : `/storage/${image}`;
      }
    }
  };
</script>





<style scoped>
  .project-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .project-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 16px;
  }
</style>
