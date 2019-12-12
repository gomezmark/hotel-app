<template>
  <v-app-bar
    color="secondary"
    dark
  >
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer />
    <v-btn
      flat
      depressed
      text
      @click="dialog = true">
      Login
    </v-btn>
    <v-dialog
      v-model="dialog"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title primary-title>
          <p class="headline mb-0">Login</p>
        </v-card-title>
        <v-layout row wrap>
          <no-ssr>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                label="E-mail"
                v-model="email"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="email"
                required
              ></v-text-field>
              <v-btn
                @click="submit"
                :disabled="!valid"
              >
                submit
              </v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </no-ssr>
          <!--
          <script>
          import axios from "axios";
          export default {
            data: () => ({
              valid: true,
              name: "",
              nameRules: [v => !!v || "Name is required", v => (v && v.length <= 10) || "Name must be less than 10 characters"],
              email: "",
              emailRules: [v => !!v || "E-mail is required", v => /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(v) || "E-mail must be valid"],
              select: null,
              items: ["Item 1", "Item 2", "Item 3", "Item 4"],
              checkbox: false
            }),
            methods: {
              submit() {
                if (this.$refs.form.validate()) {
                  // Native form submission is not yet supported
                  axios.post("/api/submit", {
                    name: this.name,
                    email: this.email,
                    select: this.select,
                    checkbox: this.checkbox
                  });
                }
              },
              clear() {
                this.$refs.form.reset();
              }
            }
          };
          </script>
          -->
        </v-layout>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      email: null,
      password: null
    }
  }
}
</script>
