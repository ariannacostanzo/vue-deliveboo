<script>
import axios from 'axios';
import Loader from '../Loader.vue';
import { RouterLink } from 'vue-router';
const defaultEndpoint = 'http://localhost:8000/api/restaurants/';

export default {
    name: 'RestaurantDetailPage',
    components: { Loader },
    data: () => ({
        restaurants: null,
        dishes: null,
    }),
    methods: {
        getRestaurant() {
            axios.get(defaultEndpoint + this.$route.params.id)
                .then(res => {
                    this.restaurants = res.data
                })
                .catch(err => { console.error(err.message) })
        }
    },
    created() {
        this.getRestaurant();
    }
};
</script>

<template>

    <section class="my-jumbotron">
        <div class="text-container">
            <h2 class="text-center mt-3">{{ restaurants.name }}</h2>
            <address class="text-center"> {{ restaurants.address }}</address>
        </div>
        <img :src="restaurants.image" alt="">
    </section>


    <!-- <img v-if="restaurants.image" :src="restaurants.image" :alt="restaurants.name"
        class="img-fluid mx-auto d-block mb-5" style="width: 500px"> -->
    <h4 class="text-center  my-5">Scegli cosa ordinare</h4>
    <div class="container mb-5">
        <span class="orange">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item text-decoration-underline">
                        <RouterLink :to="{ name: 'home-page', }">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ restaurants.name }}</li>
                </ol>
            </nav>
        </span>
    </div>
    <div class="container">
        <div class="row">
            <div v-if="restaurants.dishes" v-for="dish in restaurants.dishes" :key="dish.id"
                class="col-lg-2 col-md-4 col-sm-6">
                <div class="my-card">
                    <div class="card-image">
                        <img v-if="dish.image" :src="dish.image" :alt="dish.name">
                    </div>
                    <div class="card-content d-flex flex-column justify-content-between">
                        <h5 class="card-title">{{ dish.name }}</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="card-text"> {{ dish.price }}€</p>
                            <span class="plus-button"><i class="fa-solid fa-plus"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.orange {
    color: #f48c06;
}

.my-jumbotron {
    height: 300px;
    opacity: 0.9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    position: relative;

}

.my-jumbotron img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(30%) brightness(70%) blur(3px);
}

h2 {
    font-size: 50px;
}

address {
    font-size: 20px;
}

.text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #f48c06;
    text-shadow: 0px 0px 5px black;
    z-index: 1;
}


.cards-container {
    margin: auto;
    width: 1600px;
}

.plus-button {
    padding: 5px;
    background-color: #f48d06ad;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

}


.my-card {
    margin-bottom: 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    height: 350px;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in-out;
}

.my-card:hover {
    transform: translateY(-20px);
}

.card-image img {
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.card-content {
    padding: 10px;
    flex: 1;
}

.card-text {
    margin: 0;
    font-size: 1rem;
}
</style>