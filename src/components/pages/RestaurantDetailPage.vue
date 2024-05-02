<script>
import { store } from '../../store.js';
import axios from 'axios';
import Loader from '../Loader.vue';
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
    <h2 class="text-center mt-3">{{ restaurants.name }}</h2>
    <address class="text-center"> {{ restaurants.address }}</address>

    <img v-if="restaurants.image" :src="restaurants.image" :alt="restaurants.name"
        class="img-fluid mx-auto d-block mb-5" style="width: 500px">
    <hr>
    <h4 class="text-center mb-5">Scegli cosa ordinare</h4>
    <div class="row cards-container">
        <div v-if="restaurants.dishes" v-for="dish in restaurants.dishes" :key="dish.id" class="col-2 dish-card"
            @click="populateModal(dish)">
            <div class="my-card">
                <div class="card-image">
                    <img v-if="dish.image" :src="dish.image" :alt="dish.name">
                </div>
                <div class="card-content d-flex flex-column justify-content-between">
                    <h5 class="card-title">{{ dish.name }}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text"> {{ dish.price }}€</p>
                        <span class="btn btn-sm btn-primary">+</span>
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