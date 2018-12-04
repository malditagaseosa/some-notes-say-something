<template>
  <div id="app">
    <app-header v-bind:title="title" v-bind:repository="repository"></app-header>
    <main></main>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";

export default {
  name: "app",
  components: {
    "app-header": AppHeader
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
