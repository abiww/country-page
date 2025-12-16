<template>
    <div class="country-ranks">
        <div class="top-bar">
            <p>Found 234 countries</p>
            <input type="text" placeholder="Search country by Name, Region, Subregion" />
        </div>
    </div>
    
</template>

<style scoped>
    .country-ranks {
        background-color: #282B30;
        padding: 20px 50px;

        position: relative;
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
        font-size: 16px;
        font-weight: bold;
    }

    .top-bar input {
        background: url('/src/assets/search.svg') no-repeat 10px center;
        background-color: #1B1D1F;
        border: none;
        padding: 10px 10px 10px 40px;
        border-radius: 5px;
        color: #D2D5DA;
        width: 400px;

        color: #D2D5DA;
        font-size: 14px;
        font-weight: 600;
    }

    .top-bar input::placeholder {
        color: #6C727F;
    }

    /* SIDE BAR */

    /* TABLE */

</style>