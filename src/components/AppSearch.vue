<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'Jumbotron',
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
    <div class="search-bar">
        <div class="card container-sm">
            <div class="card-body">
                <h1 class="title-jumbotron text-center pt-5">Il bello è prenderci gusto</h1>
                <p class="text-center">Ordina online dai tuoi ristoranti preferiti</p>
                <div class="input-group justify-content-center">
                    <input class="form-control" placeholder="cerca il tuo ristorante" v-model="searchTerm"
                        @input="searchRestaurants">
                    <button class="btn btn-primary" @click="searchRestaurants"><i
                            class="fa-solid fas fa-search"></i></button>
                </div>
            </div>
        </div>

        <!-- Box dei bottoni per il filtro -->
        <div class="card container-sm mt-3">
            <div class="card-body d-flex flex-wrap">
                <button v-for="type in types" :key="type.id" @click="toggleFilter(type.label)"
                    :class="{ 'btn btn-primary': isFilterSelected(type.label), 'btn btn-outline-primary': !isFilterSelected(type.label) }">{{
                        type.label }}</button>
            </div>
        </div>
    </div>

    <!-- sezione visuale filtro ricerca -->
    <section class="container-sm mt-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div class="col mb-4" v-for="(restaurant, index) in filteredRestaurants" :key="restaurant.id">
                <div class="card">
                    <img :src="restaurant.image" class="card-img-top" alt="Restaurant Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.name }}</h5>
                        <RouterLink class="btn btn-sm btn-primary"
                            :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }">Vedi</RouterLink>
                        <p class="card-text">{{
                            restaurant.address }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
.card {
    margin-bottom: 20px;

    .card-img-top {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
}
</style>
