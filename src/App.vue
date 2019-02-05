<template>
  <div id="app">
    <b-card>
      <app-header v-bind:title="title" v-bind:repository="repository"></app-header>
      <app-main></app-main>
    </b-card>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppMain from "./components/Main.vue";

export default {
  name: "app",
  components: {
    "app-header": AppHeader,
    "app-main": AppMain
  },
  data() {
    return {
      title: "Some 🎵 Say Something 😎",
      repository: "https://github.com/malditagaseosa/some-notes-say-something"
    };
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  #app {
    width: 70%;
    font-family: 'Roboto', sans-serif;
    align-content: center;
    margin: 10% auto 0 auto;
  }

  .card {
    -webkit-box-shadow: -3px 4px 13px -4px rgba(105,101,105,0.93);
    -moz-box-shadow: -3px 4px 13px -4px rgba(105,101,105,0.93);
    box-shadow: -3px 4px 13px -4px rgba(105,101,105,0.93);
  }
  
</style>
