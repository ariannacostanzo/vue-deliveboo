<script>
import axios from 'axios';

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
                this.fetchRestaurants(); // Aggiorna la lista completa se la barra di ricerca è vuota
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
        // animazione titolo
        animateGrower() {
            this.$refs.grower.classList.remove('animate');
            void this.$refs.grower.offsetWidth;
            this.$refs.grower.classList.add('animate');
        }

    },
    computed: {
        filteredRestaurants() {
            if (this.selectedFilters.length === 0) {
                return this.restaurants;
            } else {
                return this.restaurants.filter(restaurant =>
                    restaurant.types.some(type => this.selectedFilters.includes(type.label.toLowerCase()))
                );
            }
        }
    },
    created() {
        this.fetchTypes();
        this.fetchRestaurants(); // Carica tutti i ristoranti all'avvio
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

        <!-- Filter Buttons -->
        <div class="filter-container">
            <button v-for="type in types" :key="type.id" @click="toggleFilter(type.label)"
                :class="{ 'filter-button active': isFilterSelected(type.label), 'filter-button': !isFilterSelected(type.label) }">
                <i :class="['fas', type.icon]"></i> {{ type.label }}
                <span v-if="isFilterSelected(type.label)" @click.stop="toggleFilter(type.label)"
                    class="close-filter">&times;</span>
            </button>
        </div>

        <!-- Restaurant Cards -->
        <section class="restaurant-container">
            <div class="restaurant-card" v-for="(restaurant, index) in filteredRestaurants" :key="restaurant.id">
                <img :src="restaurant.image" class="card-image" alt="Restaurant Image">
                <div class="card-details">
                    <h3 class="restaurant-name"><i class="fas fa-store"></i> {{ restaurant.name }}</h3>
                    <p class="restaurant-address"><i class="fas fa-map-marker-alt"></i> {{ restaurant.address }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang='scss' scoped>
// Search container
.grower.animated {
    animation-name: grow;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes grow {
    0% {
        transform: scaleX(1);
    }

    25% {}

    50% {}

    75% {

        transform: scaleX(1.8);
    }

    100% {}
}

.grower {
    width: 100%;
    height: 50px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
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
    background-color: #f48c06;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 0 40px 40px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Effetto Hover sul pulsante di ricerca */
.search-button:hover {
    background-color: #e04a4e;
}





// Filter Button Styles
.filter-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.filter-button {
    margin: 0 10px;
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.filter-button.active {
    background-color: #007bff;
    color: white;
}

.close-filter {
    cursor: pointer;
    margin-left: 5px;
}

// Restaurant Card Styles 
.restaurant-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.restaurant-card {
    width: 250px;
    margin: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.restaurant-card:hover {
    transform: translateY(-5px);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-details {
    padding: 15px;
}

.restaurant-name {
    margin: 0;
    font-size: 20px;
}

.restaurant-address {
    margin-top: 5px;
    font-size: 16px;
}
</style>
