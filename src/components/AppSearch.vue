<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'AppSearch',
    data() {
        return {
            searchTerm: '',
            restaurants: [],
            types: [],
            selectedFilters: []
        };
    },
    methods: {
        async searchRestaurants() {
            if (this.searchTerm.trim() !== '') {
                try {
                    const response = await axios.get('http://localhost:8000/api/restaurants');
                    this.restaurants = response.data.filter(restaurant =>
                        restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
                    );
                } catch (error) {
                    console.error(error);
                }
            } else {
                // Aggiorna la lista completa se la barra di ricerca è vuota
                this.fetchRestaurants();
            }
        },
        async fetchTypes() {
            try {
                const response = await axios.get('http://localhost:8000/api/types');
                this.types = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        toggleFilter(filter) {
            const index = this.selectedFilters.indexOf(filter.toLowerCase());
            if (index === -1) {
                this.selectedFilters.push(filter.toLowerCase());
            } else {
                this.selectedFilters.splice(index, 1);
            }
        },
        isFilterSelected(filter) {
            return this.selectedFilters.includes(filter.toLowerCase());
        },
        async fetchRestaurants() {
            try {
                const response = await axios.get('http://localhost:8000/api/restaurants');
                this.restaurants = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        restaurantDetail(restaurant) {
            this.$router.push({ name: 'detail-restaurant', params: { id: restaurant.id } });
        },
    },
    computed: {
        filteredRestaurants() {
            if (this.selectedFilters.length === 0) {
                return this.restaurants;
            } else {
                return this.restaurants.filter(restaurant =>
                    this.selectedFilters.every(filter =>
                        restaurant.types.some(type => type.label.toLowerCase() === filter)
                    )
                );
            }
        }
    },
    created() {
        this.fetchTypes();

        // Carica tutti i ristoranti all'avvio
        this.fetchRestaurants();
    }
}
</script>

<template>
    <div class="">
        <!-- Search Bar -->
        <div class="container d-flex justify-content-center flex-column text-center mt-5">
            <h1 class="title-jumbotron grower animated" ref="grower">Il bello è prenderci gusto</h1>
            <h5>Ordina online dai tuoi ristoranti preferiti</h5>
            <div class="search-bar search-bar-deliveboo">
                <input type="text" class="search-input" placeholder="Cerca il tuo ristorante" v-model="searchTerm"
                    @input="searchRestaurants">
                <button class="search-button" @click="searchRestaurants"><i class="fas fa-search"></i></button>
            </div>
        </div>


        <div class="">
            <!-- Filter Buttons -->
            <div class="container filter-container">
                <button v-for="type in types" :key="type.id" @click="toggleFilter(type.label)"
                    :class="{ 'filter-button active': isFilterSelected(type.label), 'filter-button': !isFilterSelected(type.label) }">
                    <i :class="['fas', type.icon]"></i> {{ type.label }}
                    <span v-if="isFilterSelected(type.label)" @click.stop="toggleFilter(type.label)"
                        class="close-filter">&times;</span>
                </button>
            </div>


            <!-- Restaurant Cards -->
            <div class="container">
                <section class="restaurant-container">
                    <div class="row gap-3 justify-content-center cards-row">
                        <template v-if="filteredRestaurants.length > 0">
                            <RouterLink :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }"
                                class="restaurant-card" v-for="(restaurant, index) in filteredRestaurants"
                                :key="restaurant.id">
                                <div class="restourant-image">
                                    <img :src="restaurant.image" class="card-image" alt="Restaurant Image">
                                </div>
                                <div class="card-details content">
                                    <h3 class="restaurant-name"><i class="fas fa-store"></i> {{ restaurant.name }}</h3>
                                    <p class="restaurant-address"><i class="fas fa-map-marker-alt"></i> {{
                                        restaurant.address }}</p>
                                    <div class="pills-container">
                                        <span class="pill" v-for="type in restaurant.types" :key="type.id">
                                            {{ type.label }}
                                        </span>
                                    </div>
                                </div>
                            </RouterLink>
                        </template>
                        <template v-else>
                            <div class="no-results-card">
                                <h2 class="no-results-text">Non ci sono risultati per queste ricerche.</h2>
                            </div>
                        </template>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
a {
    text-decoration: none;
    color: #212529;
}

// Search Bar Styles 
.search-bar-deliveboo {
    display: flex;
    align-items: center;
    border-radius: 40px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 10px;
}

.search-input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 20px;
}

.search-button {
    background-color: #faa307;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 0 40px 40px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

// Effetto Hover sul pulsante di ricerca
.search-button:hover {
    background-color: #f48c06;
}

// Filter Button Styles
.filter-container {
    margin-top: 20px;
    gap: 0.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
}

.filter-button {
    display: flex;
    margin: 0px 5px;
    padding: 10px 25px;
    border: none;
    border-radius: 25px;
    background-color: #f0f0f0;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.filter-button:hover {
    transform: scale(1.1);
}

.close-filter {

    display: flex;
    background-color: white;

    border-radius: 50%;

    width: 25px;
    height: 25px;

    cursor: pointer;

    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-2rem);

    font-size: 1.5rem;
    color: red;

    transition: visibility 0.3s ease;
    justify-content: center;
    align-items: center;
}

.filter-button:hover .close-filter {
    visibility: visible;
}

.filter-button.active {
    background-color: #F48C06;
    color: white;
    position: relative;

}

.filter-button:hover .close-filter {
    visibility: visible;
}


// Restaurant Card Styles 
.restaurant-card {
    margin-top: 3rem;
    margin-bottom: 3rem;

    max-width: 300px;
    background-color: #fff;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;

    // position: relative;
    // z-index: 2;
}

.restaurant-card:hover {
    transform: translateY(-20px);
}

.restourant-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 15px;
}

.restourant-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-details {
    margin-top: 20px;
    text-align: center;
}

.restaurant-name {
    margin: 0;
    font-size: 20px;
}

.restaurant-address {
    margin-top: 5px;
    font-size: 16px;
}

// Stili delle pills
.pills-container {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.pill {
    background-color: #F48C06;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    margin: 5px;
    font-size: 14px;
}

.no-results-card {
    margin-top: 5rem;
    margin-bottom: 5rem;

    background-color: #fff;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;

}
</style>
