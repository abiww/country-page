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
body {
  margin: 0;
  padding: 0;

  font-family: 'Be Vietnam Pro', sans-serif;
  background-color: #1B1D1F;
}

.hero-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;

  background-image: url('./assets/hero-image.jpg');
  height: 200px;
  background-size: cover;
  background-position: center;
  z-index: -1;

  display: flex;
  place-items: center;
  justify-content: center;
}

</style>
