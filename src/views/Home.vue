<template>
  <div class="home">
    <h1>All Actors</h1>
    <div v-for="actor in actors">
      <h3>{{ actor.first_name }}</h3>
      <h3>{{ actor.last_name }}</h3>
      <button v-on:click="showActor(actor)">Show more Info</button>

      <div v-if="movie === currentMovie">
        <h3>{{ movie.title}}</h3>
        <h3>{{ movie.year}}</h3>
        
    <div>
      <input type="text" v-model="newMovieTitle" />
      <input type="text" v-model="newMovieYear" />
      <button v-on:click="createMovie()">Create Movie</button>
    </div>
      </div>

      <button v-on:click="showMovie(movie)">Show more</button>
      <div v-if="currentMovie === movie">
        <p>Title: {{ movie.height }}</p>       
        <p>Year: {{ movie.year }}</p>
      </div>

      <div>
        Title:
        <input type="text" v-model="movie.title" />
        Year:  
        <input type="text" v-model="movie.year" />
          
        <button v-on:click="updateMovie(movie)">Update Movie</button>
        </div>


      <div v-if="actor === currentActor">
        <h3>{{ actor.known_for}}</h3>
        <h3>{{ actor.gender}}</h3>
        <h3>{{ actor.age}}</h3>
      
        <div>
          First Name: <input type="text" v-model="actor.first_name">
          Last Name: <input type="text" v-model="actor.last_name">
          Known For: <input type="text" v-model="actor.known_for">
          <button v-on:click="updateActor(actor)">Update Actor</button>
          <button v-on:click="destroyActor(actor)">Destroy Actor</button>
        </div>
      </div>    
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
      actors: [], 
      currentActor: {}, 
      movies: [], 
      newMovieTitle: "", 
      newMovieYear: ""
    };
  },
  created: function() {
    axios.get("/api/actors").then(response => {
      this.actors = response.data;
    });
  },
  methods: {
    createMovie: function() {
      var params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
      };
      axios.post("/api/movies", params).then(response => {
        this.movies.push(response.data);
        this.newMovieTitle = "";
        this.newMovieYear = "";
      });
    },
    showActor: function(actor) {
      if (this.currentActor === actor) {
        this.currentActor = {};
      } else {
        this.currentActor = actor;
      }
    },
    updateActor: function(actor) {
      var params = {
        first_name: actor.first_name,
        last_name: actor.last_name,
        known_for: actor.known_for
      };
      axios.patch("/api/actors/" + actor.id, params)
        .then(response => {
          this.currentActor = {};
        });
    }, 
    destroyActor: function(actor) {
      axios.delete("/api/actors/" + actor.id)
        .then(response => {
          console.log(response.data);
          var index = this.actors.indexOf(actor);
          this.actors.splice(index, 1);
        });
    }
  
  }
};
</script>