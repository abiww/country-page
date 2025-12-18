<template>
<div class="country-info" v-if="country">

    <div class="title">
        <img :src="country.flag" alt="">
        <h1>{{ country.name }}</h1>
        <p>{{ country.official_name }}</p>
    </div>

    <div class="label">
        <div class="tag">
            <p>Population</p>
            <div class="divider"></div>
            <p>{{ country.population.toLocaleString() }}</p>
        </div>
        <div class="tag">
            <p>Area (km²)</p>
            <div class="divider"></div>
            <p>{{ country.area.toLocaleString()  }}</p>
        </div>
    </div>

    <div class="info">
        <div class="row">
            <p>Capital</p>
            <p>{{ country.capital }}</p>
        </div>
        <div class="row">
            <p>Region</p>
            <p>{{ country.region }}</p>
        </div>
        <div class="row">
            <p>Subregion</p>
            <p>{{ country.subregion }}</p>
        </div>
        <div class="row">
            <p>Language</p>
            <p>{{ country.language.join(', ') }}</p>
        </div>
        <div class="row">
            <p>Currencies</p>
            <p>{{ Object.values(country.currencies)[0].name }}</p>
        </div>
        <div class="row">
            <p>Continents</p>
            <p>{{ country.continents.join(', ') }}</p>
        </div>
        <div class="row-last">
            <p>Status</p>
            <p>{{ country.status }}</p>
        </div>
    </div>

    <div class="others" v-if="neighboringCountries.length">
        <p>Neighbouring Countries</p>
        <div class="countries">
            <button v-for="neighbor in neighboringCountries" :key="neighbor.id" @click="goToCountry(neighbor.name)">
                <img :src="neighbor.flag" alt="">
                <p>{{ neighbor.name }}</p>
            </button>
        </div>
    </div>

</div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      country: null,
      allCountries: []
    }
  },
  computed: {
    neighboringCountries() {
      if (!this.country || !this.allCountries.length) return [];
      
      return this.allCountries.filter(c => 
        c.subregion === this.country.subregion && 
        c.name !== this.country.name
      );
    }
  },
  methods: {
    loadCountry() {
      const data = localStorage.getItem('allCountries');
      if (data) {
          this.allCountries = JSON.parse(data);
          this.country = this.allCountries.find(c => c.name === this.name);
      }
    },
    // Allows jumping between neighboring countries
    goToCountry(targetName) {
      this.$router.push({ name: 'CountryInfo', params: { name: targetName } });
    }
  },
  created() {
    this.loadCountry();
  },
  watch: {
    name() { this.loadCountry(); }
  }
}
</script>

<style scoped>
@import "../../css/country-info.css";
</style>