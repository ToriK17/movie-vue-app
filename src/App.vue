<template>
  <div id="app">
    <div class="cbp-af-header">
      <div class=" cbp-af-inner">
        <div class="container">
          <div class="row">

            <div class="span4">
              <!-- logo -->
              <div class="logo">
                <h1><a href="index.html">Movie Spot</a></h1>
                <!-- <img src="assets/img/logo.png" alt="" /> -->
              </div>
              <!-- end logo -->
            </div>

            <div class="span8">
              <!-- top menu -->
              <div class="navbar">
                <div class="navbar-inner">
                  <nav>
                    <ul class="nav topnav">
                      <li class="dropdown active">
                        <a href="index.html">Home </a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Movies</a>
                        <ul class="dropdown-menu">
                          <li><router-link to="/movies">All Movies</router-link></li>
                          <li><a href="blog_left_sidebar.html">Blog left sidebar</a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">Actors</a>
                        <ul class="dropdown-menu">
                          <li><router-link to="/">All Actors</router-link></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">About</a>
                        <ul class="dropdown-menu">
                          <li><router-link to="/about">About</router-link></li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!-- end menu -->
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
