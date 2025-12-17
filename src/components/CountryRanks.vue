<template>
    <div class="country-ranks">

        <!-- TOP BAR -->
        <div class="top-bar">
            <p>Found 234 countries</p>
            <input type="text" placeholder="Search by Name, Region" />
        </div>

        <!-- MAIN CONTENT -->
        <div class="main-content">

            <!-- SIDE BAR -->
            <div class="side-bar">
                
                <!-- SORT -->
                <div class="sort">
                    <p>Sort by</p>
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Population" class="drd-population" />
                </div>
                
                <!-- REGION -->
                <div class="region">
                    <p>Region</p>
                    <button>Americas</button>
                    <button>Antartic</button>
                    <button>Africa</button>
                    <button>Asia</button>
                    <button>Europe</button>
                    <button>Oceania</button>
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
                <DataTable :value="countries" sortField="population" :sortOrder="-1" stripedRows paginator :rows="10">
                    <Column field="flag" header="Flag">
                        <template #body="slotProps">
                            <img :src="slotProps.data.flag" :alt="slotProps.data.name" style="width: 50px;" />
                        </template>
                    </Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="population" header="Population" sortable></Column>
                    <Column field="area" header="Area (km²)" sortable></Column>
                    <Column field="region" header="Region" sortable></Column>
                </DataTable>
            </div>

        </div>

    </div>    
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            cb: null,
            countries: [
            // DUMMY DATA - 20 ROWS
            // 1-5
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'United States', population: 331900000, area: 9834000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'China', population: 1412000000, area: 9597000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'India', population: 1408000000, area: 3287000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Brazil', population: 214000000, area: 8516000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Nigeria', population: 219000000, area: 924000, region: 'Africa' },
            // 6-10
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'United States', population: 331900000, area: 9834000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'China', population: 1412000000, area: 9597000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'India', population: 1408000000, area: 3287000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Brazil', population: 214000000, area: 8516000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Nigeria', population: 219000000, area: 924000, region: 'Africa' },
            // 11-15
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'United States', population: 331900000, area: 9834000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'China', population: 1412000000, area: 9597000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'India', population: 1408000000, area: 3287000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Brazil', population: 214000000, area: 8516000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Nigeria', population: 219000000, area: 924000, region: 'Africa' },
            // 15-20
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'United States', population: 331900000, area: 9834000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'China', population: 1412000000, area: 9597000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'India', population: 1408000000, area: 3287000, region: 'Asia' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Brazil', population: 214000000, area: 8516000, region: 'Americas' },
            { flag: new URL('../assets/china.png', import.meta.url).href, name: 'Nigeria', population: 219000000, area: 924000, region: 'Africa' },
            ],
        };
    }
};
</script>

<style scoped>
@import "../css/country-ranks.css";
</style>