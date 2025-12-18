<template>
  <div class="hero-image">
    <img src="./assets/Logo.svg" alt="Logo">
  </div>

  <country-ranks 
    v-if="!selectedCountry" 
    @country-selected="handleSelection" 
  />

  <country-info 
    v-else 
    :country="selectedCountry" 
    @close="selectedCountry = null" 
  />
</template>

<script>
import CountryRanks from './components/CountryRanks.vue';
import CountryInfo from './components/CountryInfo.vue';

export default {
  components: {
    CountryRanks,
    CountryInfo,
  },
  data() {
    return {
      selectedCountry: null // Controls which component is visible
    }
  },
  methods: {
    handleSelection(country) {
      this.selectedCountry = country;
    }
  }
}
</script>

<style>

</style>
