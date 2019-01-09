<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <b-form @submit.prevent="onSubmit">
            <b-form-textarea
              :rows="5"
              id="input-message"
              v-model="message"
              placeholder="Enter your message"
              @input="handleInput"
            ></b-form-textarea>
          </b-form>
        </div>
        <div class="col-md-4"></div>
      </div>
      <section id="result" class="container">
        <p>{{ notes }}</p>
      </section>
    </div>
  </main>
</template>

<script>
import ConvertService from "../services/convert-to-notes.js";

export default {
  name: "app-main",
  data() {
    return {
      message: "",
      notes: "",
      resultState: false,
    };
  },
  methods: {
    handleInput: function() {
      console.log(this.message, ConvertService.convert(this.message));
      this.notes = ConvertService.convert(this.message);
      
    },
  }
};
</script>

<style>

main {
  margin: 0 10% 0 10%;
}

.container {
  margin-top: 3%;
}

#btn-convert {
  margin-top: 7%;
}

#result {
  text-align: center;
}

#result p {
  overflow-wrap: break-word;
  font-size: x-large;
  line-height: inherit;
  letter-spacing: 5px;
}

</style>
