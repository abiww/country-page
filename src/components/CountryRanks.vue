<template>
    <div class="country-ranks">

        <!-- TOP BAR -->
        <div class="top-bar">
            <p>Found 234 countries</p>
            <input type="text" placeholder="Search by Name, Region, Subregion" />
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
                <DataTable :value="countries" sortField="population" stripedRows paginator :rows="10">
                    <Column field="flag" header="Flag"></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="people" header="Population" sortable></Column>
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
            {
            flag: '🇺🇸',
            name: 'United States',
            people: 331900000,
            area: 9834000,
            region: 'Americas'
            },
            {
            flag: '🇨🇳',
            name: 'China',
            people: 1412000000,
            area: 9597000,
            region: 'Asia'
            },
            {
            flag: '🇮🇳',
            name: 'India',
            people: 1408000000,
            area: 3287000,
            region: 'Asia'
            },
            {
            flag: '🇧🇷',
            name: 'Brazil',
            people: 214000000,
            area: 8516000,
            region: 'Americas'
            },
            {
            flag: '🇳🇬',
            name: 'Nigeria',
            people: 219000000,
            area: 924000,
            region: 'Africa'
            },
            {
            flag: '🇺🇸',
            name: 'United States',
            people: 331900000,
            area: 9834000,
            region: 'Americas'
            },
            {
            flag: '🇨🇳',
            name: 'China',
            people: 1412000000,
            area: 9597000,
            region: 'Asia'
            },
            {
            flag: '🇮🇳',
            name: 'India',
            people: 1408000000,
            area: 3287000,
            region: 'Asia'
            },
            {
            flag: '🇧🇷',
            name: 'Brazil',
            people: 214000000,
            area: 8516000,
            region: 'Americas'
            },
            {
            flag: '🇳🇬',
            name: 'Nigeria',
            people: 219000000,
            area: 924000,
            region: 'Africa'
            }
            ],
        };
    }
};
</script>

<style scoped>
    .country-ranks {
        background-color: #1B1D1F;
        padding: 20px 50px;
        border: 1px solid #282B30;

        margin: 150px auto 50px auto;
        width: 90%;
        min-height: 600px;
        border-radius: 10px;
        z-index: 1;

        color: #D2D5DA;
    }

    /* TOP BAR */
    .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .top-bar p {
        font-size: 20px;
        font-weight: bold;
    }

    .top-bar input {
        background: url('/src/assets/search.svg') no-repeat 10px center;
        background-size: 18px;

        background-color: #282B30;
        border: 1px solid #6C727F;
        padding: 10px 10px 10px 35px;
        border-radius: 5px;
        width: 320px;

        color: #D2D5DA;
        font-size: 14px;
        font-weight: 600;
    }

    .top-bar input::placeholder {
        color: #6C727F;
    }

    .top-bar input:hover {
        border-color: #60a5fa;
    }

    .top-bar input:focus {
        outline: none; 
        border-color: #60a5fa;
    }

    /* MAIN CONTENT */
    .main-content {
        display: flex;
        gap: 30px;
        width: 100%;  
    }

    /* SIDE BAR */
    .side-bar {
        left: 50px;
        max-width: 25%;

        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .side-bar p {
        font-size: 12px;
        font-weight: 600;
    }

    /* SIDE BAR - SORT */
    .sort .drd-population {
        width: 100%;
        background-color: #282B30;
        border: 0.5px solid #6C727F;
        
        font-size: 14px;
        font-weight: 500;
    }

    .sort .drd-population :deep(.p-dropdown-label) {
        font-size: 14px;
        color: #D2D5DA;
    }

    /* SIDE BAR - REGION */
    .region button {
        background-color: #282B30;
        border: none;
        border-radius: 15px;
        padding: 5px 15px;
        margin: 5px;

        font-family: 'Be Vietnam Pro', sans-serif;
        font-weight: 500;
        color: #D2D5DA;
        font-size: 14px;

        cursor: pointer;
    }

    /* SIDE BAR - STATUS */
    .status .cb {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;

        font-weight: 500;
        color: #D2D5DA;
        font-size: 14px;
    }

    .status :deep(.check-box .p-checkbox-box) {
        width: 20px;
        height: 20px;
        border: 1px solid #D2D5DA;
        background-color: #1B1D1F;
    }

    .status :deep(.check-box .p-checkbox-icon) {
        color: #D2D5DA;
    }

    .status ::deep(.check-box .p-checkbox-box:hover) {
        border: 1px solid #60a5fa;
    }

    /* TABLE */
    .table {
        /* background-color: #48232c; */
        width: 75%;
        min-height: 400px;
    }

    .table :deep(.p-datatable) {
        background: #1B1D1F;
        overflow: hidden;
    }

    /* HEADER */
    .table :deep(.p-datatable-thead > tr > th) {
        background: #1B1D1F;
        color: #D2D5DA;
        font-size: 12px;
        border-bottom: 1px solid #6C727F;
    }

    /* BODY CELLS */
    .table :deep(.p-datatable-tbody > tr > td) {
        background: #1B1D1F;
        padding: 15px;
        
        font-family: 'Be Vietnam Pro', sans-serif;
        color: #D2D5DA;
        font-size: 14px;
    }

    /* STRIPED ROWS */
        .table :deep(.p-datatable-tbody > tr.p-datatable-row-even) {
        background: rgba(255,255,255,0.02);
    }

    .table :deep(.p-datatable-tbody > tr.p-datatable-row-odd) {
        background: transparent;
    }

    /* PAGINATOR */
    .table :deep(.p-paginator) {
        background: #1B1D1F;
        border-radius: 0;
    }
    
    .table :deep(.p-paginator-page) {
        background: #60a5fa;
        
        color: #D2D5DA;
        font-size: 14px;
    }
</style>