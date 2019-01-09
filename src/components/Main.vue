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
                :variant="'outline-success'"
              >Convert</b-button>
            </div>
          </b-form>
        </div>
        <div class="col-md-4"></div>
      </div>
      <section v-if="resultState" id="result" class="container">
        <ul>
          <li v-for="note in notes">{{note}}</li>
        </ul>
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
      notes: [],
      resultState: false,
    };
  },
  methods: {
    onSubmit: function() {
      console.log(this.message, ConvertService.convert(this.message));
      this.notes = ConvertService.convert(this.message);
      ConvertService.play(this.notes);
      this.showResult();

      this.message = "";
    },
    showResult: function(){
      this.resultState = true;
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

#result {
  text-align: center;
}

#result ul {
  list-style: none;
}

#result ul li {
  display: inline-block;
  margin: 0 1% 0 1%;
}
</style>
