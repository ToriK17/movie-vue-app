<template>
  <div class="container">
    <h2>{{ movie.title }}</h2>
    <p>Year: {{ movie.year }}</p>
    <p>Plot: {{ movie.plot }}</p>
    <router-link to="/movies">Back to all movies</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movie: {}
    };
  },
  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
    });
  },
  methods: {}
};
</script>