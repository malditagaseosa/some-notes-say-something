<template>
  <div id="app">
    <navbar v-bind:title="title" v-bind:repository="repository"></navbar>
  </div>
</template>

<script>
import navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    navbar
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
