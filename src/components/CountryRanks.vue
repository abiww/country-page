<template>
    <div class="country-ranks">

        <!-- TOP BAR -->
        <div class="top-bar">
            <p>Found {{ sortedCountries.length }} countries</p>
            <input type="text" placeholder="Search by Name" />
        </div>

        <!-- MAIN CONTENT -->
        <div class="main-content">

            <!-- SIDE BAR -->
            <div class="side-bar">
                
                <!-- SORT -->
                <div class="sort">
                    <p>Sort by</p>
                    <Dropdown v-model="selectedSort" :options="sortOptions" optionLabel="name" placeholder='Sort by' class="drd-sort" />
                </div>
                
                <!-- REGION -->
                <div class="region">
                    <p>Region</p>
                    <button v-for="region in uniqueRegions" :key="region.value" :class="{ active: selectedRegion === region.value }" @click="selectedRegion = region.value" >
                        {{ region.name }}
                    </button>
                </div>
                
                <!-- STATUS -->
                <div class="status">
                    <p>Status</p>
                    <div class="cb">
                        <Checkbox v-model="cb" inputId="member" value="Member" class="check-box"/>
                        <label for="member">Member of the United Nations</label>
                    </div>
                    <div class="cb">
                        <Checkbox v-model="cb" inputId="independent" value="Independent" class="check-box"/>
                        <label for="independent">Independent</label>
                    </div>
                </div>

            </div>

            <!-- TABLE -->
            <div class="table">
                <DataTable :value="sortedCountries" paginator :rows="10" tableStyle="min-width: 50rem">
                    <Column field="flag" header="Flag">
                        <template #body="slotProps">
                            <img :src="slotProps.data.flag" :alt="slotProps.data.name" style="width: 50px; height: 30px;" />
                        </template>
                    </Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="population" header="Population"></Column>
                    <Column field="area" header="Area (km²)"></Column>
                    <Column field="region" header="Region"></Column>
                </DataTable>
            </div>

        </div>

    </div>    
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            countries: [],
            selectedSort: { name: 'Population (High to Low)', code: 'pop-desc' },
            sortOptions: [
                { name: 'Name (A-Z)', code: 'name-asc' },
                { name: 'Name (Z-A)', code: 'name-desc' },
                { name: 'Population (Low to High)', code: 'pop-asc' },
                { name: 'Population (High to Low)', code: 'pop-desc' },
                { name: 'Area (Low to High)', code: 'area-asc' },
                { name: 'Area (High to Low)', code: 'area-desc' },
                { name: 'Region (A-Z)', code: 'region-asc' },
                { name: 'Region (Z-A)', code: 'region-desc' }
            ],
            selectedRegion: null,
            cb: null,
        };
    },
    computed: {
        uniqueRegions() {
            if (!this.countries.length) return [];
            const regions = this.countries.map(c => c.region);
            return [...new Set(regions)].sort().map(r => ({ name: r, value: r }));
        },
        sortedCountries() {
            let data = [...this.countries];

        if (this.selectedRegion) {
            const regionValue = typeof this.selectedRegion === 'object' ? this.selectedRegion.value : this.selectedRegion;
            data = data.filter(country => country.region === regionValue);
        }
        if (!this.selectedSort) return data;

        const sortCode = this.selectedSort.code;
        
        return data.sort((a, b) => {
            switch (sortCode) {
                case 'name-asc':   return a.name.localeCompare(b.name);
                case 'name-desc':  return b.name.localeCompare(a.name);
                case 'region-asc': return a.region.localeCompare(b.region);
                case 'region-desc':return b.region.localeCompare(a.region);
                case 'pop-asc':    return a.population - b.population;
                case 'pop-desc':   return b.population - a.population;
                case 'area-asc':   return a.area - b.area;
                case 'area-desc':  return b.area - a.area;
                default: return 0;
            }
        });
        }
    },
    mounted() {
        axios.get('https://gist.githubusercontent.com/abiww/1a53acf9955116b9e39f3e7e9f29caec/raw/11f9d87ea548270aa99f3489ee50bcec86b38eca/countries')
        .then(response => this.countries = response.data)
    },
};
</script>

<style scoped>
@import "../css/country-ranks.css";
</style>