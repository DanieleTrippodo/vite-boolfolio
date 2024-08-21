<!-- Parte HTML -->
<template>
    <div id="app">
      <h1>Benvenuto in Laravel con Vue 3!</h1>
      <!-- Aggiungi qui i tuoi componenti e template -->
    </div>
  </template>





  <!-- Parte JS/Vue -->
  <script>
    import axios from 'axios';

    export default {
        name: 'App',
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
  /* Aggiungi qui i tuoi stili CSS o SCSS */
  </style>
