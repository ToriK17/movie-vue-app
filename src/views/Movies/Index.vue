
<template>
  <div class="container">
    <h1>All Photos</h1>
    <div v-for="movie in movies">
      <h2>{{ movie.title }}</h2>
      <p>Year Released: {{ movie.year }}</p>
      <router-link v-bind:to="`/movies/${movie.id}`">More details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movies: []
    };
  },
  created: function() {
    axios.get("/api/movies").then(response => {
      this.movies = response.data;
    });
  },
  methods: {}
};
</script>