<template>
  <header>
    <h1 class="title text-center">{{ title }}</h1>
    <hr size="30">
  </header>
</template>
<script>
export default {
  name: "app-header",
  props: {
    title: String,
    repository: String
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");

header {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 5%;
}

header > hr {
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 20%;
  border: none;
  height: 5px;
  background-color: black;
}

#title {
  font-family: "Roboto Mono", "medium";
}

@media only screen and (max-width: 768px) {
  header {
    margin-top: 6%;
    margin-left: 1%;
    margin-right: 1%;
  }

  header > hr {
    margin-top: 4%;
    margin-left: 5%;
    margin-right: 5%;
  }

  header > h1 {
    font-size: 1.5em;
  }
}
</style>

