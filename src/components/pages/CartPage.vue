<script>
import Jumbotron from '../Jumbotron.vue';
import Braintree from '../Breintree.vue';
import {store} from '../../store.js'
  export default {
    name: 'CartPage',
    components: {Jumbotron , Braintree},
    data() {
        return {
            store,
        }
    },
    methods: {
        changeQuantity(mode, dish_id) {
            const dish = this.store.cart.find(item => item.id === dish_id);
            
            if(mode === 'less'){
                if(dish.quantity === 1) {
                    store.cart = store.cart.filter(dish => dish.id !== dish_id)
                } else {
                    dish.quantity--;
                }
            } else {
                dish.quantity++;
            }
            this.updatePrice()

        },
        updatePrice() {
            let totalPrice = 0;
            store.cart.forEach(dish => {
                totalPrice += dish.price * dish.quantity;
            })
            store.totalPrice = (parseFloat(totalPrice));
            console.log(store.totalPrice)
            console.log(totalPrice)
        }
    },
    //store in localStorage
    mounted() {
        const savedStore = localStorage.getItem('store');
        if (savedStore) {
            try {
                // Parse the saved store object from local storage
                const parsedStore = JSON.parse(savedStore);
                // Update each property of the reactive store with the parsed values
                Object.assign(store, parsedStore);
            } catch (error) {
                console.error('Error parsing store data from local storage:', error);
            }
        }
        console.log(store.totalPrice)
        this.updatePrice()
        
    },
    watch: {
        store: {
            handler(newStore) {
                localStorage.setItem('store', JSON.stringify(newStore));
            },
            deep: true
        }
    }
    //questo è quello del carrello, che non salva perà il fatto che l'ordine sia stato inviato e viene
    //preparato, ricopiare questo in caso le cose non funzionino
    // mounted() {
    //     const savedCart = localStorage.getItem('cart');
    //     if (savedCart) {
    //         try {
    //             store.cart = JSON.parse(savedCart);
    //         } catch (error) {
    //             console.error('Error parsing cart data from local storage:', error);
    //         }
    //     }
    // },
    // watch: {
    //     'store.cart': {
    //         handler(newCart) {
    //             localStorage.setItem('cart', JSON.stringify(newCart));
    //         },
    //         deep: true
    //     }
    // }
  }
</script>

<template>
    <Jumbotron />
    <div class="container">
        <span class="orange">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item text-decoration-underline">
                        <RouterLink :to="{ name: 'home-page', }">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Carrello</li>
                </ol>
            </nav>
        </span>
    </div>
    <div class="container cart-container" v-if="store.cart.length === 0 || store.orderSuccesfull">
        <h2>Nessun ordine</h2>
    </div>
    <div class="container mb-5 d-md-flex justify-content-between gap-5" v-else>


        <div class="left-content">

            <!-- riepilogo piatti -->
            <section id="dishes">
                <h2>Il tuo ordine</h2>
                <p>{{ store.totalQuantity }} <span v-if="store.totalQuantity === 1">prodotto</span>
                    <span v-else>prodotti</span>
                    da <strong>{{ store.restaurantName }}</strong>
                </p>
                <!-- list item  -->
                <div v-for="dish in store.cart" class="dishes-list-item d-lg-flex gap-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between gap-lg-3 mb-2">
                        <span class="dish-option" @click="changeQuantity('less', dish.id)"><i
                                class="fa-solid fa-minus"></i></span>
                        <span class="d-none d-lg-inline">{{ dish.quantity }}</span>
                        <span class="dish-option" @click="changeQuantity('more', dish.id)"><i
                                class="fa-solid fa-plus"></i></span>
                    </div>
                    <div class="d-flex  justify-content-between w-100">
                        <span class="dish-info mb-2"><strong class="d-lg-none">{{dish.quantity}}x</strong> {{ dish.name
                            }} </span>
                        <span class="dish-price">{{ (dish.price * dish.quantity).toFixed(2) }} €</span>
                    </div>
                </div>
            </section>

            <!-- riepilogo  -->
            <section id="overview">
                <h2>Riepilogo</h2>
                <div class="d-flex align-items-center justify-content-between ">
                    <p>Prodotto</p>
                    <p>{{ (store.totalPrice).toFixed(2) }} €</p>
                </div>
                <div class="d-flex align-items-center justify-content-between ">
                    <p>Consegna</p>
                    <p><span class="discount">2,99€</span><span class="gratis">GRATIS</span></p>
                </div>
                <hr>
                <div class="d-flex align-items-center justify-content-between">
                    <p><strong>TOTALE</strong></p>
                    <p><strong>{{ (store.totalPrice).toFixed(2) }} €</strong></p>
                </div>
            </section>
        </div>

        <div class="right-content">
            <!-- form e metodo di pagamento  -->
            <Braintree />
        </div>
    </div>


</template>

<style lang='scss' scoped>
@use '../../assets/scss/_vars.scss' as *;

.cart-container {
    min-height: 36vh;
}
.orange {
    color: #f48c06;
}
section {
    margin-bottom: 2rem;

    h2 {
        margin-bottom: 1rem;
    }
}

hr {
    color: black;
    opacity: .5;
}

.left-content {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.right-content {
    flex-basis: 40%;
}


.dish-option {
    padding: 6px;
    background-color: #f48d06ad;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    
}

.discount {
    font-size: 13px;
    text-decoration: line-through;
}


.gratis {
    background-color: $princeton-orange;
    padding: 2px 4px;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 5px;
}


//pagamento

// .button {
//     cursor: pointer;
//     font-weight: 500;
//     left: 3px;
//     line-height: inherit;
//     position: relative;
//     text-decoration: none;
//     text-align: center;
//     border-style: solid;
//     border-width: 1px;
//     border-radius: 3px;
//     // -webkit-appearance: none;
//     // -moz-appearance: none;
//     display: inline-block;
// }

// .button--small {
//     padding: 10px 20px;
//     font-size: 0.875rem;
// }

// .button--green {
//     outline: none;
//     background-color: #f48c06;
//     border-color: #f48c06;
//     color: white;
//     transition: all 200ms ease;
// }

// .button--green:hover {
//     background-color: #d67c06;
//     color: white;
// }



</style>