<template>
  <div class="hero-image">
    <img src="./assets/Logo.svg" alt="Logo">
  </div>

  <country-ranks />

</template>

<script>
  import CountryRanks from './components/CountryRanks.vue';
  import CountryInfo from './components/CountryInfo.vue';
  
  export default {
    components: {
        CountryRanks,
        CountryInfo,
    },
  }
</script>

<style>

</style>
