import './bootstrap';

//prende il JS di Bootstrap
import * as bootstrap from 'bootstrap';

import '../scss/app.scss';
import './bootstrap';


/* ------------------------------------------------------ */
/* Per Vue e Axios */
import { createApp } from 'vue';
import App from './App.vue'; // Componente principale di Vue
import axios from 'axios';

const app = createApp(App);

// Configurazione Axios globale
app.config.globalProperties.$axios = axios;

/* Per Vue */
app.mount('#app');
/* ------------------------------------------------------- */


// ? ----------Importazioni Immagini----------------
// per creare una scorciatoia per l'importazione di immagini
import.meta.glob([
    '../img/**'
]);
/*
*   How to use Image import:
*
*   <img src="{{ vite::asset('resources/img/NAMEIMG.jpg') }}" alt="NAME">
*
*/
// ? ----------Importazioni Immagini----------------

