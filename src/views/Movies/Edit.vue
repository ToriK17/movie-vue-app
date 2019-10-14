<template>
  <div class="movies-edit">
    <h1>Edit Movie</h1>
    <form v-on:submit.prevent="updateMovie()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="movie.title" />
      Year:
      <input type="text" v-model="movie.year" />
      Plot:
      <input type="text" v-model="movie.plot" />
      <input type="submit" value="Update" />
      <button v-on:click="destroyMovie()">Destroy Movie</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movie: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
    });
  },
  methods: {
    destroyMovie: function() {
      axios.delete("/api/movies/" + this.movie.id).then(response => {
        this.$router.push("/movies");
      });
    },
    updateMovie: function() {
      var params = {
        title: this.movie.title,
        year: this.movie.year,
        plot: this.movie.plot
      };
      axios
        .patch("/api/movies/" + this.movie.id, params)
        .then(response => {
          this.$router.push("/movies");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>