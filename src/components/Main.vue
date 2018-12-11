<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <b-form @submit.prevent="onSubmit">
            <b-form-textarea
              :rows="5"
              id="message"
              v-model="message"
              placeholder="Enter your message"
            ></b-form-textarea>
            <div class="row">
              <b-button
                id="btn-convert"
                class="mx-auto"
                type="submit"
                :size="'md'"
                :variant="'success'"
              >Convert Me</b-button>
            </div>
          </b-form>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </main>
</template>

<script>
import ConvertService from "../services/convert-to-notes.js";

export default {
  name: "app-main",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    onSubmit: function() {
      console.log(this.message, ConvertService.convert(this.message));
      this.message = "";
    }
  }
};
</script>

<style>
.container {
  margin-top: 3%;
}

#btn-convert {
  margin-top: 7%;
}
</style>
