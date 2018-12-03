<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="#">
      <!--font-awesome-icon :icon="['fas', 'mouse-pointer']" size="1x" :style="{ color: 'white'}"/-->
      <span id="title">{{title}}</span>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <a v-bind:href="repository" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" :style="{ color: 'white' }"/>
      </a>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: "navbar",
  props: {
    title: String,
    repository: String
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");

#title {
  font-family: "Roboto Mono", "medium";
  font-size: 120%;
  margin-left: 7%;
}
</style>

