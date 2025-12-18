<template>
  <div class="hero-image">
    <img src="./assets/Logo.svg" alt="Logo">
  </div>

  <router-view />
</template>

<script>
export default {
  props: ['name'], // Receives "India" from the URL /country/India
  data() {
    return {
      country: null,
      // This should be your JSON array containing the country objects
      allCountries: [ /* your data here */ ] 
    }
  },
  created() {
    this.fetchCountryData();
  },
  watch: {
    // This ensures the data updates if you click a "Neighbouring Country"
    name() {
      this.fetchCountryData();
    }
  },
  methods: {
    fetchCountryData() {
      // Find the country where the name matches the URL parameter
      this.country = this.allCountries.find(c => c.name === this.name);
    }
  }
}
</script>

<style>

</style>
