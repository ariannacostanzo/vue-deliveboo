<script>
import { store } from '../../store.js';
import axios from 'axios';
import { RouterLink } from 'vue-router';
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
        isDeleteModalVisible: false,
        currentDishQuantity: 1,
        currentDish: null,
        isLoading: false,

    }),
    computed: {
        numberInput() {
            return parseInt(this.currentDishQuantity)
        }
    },
    methods: {
        getRestaurant() {
            this.isLoading = true;

            axios.get(defaultEndpoint + this.$route.params.id)
                .then(res => {
                    this.restaurants = res.data
                })
                .catch(err => { console.error(err.message) })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        addToCart(dish) {
            //se ho già qualcosa nel carrello controllo se è dello stesso ristorante o meno
            const { id, name, price, restaurant_id } = dish;
            if(store.cart.length > 0) {
                if (store.currentRestaurantId === restaurant_id) {
                    const existingItem = this.store.cart.find(item => item.id === id);
                    if (existingItem) {
                        existingItem.quantity += parseInt(this.currentDishQuantity);
                    } else {
                        store.cart.push({ id, name, price: parseInt(price), quantity: parseInt(this.currentDishQuantity), restaurant_id });
                        store.restaurantName = this.restaurants.name
                    }
                    this.closeModal();
                } else {
                    this.isDeleteModalVisible = true;
                }
            //altrimenti aggiungo il piatto al carrello
            } else {
                store.cart.push({ id, name, price: parseInt(price), quantity: parseInt(this.currentDishQuantity), restaurant_id });
                store.currentRestaurantId = restaurant_id;
                store.restaurantName = this.restaurants.name
                this.closeModal();
            }
            
            
        },
        //se confermo la modale di cancellazione svuoto il carrello e aggiungo il piatto del nuovo ristorante
        confirmDeleteModal(mode) {
            if(mode === 'yes') {
                this.isDeleteModalVisible = false;
                this.store.cart = [];
                store.orderSuccesfull = null;
                store.currentRestaurantId = null;
                this.addToCart(this.currentDish)
                this.closeModal();
            } else {
                this.isDeleteModalVisible = false;
            }
        },
        //riempio dinamicamente la modale
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
            let convertedQuantity = parseInt(this.currentDishQuantity)
            if (mode === 'less') {
                if (convertedQuantity === 1) {
                    return
                } else {
                    convertedQuantity--;
                }
            } else {
                convertedQuantity++;
            }
            this.currentDishQuantity = convertedQuantity
        }
    },
    created() {
        this.getRestaurant();
        
    },
    //store in localStorage
    mounted() {
        const savedStore = localStorage.getItem('store');
        if (savedStore) {
            try {
                const parsedStore = JSON.parse(savedStore);
                Object.assign(store, parsedStore);
            } catch (error) {
                console.error('Error parsing store data from local storage:', error);
            }
        }
    },
    watch: {
        store: {
            handler(newStore) {
                localStorage.setItem('store', JSON.stringify(newStore));
            },
            deep: true
        }
    }
};
</script>

<template>
    <div>
        <Loader :isLoading="isLoading" />
    </div>

    <div v-if="restaurants">
        <section class="my-jumbotron">
            <div class="text-container">
                <h2 class="text-center mt-3">{{ restaurants.name }}</h2>
                <address class="text-center"> {{ restaurants.address }}</address>
            </div>
            <img :src="restaurants.image" alt="">
        </section>


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
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-7">
                <div v-if="restaurants.dishes" v-for="dish in restaurants.dishes" :key="dish.id"
                    @click="populateModal(dish)" class="col">
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
                        <span class="dish-option" @click="changeQuantity('less')">
                            <i class="fa-solid fa-minus"></i>
                        </span>
                        <input type="text" class="dish-quantity" 
                            v-model="currentDishQuantity">
                        <!-- <span>{{ currentDishQuantity }}</span> -->
                        <span class="dish-option" @click="changeQuantity('more')">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <button type="button" class="cm-button mt-5" @click="addToCart(currentDish)">Aggiungine {{
                            currentDishQuantity }} a {{ (currentDish.price * currentDishQuantity).toFixed(2) }}
                            €</button>
                    </div>
                </div>
            </div>

            <!-- modale cancellazione carrello  -->
            <div v-show="isDeleteModalVisible" class="delete-modal-container">
                <div class="delete-modal">
                    <p>Non puoi ordinare da ristoranti diversi. Per ordinare qui l'ordine precedente verrà cancellato
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <button class="cm-button" @click="confirmDeleteModal('yes')">Conferma</button>
                        <button class="cm-button" @click="confirmDeleteModal('no')">Annulla</button>
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

.dish-quantity {
    border: 0;
    width: 50px;
    text-align: center;

    &:focus-visible {
        outline: 1px solid #f48c06;
    }
}

.my-jumbotron {
    height: 300px;
    opacity: 0.9;
    box-shadow: 0 0px 1px  rgba(0, 0, 0, 0.8);
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

.delete-modal-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;

    
}
.delete-modal {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 20px;
    width: 90%;
    padding: 2rem;
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
        font-size: 16px;
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
@media screen and (min-width: 500px) {

    .delete-modal {
        width: 70%;
    }
}
@media screen and (min-width: 900px) {
    .dish-modal {
        width: 35%;
    }

    .delete-modal {
        width: 35%;
    }
}

@media screen and (min-width: 1200px) {
    .dish-modal {
        width: 35%;
    }

    .delete-modal {
        width: 25%;
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