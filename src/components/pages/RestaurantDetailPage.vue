<script>
import axios from 'axios';
import Loader from '../Loader.vue';
const defaultEndpoint = 'http://localhost:8000/api/restaurants/';

export default {
    name: 'RestaurantDetailPage',
    components: { Loader },
    data: () => ({
        restaurants: null,
        dishes: null,
        isLoading: false

    }),
    methods: {
        getRestaurant() {
            this.isLoading = true;

            axios.get(defaultEndpoint + this.$route.params.id)
                .then(res => {
                    this.restaurants = res.data
                })
                .catch(err => { console.error(err.message); })
                .finally(() => {
                    this.isLoading = false;
                });
        }
    },
    created() {
        this.getRestaurant();
    },

};
</script>

<template>
    <div>

        <div>
            <Loader :isLoading="isLoading" />
        </div>

        <div v-if="restaurants">
            <h2 class="text-center mt-3">{{ restaurants.name }}</h2>
            <address class="text-center">{{ restaurants.address }}</address>

            <img v-if="restaurants.image" :src="restaurants.image" :alt="restaurants.name"
                class="img-fluid mx-auto d-block mb-5" style="width: 500px">
            <hr>
            <h4 class="text-center mb-5">Scegli cosa ordinare</h4>
            <div class="row cards-container">
                <div v-if="restaurants.dishes" v-for="  dish   in   restaurants.dishes  " :key="dish.id" class="col-2">
                    <div class="my-card">
                        <div class="card-image">
                            <img v-if="dish.image" :src="dish.image" :alt="dish.name">
                        </div>
                        <div class="card-content d-flex flex-column justify-content-between">
                            <h5 class="card-title">{{ dish.name }}</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"> {{ dish.price }}€</p>
                                <button class="btn btn-sm btn-primary">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang='scss' scoped>
// .restaurant-card {
//     width: 333px;
//     height: 333px;
// }

.cards-container {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    margin: auto;
    width: 1600px;
}


.my-card {
    // width: calc(15% - 20px);
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

// .card:hover {
//     box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
// }

.card-image img {
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.card-content {
    padding: 10px;
    flex: 1;
}

// .card-title {
//     margin-top: 0;
//     margin-bottom: 10px;
//     font-size: 1.2rem;
// }

.card-text {
    margin: 0;
    font-size: 1rem;
}
</style>