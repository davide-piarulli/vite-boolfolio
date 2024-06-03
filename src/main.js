import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
// importo il router
import { router } from "./router";
import App from "./App.vue";

// uso il ROuter qui
createApp(App).use(router).mount("#app");
