<template>
  <div id="app">
    <app-header v-bind:title="title" v-bind:repository="repository"></app-header>
    <app-main></app-main>
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
</style>
