<script>
import axios from "axios";
import { store } from "@/assets/data/store";

export default {
  name: "Contacts",
  data() {
    return {
      name: "Davide",
      email: "dade@dade.it",
      message: "Questo è un messaggio di test",
    };
  },
  methods: {
    sendEmail() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      axios
        .post(store.apiUrl + "send-email", data)
        .then((result) => {
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      console.log(data);
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>Contattaci</h1>
    <form @submit.prevent="sendEmail">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input v-model="name" type="text" class="form-control" id="name" />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Indirizzo Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          Non condivideremo mai il tuo indirizzo mail.
        </div>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Messaggio</label>
        <textarea
          v-model="message"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Contattaci</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
