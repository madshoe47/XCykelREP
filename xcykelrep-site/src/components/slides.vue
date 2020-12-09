<!--<template>
 
<div id="app">
  <v-app id="inspire">
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
  
      <v-card-title>Jo Nielsen</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">
            3 måneder siden
          </div>
        </v-row>
  
  
        <div>Nede i Godsbanens hyggelige hjerte ligger cykelsmedenes svar på Lucky Look! Og med det mener jeg, at cykelsmeden er hurtig! Han lavede min cykel on sight. Jeg føler mig mødt som et menneske med en cykel.</div>
      </v-card-text>
    </v-card>
  </v-app>
</div>

</template>

<script>

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
})

</script>

<style>
</style>