<template>
    <div class="country-ranks">

        <!-- TOP BAR -->
        <div class="top-bar">
            <p>Found {{ sortedCountries.length }} countries</p>

            <IconField style="position: relative; display: flex; align-items: center;">
                <i class="pi pi-search" style="position: absolute; left: 12px; font-size: 14px; opacity: 0.5; pointer-events: none;"></i>
                <input v-model="searchQuery" placeholder="Search by Name" @input="selectedRegion = null" class="p-inputtext w-full" style="padding-left: 35px; padding-right: 35px; width: 100%;" />
                <i v-if="searchQuery" class="pi pi-times cursor-pointer thin-icon" style="position: absolute; right: 12px; font-size: 14px; opacity: 0.5;" @click="clearSearch"></i>
            </IconField>
                          </div>

        <!-- MAIN CONTENT -->
        <div class="main-content">

            <!-- SIDE BAR -->
            <div class="side-bar">
                
                <!-- SORT -->
                <div class="sort">
                    <p>Sort by</p>
                    <Dropdown v-model="selectedSort" :options="sortOptions" optionLabel="name" placeholder='Sort by' class="drd-sort" appendTo="self" />
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
                        <Checkbox v-model="isUNMember" :binary="true" inputId="isUNMember" class="check-box"/>
                        <label for="isUNMember">Member of the United Nations</label>
                    </div>
                    <div class="cb">
                        <Checkbox v-model="isIndependent" :binary="true" inputId="isIndependent" class="check-box"/>
                        <label for="isIndependent">Independent</label>
                    </div>
                </div>

            </div>

            <!-- TABLE -->
            <div class="table">
                <DataTable :value="sortedCountries" paginator :rows="10" tableStyle="table-layout: auto; min-width: 100%" @row-click="onRowSelect">
                    <!-- FLAG -->
                    <Column field="flag" header="Flag" style="width: 15%">
                        <template #body="slotProps">
                            <img :src="slotProps.data.flag" :alt="slotProps.data.name" style="width: 50px; height: 30px; object-fit: cover; border-radius: 2px; border-radius: 2.5px;" />
                        </template>
                    </Column>
                    <!-- NAME -->
                    <Column field="name" header="Name" style="width: 25%"></Column>
                    <!-- POPULATION -->
                    <Column field="population" header="Population" style="width: 20%">
                        <template #body="slotProps">
                            {{ formatNumber(slotProps.data.population) }}
                        </template>
                    </Column>
                    <!-- AREA -->
                    <Column field="area" header="Area (km²)" style="width: 20%">
                        <template #body="slotProps">
                            {{ formatNumber(slotProps.data.population) }}
                        </template>
                    </Column>
                    <!-- REGION -->
                    <Column field="region" header="Region" style="width: 20%"></Column>
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
            searchQuery: null,
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
            isUNMember: false,
            isIndependent: false
        };
    },
    methods: {
        onRowSelect(event) {
            const countryName = event.data.name; 

            this.$router.push({ 
                name: 'CountryInfo', 
                params: { name: countryName } 
            });
        },
        formatNumber(value) {
            if (value === null || value === undefined) return '';
            return value.toLocaleString();
        },
        clearSearch() {
            this.searchQuery = '';
            this.selectedRegion = null; 
        }
    },
    watch: {
        selectedRegion(newVal) {
            if (newVal) {
                this.searchQuery = '';
                this.isUNMember = false;
                this.isIndependent = false;
            }
        }
    },
    computed: {
        uniqueRegions() {
            if (!this.countries.length) return [];
            const regions = this.countries.map(c => c.region);
            return [...new Set(regions)].sort().map(r => ({ name: r, value: r }));
        },
        sortedCountries() {
            let data = [...this.countries];

            const query = this.searchQuery?.trim().toLowerCase();
            if (query) {
                data = data.filter(country => 
                    country.name.toLowerCase().includes(query)
                );
            } else if (this.selectedRegion) {
                const regionValue = typeof this.selectedRegion === 'object' 
                    ? this.selectedRegion.value 
                    : this.selectedRegion;
                    
                data = data.filter(country => country.region === regionValue);
            }

            // STATUS
            if (this.isUNMember || this.isIndependent) {
                data = data.filter(country => {
                    const matchesUN = this.isUNMember && country.status === "UN Member";
                    const matchesIndep = this.isIndependent && country.status === "Independent";
                    return matchesUN || matchesIndep;
                });
            }

            // SORT
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
        .then(response => {this.countries = response.data;
            localStorage.setItem('allCountries', JSON.stringify(response.data));
        });
    },
};
</script>

<style scoped>
    @import "../../css/country-ranks.css";
</style>