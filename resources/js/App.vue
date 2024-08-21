<!-- Parte HTML -->
<template>
    <div id="app">
    <h1>Lista dei Progetti</h1>

    <div class="project-list">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>

  </div>
</template>





<!-- Parte JS/Vue -->
<script>
    import axios from 'axios';
    import ProjectCard from './ProjectCard.vue';

    export default {
    name: 'App',
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
        };
    },


  mounted() {
    // Chiamata API all'endpoint /api/projects
    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => {
        // Assegna i dati dei progetti alla variabile projects
        this.projects = response.data;
        // Stampa in console i dati ricevuti
        console.log(this.projects);
      })
      .catch(error => {
        console.error('Errore durante il recupero dei progetti:', error);
      });
  },
};

</script>




<!-- Parte CSS -->
<style>

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
