<script>
  import {store} from '../../store.js';
  import Jumbotron from '../Jumbotron.vue';
  export default {
    name: 'OverviewPage',
    data() {
        return {
            store,
        }
    },
    components: {Jumbotron},
    methods: {
        undoOrder() {
            store.cart = [];
            store.orderSuccesfull = null;
            store.customerInformation = null;
            store.totalPrice = 0;
            this.$router.push('/')
        }
    }

  }
</script>

<template>
    <Jumbotron />
    <div class="container">
        <span class="orange-text">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item text-decoration-underline">
                        <RouterLink :to="{ name: 'home-page', }">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Riepilogo</li>
                </ol>
            </nav>
        </span>
    </div>

    <div class="container" v-if="store.orderSuccesfull">
        <div class="cm-bg orange">
            <h2>Grazie per il tuo acquisto {{store.customerInformation.customer_name}}!</h2>
            <div class="d-flex align-items-center gap-3">
                <p>Siamo lieti di informarla che il suo ordine è stato ricevuto ed è attualmente in preparazione! Grazie
                    per aver scelto <strong>DeliveBoo</strong>!
                </p>
            </div>
        </div>


        <section id="order-overview">
            <h3 class="text-center">Il riepilogo del tuo ordine</h3>
            <div class="d-lg-flex justify-content-around ">
                <section class="cm-bg light-orange">
                    <h5>Piatti ordinati da {{ store.restaurantName }}</h5>
                    <div v-for="dish in store.cart" class="d-flex align-items-center justify-content-between">
                        <div class="d-flex gap-3">
                            <p><strong>{{ dish.quantity}}x</strong></p>
                            <p>{{ dish.name }}</p>
                        </div>
                        <p>{{ (dish.price).toFixed(2) }}€</p>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center justify-content-between">
                        <p><strong>Totale ordine</strong></p>
                        <p><strong>{{ (store.totalPrice).toFixed(2) }}€</strong></p>
                    </div>
                </section>
                <section class="cm-bg light-orange">
                    <h5>Dettagli di spedizione</h5>
                    <div class="d-flex align-items-center justify-content-between">
                        <p> <strong>Nome: </strong></p>
                        <p>
                            {{ store.customerInformation.customer_name }} {{
                            store.customerInformation.customer_surname }}
                        </p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p> <strong>Indirizzo: </strong></p>
                        <p>
                            {{ store.customerInformation.customer_address }}, Lamezia Terme, CZ
                        </p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p> <strong>Email: </strong></p>
                        <p>
                            {{ store.customerInformation.customer_email }}
                        </p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p> <strong>Numero di telefono: </strong></p>
                        <p>
                            {{ store.customerInformation.customer_phone }}
                        </p>
                    </div>
                </section>
            </div>
        </section>

        <div class="d-flex align-items-center justify-content-center">
            <button class="cm-button my-5" @click="undoOrder">Annulla ordine</button>
        </div>
    </div>
    <div v-else class="container full-height">
        <h2>Nessun ordine</h2>
    </div>
</template>

<style lang='scss' scoped>
section {
    margin-bottom: 2rem;

    h2 {
        margin-bottom: 1rem;
    }
    h5 {
        margin: 1rem 0;
    }
}

.cm-bg {
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem 0;

    &.light-orange {
        background-color: #fff9e6;
        flex-basis: 40%;
    }
    &.orange {
        background-color: #f5cf9a;
    }
}

.orange-text {
    color: #f48c06;
}

.full-height {
    height: 35.75vh;
}

</style>