import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Projects from "./pages/Projects.vue";
import Contacts from "./pages/Contacts.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
  // history risponde a createwebhistory
  history: createWebHistory(),
  // creo le rotte
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/chi-siamo",
      name: "about",
      component: About,
    },
    {
      path: "/progetti",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contatti",
      name: "contacts",
      component: Contacts,
    },
    {
      // così si gestiscono tutte le altre rotte non trovate per restituire la pagina errore 404 e bisogna metterlo in fondo alle rotte
      path: "/:pathMatch(.*)*",
      name: "error404",
      component: Error404,
    },
  ],
});

// ora esporto il router
export { router };

// poi lo importo nel main.js
