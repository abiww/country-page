<template>
  <div class="hero-image">
    <img src="./assets/Logo.svg" alt="Logo">
  </div>

  <country-ranks />
</template>

<script>
  import CountryRanks from './components/CountryRanks.vue';
  
  export default {
    components: {
        CountryRanks,
    },
  }
</script>

<style>

</style>
