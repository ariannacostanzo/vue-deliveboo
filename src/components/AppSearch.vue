<script>
import axios from 'axios';

export default {
    name: 'Jumbotron',
    data() {
        return {
            searchTerm: '',
            restaurants: [],
            types: []
        };
    },
    methods: {
        async searchRestaurants() {
            if (this.searchTerm.trim() !== '') {
                try {
                    const response = await axios.get('http://localhost:8000/api/restaurants');
                    this.restaurants = response.data.filter(restaurant =>
                        restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        restaurant.types.some(type => type.label.toLowerCase().includes(this.searchTerm.toLowerCase()))
                    );
                } catch (error) {
                    console.error(error);
                }
            } else {
                // Se la barra di ricerca è vuota, imposta vuoto
                this.restaurants = [];
            }
        },
        async fetchTypes() {
            try {
                const response = await axios.get('http://localhost:8000/api/types');
                this.types = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
    created() {
        this.fetchTypes();
    }
}
</script>

<template>
    <div class="search-bar">
        <div class="card">
            <div class="card-body">
                <h1 class="title-jumbotron text-center pt-5">Il bello è prenderci gusto</h1>
                <p class="text-center">Ordina online dai tuoi ristoranti preferiti</p>
                <div class="input-group justify-content-center">
                    <!-- <span class="input-group-text text-black" id="basic-addon1"><i
                                class="fa-solid fas fa-search"></i></span> -->
                    <input class="form-control" placeholder="cerca il tuo ristorante" v-model="searchTerm"
                        @input="searchRestaurants">
                    <button class="btn btn-primary" @click="searchRestaurants"><i
                            class="fa-solid fas fa-search"></i></button>
                </div>
            </div>
        </div>
    </div>

    <!-- sezione visuale filtro ricerca -->
    <section id="search-section">
        <div class="card-container">
            <div class="card" v-for="restaurant in restaurants" :key="restaurant.id">
                <img :src="restaurant.image" class="card-img-top" alt="Restaurant Image">
                <div class="card-body">
                    <h5 class="card-title">{{ restaurant.name }}</h5>
                    <p class="card-text">{{ restaurant.address }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .card {
        width: 300px;
        margin-bottom: 20px;

        .card-img-top {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    }
}
</style>