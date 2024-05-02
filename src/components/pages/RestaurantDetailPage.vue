<script>
import { store } from '../../store.js';
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
        store,
        isModalVisible: false,
        currentDishQuantity: 1,
        currentDish: null

    }),
    methods: {
        getRestaurant() {
            axios.get(defaultEndpoint + this.$route.params.id)
                .then(res => {
                    this.restaurants = res.data
                })
                .catch(err => { console.error(err.message) })
        },
        addToCart(dish) {
            
            const { id, name, price, restaurant_id } = dish;
            if(store.cart.length > 0) {
                if (store.currentRestaurantId === restaurant_id) {
                    const existingItem = this.store.cart.find(item => item.id === id);
                    if (existingItem) {
                        existingItem.quantity += this.currentDishQuantity;
                        // localStorage.cart = JSON.stringify(this.store.cart)
                    } else {
                        store.cart.push({ id, name, price, quantity: this.currentDishQuantity, restaurant_id });
                        
                        // localStorage.cart = JSON.stringify(this.store.cart)
                    }
                } else {
                    alert('Non puoi ordinare da due ristoranti diversi. Per ordinare qui l\'ordine precedente verrà cancellato')
                    this.store.cart = [];
                    store.currentRestaurantId = null;
                    this.addToCart(dish)
                }

            } else {
                store.cart.push({ id, name, price, quantity: this.currentDishQuantity, restaurant_id });
                store.currentRestaurantId = restaurant_id;
            }
            
            this.closeModal();
        },
        populateModal(dish) {
            this.isModalVisible = true

            this.currentDish = dish;
        },
        closeModal() {
            this.isModalVisible = false;

            this.currentDish = null;
            this.currentDishQuantity = 1;

        },
        changeQuantity(mode) {
            if (mode === 'less') {
                if (this.currentDishQuantity === 1) {
                    return
                } else {
                    this.currentDishQuantity--;
                }
            } else {
                this.currentDishQuantity++;
            }
        }
    },
    created() {
        this.getRestaurant();
    },
    mounted() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                store.cart = JSON.parse(savedCart);
            } catch (error) {
                console.error('Error parsing cart data from local storage:', error);
            }
        }
    },
    watch: {
        'store.cart' : {
            handler(newCart) {
                localStorage.setItem('cart', JSON.stringify(newCart));
            },
            deep: true
        }
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
                @click="populateModal(dish)" class="col-lg-2 col-md-4 col-sm-6">
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

        <!-- modale  -->
        <div v-if="isModalVisible" class="dish-modal-container">
            <div class="dish-modal">
                <div class="d-flex align-items-center justify-content-between">
                    <h5>{{ currentDish.name }}</h5>
                    <span @click="closeModal" class="close-btn"><i class="fa-solid fa-x"></i></span>
                </div>
                <p class="ingredients">{{ currentDish.ingredients }}</p>
                <p>{{ currentDish.price }} €</p>
                <div class="d-flex align-items-center justify-content-center gap-5">
                    <span class="dish-option">
                        <i class="fa-solid fa-minus" @click="changeQuantity('less')"></i>
                    </span>
                    <span>{{ currentDishQuantity }}</span>
                    <span class="dish-option">
                        <i class="fa-solid fa-plus" @click="changeQuantity('more')"></i>
                    </span>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                    <button type="button" class="cm-button mt-5" @click="addToCart(currentDish)">Aggiungine {{
                        currentDishQuantity }} a {{ (currentDish.price * currentDishQuantity).toFixed(2) }}
                        €</button>
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

.plus-button {
    padding: 5px;
    background-color: #f48d06ad;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

}

.dish-modal-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);

}

.dish-modal {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 20px;
    width: 80%;
    padding: 2rem;

    .ingredients {
        color: grey;
        font-size: 14px;
    }

    .dish-option {
        padding: 10px;
        background-color: #f48d06ad;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;

    }

    .close-btn {
        cursor: pointer;
        background-color: lightgrey;
        padding: 5px 10px;
        border-radius: 50%;
    }
}

@media screen and (min-width: 900px) {
    .dish-modal {
        width: 35%;
    }
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