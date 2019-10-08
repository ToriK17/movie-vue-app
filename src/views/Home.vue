<template>
  <div class="home">
     <h1>All Actors</h1>
    <div v-for="actor in actors">
      <h3>{{ actor.first_name }}</h3>
      <h3>{{ actor.last_name }}</h3>
      <h3>{{ actor.known_for}}</h3>
      <h3>{{ actor.gender}}</h3>
      <h3>{{ actor.age}}</h3>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      actors: []
    };
  },
  created: function() {
    axios.get("/api/actors").then(response => {
      this.actors = response.data;
    });
  },
  methods: {}
};
</script>